import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playlistId = searchParams.get("id");

  if (!playlistId) {
    return NextResponse.json({ videos: [], error: "Playlist ID required" }, { status: 400 });
  }

  try {
    // Fetch playlist page from YouTube
    const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

    const response = await fetch(playlistUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch playlist");
    }

    const html = await response.text();

    // Extract video data from the playlist page
    // Look for playlistVideoRenderer objects
    const videoDataRegex = /"playlistVideoRenderer":\{"videoId":"([^"]+)".*?"title":\{"runs":\[\{"text":"([^"]+)"\}\]/g;

    const videos: { id: string; title: string; thumbnail: string }[] = [];
    const seenIds = new Set<string>();

    let match;
    while ((match = videoDataRegex.exec(html)) !== null) {
      const videoId = match[1];
      const title = match[2];

      if (!seenIds.has(videoId)) {
        seenIds.add(videoId);
        videos.push({
          id: videoId,
          title: title.replace(/\\u0026/g, "&").replace(/\\"/g, '"'),
          thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        });
      }
    }

    // If the regex didn't work, try alternative extraction
    if (videos.length === 0) {
      // Try to find videoId patterns
      const videoIdRegex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
      const titleRegex = /"title":\{"runs":\[\{"text":"([^"]+)"\}\],"accessibility"/g;

      const videoIds: string[] = [];
      const titles: string[] = [];

      while ((match = videoIdRegex.exec(html)) !== null) {
        if (!videoIds.includes(match[1])) {
          videoIds.push(match[1]);
        }
      }

      while ((match = titleRegex.exec(html)) !== null) {
        titles.push(match[1].replace(/\\u0026/g, "&").replace(/\\"/g, '"'));
      }

      // Combine video IDs and titles
      for (let i = 0; i < Math.min(videoIds.length, 50); i++) {
        if (!seenIds.has(videoIds[i])) {
          seenIds.add(videoIds[i]);
          videos.push({
            id: videoIds[i],
            title: titles[i] || `Episode ${i + 1}`,
            thumbnail: `https://img.youtube.com/vi/${videoIds[i]}/mqdefault.jpg`,
          });
        }
      }
    }

    return NextResponse.json({ videos: videos.slice(0, 50) });
  } catch (error) {
    console.error("Error fetching playlist:", error);
    return NextResponse.json({ videos: [], error: "Failed to fetch playlist" }, { status: 500 });
  }
}
