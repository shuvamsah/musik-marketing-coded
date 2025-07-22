'use client';
import Image from "next/image";

const steps = [
  {
    title: "Musikmarketing anfragen",
    description:
      "Bewirb dich jetzt für eine Zusammenarbeit – wir prüfen, ob deine Anfrage zu unseren Strategien passt.",
    icon: "/images/Tree icons/1.png",
  },
  {
    title: "Quality Check",
    description:
      "Wir analysieren deine Brand, deine Musik & alle deine Kanäle und identifizieren Wachstumspotenziale.",
    icon: "/images/Tree icons/2.png",
  },
  {
    title: "Marketingstrategie",
    description:
      "Gemeinsam entwickeln wir eine maßgeschneiderte Release- & Promotionsstrategie.",
    icon: "/images/Tree icons/3.png",
  },
  {
    title: "Musikpromotion",
    description:
      "Wir bringen dir bei, Werbung zu schalten oder begleiten dich mit Werbung für deine Musik auf Spotify, YouTube, Instagram, TikTok & Co!",
    icon: "/images/Tree icons/4.png",
  },
  {
    title: "Musik Analytics",
    description:
      "Wir analysieren & optimieren – basierend auf echten Daten, damit du langfristig wächst. Die größten Talente sichern sich exklusive Deals!",
    icon: "/images/Tree icons/5.png",
  },
];

export default function Timeline() {
  return (
    <div className="relative w-full min-h-[600px]">
      <div
        className="absolute bg-gradient-to-b from-[#8FEFE3] to-transparent"
        style={{
          left: '40px',
          top: '40px',
          width: '4px',
          height: 'calc(100% - 80px)',
          zIndex: 0,
        }}
      />
      {steps.map(({ title, description, icon }, index) => (
        <div
          key={index}
          className="flex items-center w-full relative z-10 mb-16 last:mb-0"
        >
          <div className="relative flex items-center justify-center w-20 h-20">
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 bg-black shadow-[0_0_16px_4px_#8FEFE3] border-[#8FEFE3]">
              <Image src={icon} alt="icon" width={48} height={48} />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-black bg-[#8FEFE3]">
              {index + 1}
            </span>
          </div>

          <div className="pl-8 text-left">
            <h3 className="text-xl font-bold mb-2 text-white">{index + 1}. {title}</h3>
            <p className="text-white/80 text-base max-w-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
