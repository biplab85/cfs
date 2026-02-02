// Chilli Flakes Studio - Content Data
// All website content is managed from this single file

export const siteContent = {
  brand: {
    name: "Chilli Flakes Studio",
    tagline: "Bold Conversations That Matter",
    description: "Sydney's Premier South Asian Podcast",
    logo: "/logo.png",
  },

  hero: {
    headline: "Where Stories Ignite",
    subheadline: "Sydney's leading podcast amplifying South Asian voices across the globe",
    ctaYoutube: "Watch on YouTube",
    ctaFacebook: "Be Our Next Guest", 
    youtubeUrl: "https://youtube.com/@chilliflakesstudio",
    facebookUrl: "#",
  },

  about: {
    title: "Our Story",
    content: `Chilliflakes Studio is a Sydney-based podcast channel created for the South Asian diaspora.
    Our podcast speaks to the South Asian community not only in Sydney but across the world,
    amplifying voices that deserve to be heard. We bring together thought leaders, artists,
    athletes, and changemakers for conversations that inspire and connect.`,
    mission: "At Chilliflakes Studio, we believe in bold conversations that matter, dialogues that spark change today and contribute to a better world for tomorrow.",
  },

  stats: [
    {
      value: "13K+",
      label: "Facebook Followers",
      description: "Growing community",
    },
    {
      value: "1.5M+",
      label: "Total Views",
      description: "Across META platforms",
    },
    {
      value: "1.2K+",
      label: "YouTube Subscribers",
      description: "And counting",
    },
    {
      value: "30K+",
      label: "YouTube Views",
      description: "Engaged audience",
    },
  ],

  audience: {
    title: "Global Reach",
    regions: [
      { country: "Bangladesh", percentage: 60 },
      { country: "Australia", percentage: 20 },
      { country: "India", percentage: 8 },
      { country: "Pakistan", percentage: 5 },
      { country: "Canada", percentage: 4 },
      { country: "United Kingdom", percentage: 3 },
    ],
  },

  guests: {
    title: "Featured Guests",
    subtitle: "High-profile individuals from various disciplines",
    featured: [
      {
        name: "Aminul Islam Bulbul",
        role: "President of BCB",
        category: "Cricket",
        image: "/guests/aminul.jpg",
        bio: "Current President of Bangladesh Cricket Board and former national cricketer",
      },
      {
        name: "Khaled Mashud Pilot",
        role: "Former Captain, Bangladesh National Cricket Team",
        category: "Cricket",
        image: "/guests/khaled.jpg",
        bio: "Legendary wicketkeeper-batsman who led Bangladesh in international cricket",
      },
      {
        name: "Saef Al Nazi",
        role: "Bassist of Band Artcell",
        category: "Music",
        image: "/guests/saef.jpg",
        bio: "Founding member of Artcell, Bangladesh's pioneering progressive metal band with 800K+ followers",
      },
      {
        name: "Hamin Ahmed",
        role: "Founder of Band Miles",
        category: "Music",
        image: "/guests/hamin.jpg",
        bio: "Legendary musician and founder of Miles, one of Bangladesh's most influential rock bands with 800K+ followers",
      },
    ],
    categories: ["Cricket", "Music", "Medical", "Social Work", "Military", "Education"],
  },

  episodes: {
    title: "Latest Episodes",
    subtitle: "Watch our most popular conversations",
    featured: [
      {
        title: "Cricket & Leadership with Aminul Islam Bulbul",
        thumbnail: "/episodes/ep1.jpg",
        description: "An in-depth conversation about the future of Bangladesh cricket",
        views: "120K",
        platform: "Facebook",
      },
      {
        title: "The Journey of Miles with Hamin Ahmed",
        thumbnail: "/episodes/ep2.jpg",
        description: "Exploring five decades of Bangladeshi rock music",
        views: "95K",
        platform: "YouTube",
      },
      {
        title: "Behind the Music: Artcell's Story",
        thumbnail: "/episodes/ep3.jpg",
        description: "The untold story of Bangladesh's progressive metal pioneers",
        views: "88K",
        platform: "Facebook",
      },
    ],
  },

  mission: {
    quote: "Bold conversations that matter, dialogues that spark change.",
    author: "Chilli Flakes Studio",
  },

  social: {
    title: "Connect With Us",
    platforms: [
      {
        name: "Facebook",
        url: "https://facebook.com/chilliflakesstudio",
        followers: "13K+",
        icon: "facebook",
      },
      {
        name: "YouTube",
        url: "https://youtube.com/@chilliflakesstudio",
        followers: "1.2K+",
        icon: "youtube",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/chilliflakesstudio",
        followers: "2K+",
        icon: "instagram",
      },
      {
        name: "TikTok",
        url: "https://tiktok.com/@chilliflakesstudio",
        followers: "500+",
        icon: "tiktok",
      },
    ],
  },

  cta: {
    guestTitle: "Be Our Next Guest",
    guestDescription: "Have a story to share? We'd love to hear from you.",
    guestButton: "Apply Now",
    subscribeTitle: "Never Miss an Episode",
    subscribeDescription: "Subscribe to get notified when new episodes drop.",
    subscribeButton: "Subscribe",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Chilli Flakes Studio. All rights reserved.`,
    tagline: "Amplifying South Asian Voices from Sydney to the World",
    links: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
      { label: "Contact", url: "/contact" },
    ],
  },
};

export type SiteContent = typeof siteContent;
