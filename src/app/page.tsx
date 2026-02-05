import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroDesktop from "@/components/HeroDesktop";
import Stats from "@/components/Stats";
import Guests from "@/components/Guests";
import Episodes from "@/components/Episodes";
import PlaylistViewer from "@/components/PlaylistViewer";
import PlaylistEpisodes from "@/components/PlaylistEpisodes";
import GlobalReach from "@/components/GlobalReach";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Social from "@/components/Social";
import InstagramGallery from "@/components/InstagramGallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      <Navigation />
      {/* 1. Hero - Captures attention immediately */}
      <HeroDesktop />
      {/* 8. Social Media Presence */}
      {/* <Hero /> */}
      {/* 2. Channel Statistics - Key metrics */}
      <Stats />
      {/* 3. Featured Guests - Prominent personalities */}
      <Guests />
      {/* 4. Latest Episodes - Fresh content */}
      {/* <Episodes /> */}
      {/* Playlist Episodes - Videos from specific playlist */}
      <PlaylistEpisodes />
      {/* Playlist Viewer - Full episode playlist */}
      {/* <PlaylistViewer /> */}
      {/* 5. Global Reach - International audience */}
      <GlobalReach />
      {/* 6. Our Story - Background and mission */}
      <About />
      {/* 7. Media Gallery - Visual highlights */}
      <Gallery />
      {/* Desktop Feature Section - Desktop view only */}

      <Social />
      {/* Instagram Gallery - Latest posts from Instagram */}
      {/* <InstagramGallery /> */}
      {/* 9. Call-to-Action */}
      <CTA />
      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
