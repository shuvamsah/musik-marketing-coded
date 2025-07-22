import React from "react";
import { Headings } from "@/components/Headings";
import Timeline from "./timeline-06";
import { Check, Target } from "lucide-react";

export default function StepsSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-screen-xl mx-auto mb-10">
        <Headings icon={<Target />}>
          {["Musik ", "Marketing in 5 Schritten"]}
        </Headings>
      </div>
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col justify-center items-start space-y-6 md:pr-8 bg-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Dein Sound verdient echte Fans.</h2>
          <p className="text-base md:text-lg text-white/90 mb-4">
            Vom Aufbau deiner Künstleridentität bis zur perfekten Release-Strategie: Wir entwickeln mit dir einen individuellen Content- & Releaseplan, um deine Musik gezielt zu promoten und deine Fanbase nachhaltig zu vergrößern.
          </p>
          <ul className="space-y-3 text-lg mb-6">
            <li className="flex items-center gap-3"><Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Künstleraufbau & Labelgründung</li>
            <li className="flex items-center gap-3"><Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Musikmarketing-Strategien</li>
            <li className="flex items-center gap-3"><Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Werbung & Promotion für Musiker</li>
            <li className="flex items-center gap-3"><Check className="w-6 h-6" style={{ color: '#8FEFE3' }} /> Spotify Playlist Pitching</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center w-full bg-black">
          <Timeline />
        </div>
      </div>
    </section>
  );
}