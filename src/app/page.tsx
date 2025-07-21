import Navbar01 from "@/components/navbar-01/navbar-01";
import Hero04 from "@/components/hero-04/hero-04";
import Logos06Page from "@/components/logos-06/logos-06";
import { Musikpromotion } from "@/components/Musikpromotion/musikpromotion";
import { ArtistGallery } from "@/components/artistGallery/artistGallery";
import { ServicesSection } from "@/components/services/services";
import SpotifySection from "@/components/Spotify-section/spotify-section";
export default function Home() {
  return (
    <main>
      <Navbar01 />
      <Hero04 />
      <Logos06Page />
      <Musikpromotion />
      <ArtistGallery />
      <ServicesSection />
      <SpotifySection />


      
      <h1>Welcome to your new Next.js page!</h1>
    </main>
  );
}
