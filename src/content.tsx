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
    mission: "Chilli Flakes Studio — Bold Conversations. Unheard truths. Unthinkable perspectives.",
  },

  stats: [
    {
      value: "20K+",
      label: "Facebook Followers",
      description: "Growing community",
    },
    {
      value: "2M+",
      label: "Total Views",
      description: "Across META platforms",
    },
    {
      value: "3.61K+",
      label: "YouTube Subscribers",
      description: "And counting",
    },
    {
      value: "142K+",
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
    subtitle: "Extraordinary individuals sharing their inspiring stories, insights, and journeys",
    categories: ["All", "Sports", "Music", "Medical", "Education", "Defence", "Featured", "Upcoming"],
    data: [
      {
        id: "aminul",
        name: "Aminul Islam Bulbul",
        role: "President of BCB",
        category: "Sports",
        image: "/guests/Aminul Islam Bulbul.webp",
        videoUrl: "https://www.youtube.com/watch?v=4gJz7TtLWKs",
        videoId: "4gJz7TtLWKs",
      },
      {
        id: "khaled",
        name: "Khaled Mashud Pilot",
        role: "Former Captain, Bangladesh Cricket",
        category: "Sports",
        image: "/guests/Khaled Mashud Pilot.jpg",
        videoUrl: "https://www.youtube.com/watch?v=y7B1_N6NB0s",
        videoId: "y7B1_N6NB0s",
      },
      {
        id: "habibul",
        name: "Habibul Bashar",
        role: "Former Captain, Bangladesh Cricket",
        category: "Sports",
        image: "/guests/Habibul Bashar.jpg",
        videoUrl: "https://www.youtube.com/watch?v=oWwvR9G4QIc",
        videoId: "oWwvR9G4QIc",
      },
      {
        id: "razaul",
        name: "Razaul Karim Sumon",
        role: " Former Military Officer",
        category: "Defence",
        image: "/guests/Razaul Karim Sumon.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=CBiJhXtH8lE",
        videoId: "CBiJhXtH8lE",
      },
      {
        id: "Rafiq",
        name: "Khan Sobayel Bin Rafiq",
        role: " Former Military Officer",
        category: "Defence",
        image: "/guests/Khan Sobayel Bin Rafiq.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=CBiJhXtH8lE",
        videoId: "CBiJhXtH8lE",
      },   
      {
        id: "imroze",
        name: "Imroze Ahmed",
        role: "Senior Vice President, BOA and Former Military Officer",
        category: "Featured",
        image: "/guests/Imroze Ahmed.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=qzF5b08oMLI",
        videoId: "qzF5b08oMLI",
      }, 
      
      {
        id: "tabith",
        name: "Tabith Awal",
        role: "President of BFF",
        category: "Upcoming",
        image: "/guests/Tabith Awal.jpeg",
        videoUrl: "",
        videoId: "",
        upcoming: true,
      },
      
      {
        id: "hamin",
        name: "Hamin Ahmed",
        role: "Founder of Band Miles",
        category: "Music",
        image: "/guests/HaminAhmed.jpg",
        videoUrl: "https://www.youtube.com/watch?v=yQJrKS3d4bI",
        videoId: "yQJrKS3d4bI",
      },
      {
        id: "sabrin",
        name: "Dr. Sabrin",
        role: "Social Worker",
        category: "Medical",
        image: "/guests/Dr.Sabrin.jpg",
        videoUrl: "https://www.youtube.com/watch?v=1u9pzpplWe4",
        videoId: "1u9pzpplWe4",
      },
      // {
      //   id: "shahalam",
      //   name: "Shah Alam",
      //   role: "Community Leader",
      //   category: "Community",
      //   image: "/guests/Shah Alam.webp",
      //   videoUrl: "https://www.youtube.com/watch?v=CSoTkrbgKWU",
      //   videoId: "CSoTkrbgKWU",
      // },
      // {
      //   id: "riasat",
      //   name: "Riasat",
      //   role: "Featured Guest",
      //   category: "Featured",
      //   image: "/guests/Riasat .png",
      //   videoUrl: "https://www.youtube.com/watch?v=fJBPbK38zms",
      //   videoId: "fJBPbK38zms",
      // },
      {
        id: "cezanne",
        name: "Cezanne",
        role: "Bassist and co-founder of Artcell",
        category: "Music",
        image: "/guests/Cezanne.png",
        videoUrl: "https://www.youtube.com/watch?v=cwrlxWBGuEs",
        videoId: "cwrlxWBGuEs",
      },   
      
      {
        id: "tanveer",
        name: "Tanveer Shaheed",
        role: " (IEAA- SF) - Director, International Recruitment, Macquarie University - image provided in whatsapp",
        category: "Education",
        image: "/guests/Tanveer Shaheed.jpg",
        videoUrl: "https://www.youtube.com/watch?v=U1x610rt1qY",
        videoId: "U1x610rt1qY",
      },    
      {
        id: "nahyan",
        name: "Dr Nahyan",
        role: "Emergency Specialist",
        category: "Medical",
        image: "/guests/Dr Nahyan.png",
        videoUrl: "https://www.youtube.com/watch?v=n3iuo0HEgEg",
        videoId: "n3iuo0HEgEg",
      }, 

      {
        id: "kishwar",
        name: "Kishwar Chowdhury",
        role: "Featured Guest",
        category: "Upcoming",
        image: "/guests/Kishwar Chowdhury.jpeg",
        videoUrl: "",
        videoId: "",
        upcoming: true,
      },
      
      {
        id: "zohad",
        name: "Zohad",
        role: "Featured Guest",
        category: "Upcoming",
        image: "/guests/Zohad.jpeg",
        videoUrl: "",
        videoId: "",
        upcoming: true,
      },
         
    ],
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
        url: "https://www.facebook.com/profile.php?id=61577216227183",
        followers: "20K+",
        icon: "facebook",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@chilliflakesstudio",
        followers: "3.61K",
        icon: "youtube",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/chilliflakesstudio",
        followers: "90+",
        icon: "instagram",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@thechilliflakesst",
        followers: "319+",
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
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
};

export type SiteContent = typeof siteContent;
