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
          <p className="uppercase tracking-widest text-teal-300 font-medium mb-2 text-sm">Kanalübergreifende Werbung für deine Musik</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            <span className="text-teal-300">Spotify</span>, TikTok, Reels...
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-teal-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1ED760"/><path d="M17.25 16.25C15.25 15.25 8.75 14.75 6.75 15.75M17.25 13.25C15.25 12.25 8.75 11.75 6.75 12.75M13.25 8.75C12.25 8.25 9.75 8.25 8.75 8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <span className="text-teal-300 font-semibold"> </span>
          </div>
          <p className="mb-6 text-lg max-w-xl">
            Mit über 500 erfolgreichen Kampagnen sind wir <span className="font-bold">marktführend</span> in den Bereichen <span className="font-bold">Musikwerbung & Songpromotion</span>. Wir schalten zielgerichtete Werbung für deine Musik auf allen Kanälen und sorgen für mehr Reichweite und echte Streams mit <span className="font-bold">datenbasierter Musikpromotion</span>! Zudem bieten wir <span className="font-bold">professionelle Schulungen</span> an und bringen dir bei, deine eigene Werbung zu schalten – <span className="font-bold">unabhängig von Musikmarketing Agenturen!</span>
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center gap-3 text-base">
              <Check className="text-teal-300 w-6 h-6" /> Musikpromotion & Schulungen
            </li>
            <li className="flex items-center gap-3 text-base">
              <Check className="text-teal-300 w-6 h-6" /> Mehr Reichweite, mehr Fans, mehr Streams
            </li>
            <li className="flex items-center gap-3 text-base">
              <Check className="text-teal-300 w-6 h-6" /> Deutschlands größte Musikmarketing Datenbank
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
