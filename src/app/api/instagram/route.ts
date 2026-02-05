import { NextResponse } from "next/server";

/**
 * Instagram API Route
 *
 * IMPORTANT: To fetch real Instagram posts from @chilliflakesstudio, you need:
 *
 * 1. The Instagram account owner must create a Facebook Developer App
 * 2. Add "Instagram Basic Display" product to the app
 * 3. Add the Instagram account as a test user
 * 4. Generate a long-lived access token
 * 5. Add INSTAGRAM_ACCESS_TOKEN to your .env.local file
 *
 * Setup Guide: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
 *
 * Without the token, this API will return posts from the local /public/instagram-posts folder
 */

interface InstagramPost {
  id: string;
  src: string;
  title: string;
  category: string;
  permalink: string;
  timestamp: string;
}

// Revalidate every 5 minutes
export const revalidate = 300;

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // If we have an access token, fetch from Instagram API
  if (accessToken) {
    try {
      const response = await fetch(
        `https://graph.instagram.com/chilliflakesstudio/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=12`,
        {
          next: { revalidate: 300 },
          headers: { 'Cache-Control': 'no-cache' }
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Instagram API error:", errorData);

        if (response.status === 400 || response.status === 401) {
          console.error("Instagram token expired or invalid");
        }

        // Fall back to static posts
        return NextResponse.json({
          posts: getStaticPosts(),
          source: "static",
          message: "Instagram API error - showing static posts",
          lastUpdated: new Date().toISOString(),
        });
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        return NextResponse.json({
          posts: getStaticPosts(),
          source: "static",
          message: "No posts from Instagram API - showing static posts",
          lastUpdated: new Date().toISOString(),
        });
      }

      // Transform Instagram API data - LATEST FIRST
      const posts: InstagramPost[] = data.data
        .filter((post: { media_type: string }) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
        )
        .sort((a: { timestamp: string }, b: { timestamp: string }) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        )
        .slice(0, 12)
        .map((post: {
          id: string;
          media_url: string;
          thumbnail_url?: string;
          caption?: string;
          permalink: string;
          timestamp: string;
        }) => {
          const caption = post.caption || "";
          const hashtagMatch = caption.match(/#(\w+)/);
          const category = hashtagMatch ? hashtagMatch[1] : "ChilliFlakes";

          const cleanTitle = caption
            .split("\n")[0]
            .replace(/#\w+/g, "")
            .trim()
            .substring(0, 100) || "Chilli Flakes Studio";

          return {
            id: post.id,
            src: post.media_url || post.thumbnail_url,
            title: cleanTitle,
            category: category.charAt(0).toUpperCase() + category.slice(1),
            permalink: post.permalink,
            timestamp: post.timestamp,
          };
        });

      return NextResponse.json({
        posts,
        source: "instagram_api",
        lastUpdated: new Date().toISOString(),
        totalPosts: posts.length,
      });

    } catch (error) {
      console.error("Error fetching from Instagram:", error);
      return NextResponse.json({
        posts: getStaticPosts(),
        source: "static",
        message: "Error fetching from Instagram - showing static posts",
        lastUpdated: new Date().toISOString(),
      });
    }
  }

  // No token - return static posts from local images
  return NextResponse.json({
    posts: getStaticPosts(),
    source: "static",
    message: "No Instagram token configured - showing static posts. Add INSTAGRAM_ACCESS_TOKEN to enable live feed.",
    lastUpdated: new Date().toISOString(),
  });
}

/**
 * Static posts from @chilliflakesstudio Instagram
 * These images should be manually downloaded and saved to /public/instagram-posts/
 * Update this list when adding new images
 */
function getStaticPosts(): InstagramPost[] {
  const now = new Date();

  // Posts based on actual @chilliflakesstudio Instagram content
  return [
    {
      id: "post-1",
      src: "/instagram-posts/post-1.jpg",
      title: "আমার বিয়ের ১০ দিনের মাথায়",
      category: "Interview",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-2",
      src: "/instagram-posts/post-2.jpg",
      title: "অনেক VAST",
      category: "Podcast",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-3",
      src: "/instagram-posts/post-3.jpg",
      title: "Train With",
      category: "Sports",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-4",
      src: "/instagram-posts/post-4.jpg",
      title: "নিরাপত্তা প্রদান",
      category: "Interview",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-5",
      src: "/instagram-posts/post-5.jpg",
      title: "হাসিমুর SIP",
      category: "Podcast",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-6",
      src: "/instagram-posts/post-6.jpg",
      title: "Investigation",
      category: "Documentary",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-7",
      src: "/instagram-posts/post-7.jpg",
      title: "Packer's Revolution",
      category: "Sports",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-8",
      src: "/instagram-posts/post-8.jpg",
      title: "Traitors of Bangladesh",
      category: "Documentary",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-9",
      src: "/instagram-posts/post-9.jpg",
      title: "UN মিশনে রকেট হামলা",
      category: "Interview",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-10",
      src: "/instagram-posts/post-10.jpg",
      title: "Is Cricket Highjacked?",
      category: "Sports",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-11",
      src: "/instagram-posts/post-11.jpg",
      title: "BCCI ICC BCB ক্ষমতার খেলা",
      category: "Sports",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 11 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "post-12",
      src: "/instagram-posts/post-12.jpg",
      title: "MILES - Hamin Ahmed",
      category: "Music",
      permalink: "https://www.instagram.com/chilliflakesstudio/",
      timestamp: new Date(now.getTime() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];
}
