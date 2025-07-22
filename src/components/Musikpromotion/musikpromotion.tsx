"use client";

import { Headings } from "@/components/Headings";
import { Button } from "@/components/ui/button";
import { Atom, Volume2, Users } from "lucide-react";

export function Musikpromotion() {
  return (
    <div className="bg-black text-white">
      <Headings icon={<Atom className="w-6 h-6" style={{ color: '#8FEFE3' }} />}>
        {["Authentisches Marketing ", "& Musikpromotion"]}
      </Headings>

      <section
        className="relative container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 py-16 overflow-hidden"
        style={{ backgroundImage: 'url(/images/music-branding.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />
        <div className="relative z-10 w-full lg:w-1/2 space-y-6">
          <h5 className="text-xl font-semibold">
            Kanalübergreifende Strategien für Musiker & Music Brands
          </h5>

          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Alle Erfolgsgeschichten im Musikbusiness haben eines gemeinsam:{" "}
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
              <span className="font-bold">Music Brand</span> – wir holen dich da ab,
              wo du gerade stehst, und entwickeln deine{" "}
              <span className="font-bold">Musik Marketing Strategie</span>. Vom Aufbau
              deiner einzigartigen <span className="font-bold">Artist Brand</span> über
              authentische <span className="font-bold">Social Media Strategien</span> bis
              hin zu echtem <span className="font-bold">Spotify Playlist Pitching</span> –
              wir bieten dir alles, was du für nachhaltigen Erfolg brauchst. Und für
              wenige, auserwählte Artists, mit denen wir bereits erfolgreich
              gearbeitet haben, gehen wir noch weiter:{" "}
              <span className="font-bold">Wir investieren & verschaffen exklusive Label deals!</span>
            </p>
          </div>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <Atom className="w-6 h-6 mt-1" style={{ color: '#8FEFE3' }} />
              <span>Authentische Social Media Strategien</span>
            </li>
            <li className="flex items-start gap-3">
              <Volume2 className="w-6 h-6 mt-1" style={{ color: '#8FEFE3' }} />
              <span>Musikpromotion & Spotify Playlist Pitching</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-6 h-6 mt-1" style={{ color: '#8FEFE3' }} />
              <span>Marketing für Labels & Label Gründung</span>
            </li>
          </ul>

          <Button className="mt-8 px-8 py-3 text-lg font-semibold">
            Dein Erfolg beginnt hier
          </Button>
        </div>
      </section>
    </div>
  );
}