import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const Footer03Page = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/ATEM logo.svg"
              alt="ATEM Logo"
              width={120}
              height={40}
              className="mb-4 md:mb-6"
            />
            <p className="text-white text-base md:text-lg font-medium">
              Anstatt Träumen Einfach Machen
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6" style={{ color: '#8FEFE3' }}>
              Navigation
            </h3>
            <nav className="space-y-3 md:space-y-4">
              <Link href="#" className="block text-white hover:opacity-80 transition-colors text-base md:text-lg">
                Musik Marketing
              </Link>
              <Link href="#" className="block text-white hover:opacity-80 transition-colors text-base md:text-lg">
                Songwriting
              </Link>
              <Link href="#" className="block text-white hover:opacity-80 transition-colors text-base md:text-lg">
                Häufige Fragen (FAQ)
              </Link>
              <Link href="#" className="block text-white hover:opacity-80 transition-colors text-base md:text-lg">
                Karriere
              </Link>
              <Link href="#" className="block text-white hover:opacity-80 transition-colors text-base md:text-lg">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6" style={{ color: '#8FEFE3' }}>
              Kontakt
            </h3>
            <div className="space-y-3 md:space-y-4">
              <p className="text-white font-medium text-base md:text-lg">
                A.T.E.M. Management GmbH
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Sony Center, Kemperplatz 1, 10785 Berlin
              </p>
              <div className="flex justify-center mt-4">
                <Link 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                Impressum und Datenschutz
              </Link>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Designed and Developed by <span className="underline">ATEM Marketing</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer03Page;
