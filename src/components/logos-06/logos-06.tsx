import Marquee from "@/components/ui/marquee";

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
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="overflow-hidden">
        <p className="text-center text-xl font-medium">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-20 flex items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
          <Marquee pauseOnHover className="[--duration:20s] [&_img]:mr-10">
            {socialLogos.map((src, idx) => (
              <img key={idx} src={src} alt={`Logo ${idx + 1}`} className="h-12 w-auto object-contain" />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos06Page;
