import Navbar01Page from "@/components/navbar-01/navbar-01";
import Hero04 from "@/components/hero-04/hero-04";
import Logos06Page from "@/components/logos-06/logos-06";
import { Musikpromotion } from "@/components/Musikpromotion/musikpromotion";
import { ArtistGallery } from "@/components/artistGallery/artistGallery";
import { ServicesSection } from "@/components/services/services";
import SpotifySection from "@/components/Spotify-section/spotify-section";
import StepsSection from "@/components/timeline-06/steps-section";
import CTASection from "@/components/CTA-Section/cta-section";
import Testimonial05 from "@/components/testimonial-05/testimonial-05";
import FAQ03 from "@/components/faq-03/faq-03";
import Footer03Page from "@/components/footer-03/footer-03";

export default function Home() {
  return (
    <main>
      <Navbar01Page />
      <Hero04 />
      <Logos06Page />
      <Musikpromotion />
      <ArtistGallery />
      <ServicesSection />
      <SpotifySection />
      <StepsSection />
      <FAQ03 />
      <Testimonial05 />
      <CTASection />
      <Footer03Page />
    </main>
  );
}
