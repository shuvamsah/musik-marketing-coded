"use client";

import Image from "next/image";
import { Headings } from "@/components/Headings";
import { Button } from "@/components/ui/button";
import { Atom, Volume2, Users, Headphones } from "lucide-react";

export function Musikpromotion() {
  return (
    <div className="bg-black text-white">
      {/* 1. Global heading */}
      <Headings lineWidth="w-16 md:w-32" icon={<Atom className="w-6 h-6 text-teal-400" />}>
        {["Authentisches Marketing ", "& Musikpromotion"]}
      </Headings>

      {/* 2. Content */}
      <section
        className="relative container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 py-16 overflow-hidden"
        style={{ backgroundImage: 'url(/images/music-branding.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />
        {/* Left column */}
        <div className="relative z-10 w-full lg:w-1/2 space-y-6">
          {/* H5 Title */}
          <h5 className="text-xl font-semibold">
            Kanalübergreifende Strategien für Musiker &amp; Music Brands
          </h5>

          {/* Paragraphs */}
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Alle Erfolgs­geschichten im Musik­business haben eines gemeinsam:{" "}
              <span className="font-bold">Eine klare Strategie.</span>{" "}
              <span className="font-bold">Unsere Referenzen</span> sprechen für sich:
              Wir arbeiten mit den{" "}
              <span className="font-bold">wichtigsten Musiklabels Deutschlands</span>{" "}
              zusammen und wissen genau, wie du auf das nächste Level kommst –{" "}
              <span className="font-bold">ohne leere Versprechen oder Fake-Angebote.</span>
            </p>
            <p>
              Egal ob ambitionierter <span className="font-bold">Newcomer</span>,{" "}
              <span className="font-bold">Musikmanager</span> oder bereits etablierte{" "}
              <span className="font-bold">Music Brand</span> – wir holen dich da ab,
              wo du gerade stehst, und entwickeln deine{" "}
              <span className="font-bold">Musik Marketing Strategie</span>. Vom Aufbau
              deiner einzigartigen <span className="font-bold">Artist Brand</span> über
              authentische <span className="font-bold">Social Media Strategien</span> bis
              hin zu echtem <span className="font-bold">Spotify Playlist Pitching</span> –
              wir bieten dir alles, was du für nachhaltigen Erfolg brauchst. Und für
              wenige, auserwählte Artists, mit denen wir bereits erfolgreich
              gearbeitet haben, gehen wir noch weiter:{" "}
              <span className="font-bold">Wir investieren &amp; verschaffen exklusive Label deals!</span>
            </p>
          </div>

          {/* Feature List */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <Atom className="w-6 h-6 text-teal-400 mt-1" />
              <span>Authentische Social Media Strategien</span>
            </li>
            <li className="flex items-start gap-3">
              <Volume2 className="w-6 h-6 text-teal-400 mt-1" />
              <span>Musikpromotion &amp; Spotify Playlist Pitching</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-6 h-6 text-teal-400 mt-1" />
              <span>Marketing für Labels &amp; Label Gründung</span>
            </li>
          </ul>

          {/* Call‑to‑Action Button */}
          <Button
            className="mt-8 px-8 py-3 border border-teal-400 text-lg font-semibold
                       rounded-md shadow-[0_0_15px_rgba(56,203,185,0.7)]
                       hover:bg-teal-400 hover:text-black transition"
          >
            Dein Erfolg beginnt hier
          </Button>
        </div>

      </section>
    </div>
  );
}