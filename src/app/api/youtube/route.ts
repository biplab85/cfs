import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Chilli Flakes Studio channel
    const channelUrl = "https://www.youtube.com/@ChilliFlakesStudio/videos";

    const response = await fetch(channelUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch channel");
    }

    const html = await response.text();

    // Extract video data from the page
    const videoIdRegex = /\"videoId\":\"([a-zA-Z0-9_-]{11})\"/g;
    const titleRegex = /\"title\":\{\"runs\":\[\{\"text\":\"([^\"]+)\"\}\]/g;

    const videoIds: string[] = [];
    const titles: string[] = [];

    let match;
    while ((match = videoIdRegex.exec(html)) !== null) {
      if (!videoIds.includes(match[1])) {
        videoIds.push(match[1]);
      }
    }

    while ((match = titleRegex.exec(html)) !== null) {
      titles.push(match[1]);
    }

    // Create video objects with thumbnails
    const videos = videoIds.slice(0, 25).map((id, index) => ({
      id,
      title: titles[index] || `Episode ${index + 1}`,
      thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      thumbnailHQ: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      description: "",
      publishedAt: "",
      url: `https://www.youtube.com/watch?v=${id}`,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json({ videos: [], error: "Failed to fetch videos" }, { status: 500 });
  }
}
