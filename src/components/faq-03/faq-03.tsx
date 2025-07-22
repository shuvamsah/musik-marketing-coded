"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Headings } from "@/components/Headings";
import { Button } from "@/components/ui/button";

const faq = [
  {
    question: "Habt ihr feste Musikmarketing-Preise?",
    answer: (
      <>
        Unsere Musikmarketing-Strategien sind individuell, weil jeder Artist
        einzigartig ist. Wir bieten keine Standardpakete, sondern
        maßgeschneiderte Lösungen für dein Level – ob Newcomer oder
        Chart-relevant. Erfahrungsgemäß starten Newcomer mit einem Budget
        zwischen 1.500 und 3.000 € für zwei bis drei Monate.
        <br />
        <br />
        Darunter ist qualitative Musikpromotion nicht realistisch umsetzbar.
        Professionelles Musik Marketing ist ein Investment in deine Karriere –
        es spart dir viel Zeit, kritische Fehler und verschwendete Budgets.
        <br />
        <br />
        Der Return ist klar: Mehr Reichweite, mehr Fans, mehr Wachstum, mehr
        Umsatz!
        <br />
        <br />
        Nach oben gibt es im Marketing für Musiker keine Grenzen – je mehr
        Budget, desto schneller und nachhaltiger sind die Ergebnisse.
        <br />
        <br />➡ Bewirb dich jetzt für ein individuelles Angebot
      </>
    ),
  },
  {
    question: "Investiert ihr auch in Artists wie ein Label?",
    answer: (
      <>
        Ja - Wir wählen gezielt Artists aus, in die wir investieren, und haben
        ein festgelegtes Jahresbudget für 2-3 Künstler. Wenn du mit uns 3
        Monate arbeitest und zeigst, dass du deine Karriere ernst nimmst, hast
        du die Chance auf strategische Investments oder exklusive Deals mit uns
        und unseren Partnern.
        <br />
        <br />
        Wir unterstützen Artists, die sich durch Engagement, starke Musik und
        professionelles Auftreten hervorheben. Hier zählen dein musikalisches
        Potenzial und deine Persönlichkeit.
        <br />
        <br />
        Für talentierte Artists bieten wir bereits in der Testphase Rabatte und
        besondere Konditionen an.
        <br />
        <br />➡ Jetzt Strategiegespräch vereinbaren und dein Potenzial zeigen
      </>
    ),
  },
  {
    question: "Bietet ihr Spotify-Playlist-Platzierungen an?",
    answer: (
      <>
        Ja - Wir helfen auserwählten Artists, in relevante Playlists zu kommen
        – aber nicht durch gekaufte Playlists oder fragwürdige Streams. Achtung
        vor Fake-Angeboten! Spotify verbietet den Kauf von
        Playlist-Platzierungen. 99 % der Anbieter sind Fake.
        <br />
        <br />
        Playlists können ein Faktor für mehr Reichweite sein, aber
        nachhaltiger Erfolg kommt durch eine Kombination aus Social Media,
        Werbekampagnen und authentischem Fanaufbau.Wir helfen dir, organisch zu
        wachsen – durch echte Fans, datenbasierte Werbekampagnen und relevante
        Kontakte.
        <br />
        <br />➡ Wir zeigen dir, wie du durch echtes Wachstum in Playlists
        kommst.
      </>
    ),
  },
  {
    question: "Was, wenn ich schon ein Team oder Manager habe?",
    answer: (
      <>
        Kein Problem – wir arbeiten mit bestehenden Teams & Managern zusammen,
        ohne eure Unabhängigkeit einzuschränken und ergänzen euch als
        unabhängiger, strategischer Partner. Wir verstehen, dass eine Karriere
        verschiedene Experten braucht – unser Ziel ist es, euer
        Musik-Marketing strategisch zu optimieren und euer Wachstum zu
        beschleunigen.
        <br />
        <br />➡ Lass uns gemeinsam herausfinden, wie wir euch optimal
        ergänzen.
      </>
    ),
  },
  {
    question: "Was ist die A.T.E.M. Music Academy?",
    answer: (
      <>
        Die A.T.E.M. Music Academy ist unser Weiterbildungsprogramm für
        Artists, die ihre Karriere selbst in die Hand nehmen wollen. Hier
        lernst du alles über Musik-Marketing, Branding, Social Media,
        Streaming-Strategien und Fanaufbau – direkt von Experten aus der
        Branche.
        <br />
        <br />
        Unsere Academy ist einzigartig, weil sie Wissen vermittelt, Artists &
        Producer vernetzt und Musik Industrie Experten in die Workshops
        einbindet. Du lernst, selbst Werbung zu schalten und bekommst alle
        Werkzeuge, um langfristig unabhängig zu wachsen oder dich von uns
        begleiten zu lassen.
        <br />
        <br />
        Gemeinsam erarbeiten wir individuelle Strategien für deine Musik,
        zeigen dir bewährte Methoden und bringen dich Schritt für Schritt bei,
        wie du deine Reichweite gezielt aufbaust, deine Musik erfolgreich
        vermarktest und langfristig Fans gewinnst.
        <br />
        <br />
        Die Academy richtet sich an Newcomer, aufstrebende Artists und
        Manager, die mehr Kontrolle über ihre Karriere haben wollen.
        <br />
        <br />➡ Mach dein Wissen zum Erfolg. Jetzt Academy Platz anfragen.
      </>
    ),
  },
  {
    question: "Bin ich bereit für professionelles Musikmarketing?",
    answer: (
      <>
        Du bist bereit, wenn du:
        <br />
        <br />- Deine Musik professionell produzierst und releasen willst
        <br />
        <br />- Bereit bist, aktiv auf Social Media zu sein
        <br />
        <br />- Mindestens 1.500 EUR investieren kannst
        <br />
        <br />
        Falls du an dem Punkt bist, an dem du deine Karriere aufs nächste Level
        bringen willst, macht professionelles Musikmarketing Sinn.
        <br />
        <br />➡ Jetzt deine nächste Stufe erreichen.
      </>
    ),
  },
];

const FAQ03 = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-screen-lg">
        <Headings icon={<HelpCircle />}>
          {["Häufig gestellte Fragen", "– Alles, was du wissen musst"]}
        </Headings>

        <div className="mt-6 w-full grid md:grid-cols-2 gap-x-10">
          <Accordion type="single" collapsible className="w-full">
            {faq.slice(0, 3).map(({ question, answer }, index) => (
              <AccordionItem
                key={question}
                value={`question-${index}`}
                className="border-neutral-700"
              >
                <AccordionTrigger className="text-start text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            {faq.slice(3).map(({ question, answer }, index) => (
              <AccordionItem
                key={question}
                value={`question-${index + 3}`}
                className="border-neutral-700"
              >
                <AccordionTrigger className="text-start text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 text-center">
          <Button>Mehr Infos</Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ03;
