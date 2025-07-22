import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const socialLogos = [
  "/images/social logos/Frame 35.png",
  "/images/social logos/Frame 36.png",
  "/images/social logos/Frame 37.png",
  "/images/social logos/Frame 38.png",
  "/images/social logos/Frame 39.png",
  "/images/social logos/image 38.png",
  "/images/social logos/image 39.png",
];

const Logos06Page = () => {
  return (
    <section className="w-full bg-black py-12 flex items-center justify-center">
      <div className="overflow-hidden w-full max-w-6xl">
        <Marquee pauseOnHover className="[--duration:20s] [&_img]:mr-16">
          {socialLogos.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Logo ${idx + 1}`}
              width={64}
              height={64}
              className="h-16 w-auto object-contain brightness-0 invert opacity-90 transition duration-300 hover:opacity-100"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Logos06Page;
