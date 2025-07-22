import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const SpotifySection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 items-center">
        {/* Left: Full-width phone mockup */}
        <div className="flex justify-center items-center min-h-[400px] w-full">
          <div className="w-full">
            <Image
              src="/images/Spotify pic.png"
              alt="Spotify phone mockup"
              width={1200}
              height={2400}
              className="rounded-2xl shadow-2xl w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        {/* Right: Text content */}
        <div className="flex flex-col justify-center lg:pl-12">
          <p className="uppercase tracking-widest font-medium mb-2 text-sm" style={{ color: '#8FEFE3' }}>Kanalübergreifende Werbung für deine Musik</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            <span style={{ color: '#8FEFE3' }}>Spotify</span>, TikTok, Reels...
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8">
            <span style={{ color: '#8FEFE3' }}>
              Echte Musik Promotion bedeutet für uns, deine Songs so zu promoten, dass echte Fans auf dich aufmerksam werden
            </span>
            <span className="font-semibold" style={{ color: '#8FEFE3' }}> </span>
            und deine Musik dadurch von den Algorithmen der Plattformen bevorzugt ausgespielt wird.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Musikpromotion & Schulungen
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Organischer Fanaufbau durch Werbung
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Mehr Reichweite, mehr Fans, mehr Streams
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Deutschlands größte Musikmarketing Datenbank
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
