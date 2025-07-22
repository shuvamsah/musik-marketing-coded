import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4 md:px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/CTA background.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left px-4 md:px-0">
            <h2 className="text-[26px] md:text-[40px] font-bold text-white mb-3 md:mb-4 leading-tight">
              A.T.E.M. Musik Marketing
            </h2>
            <h3 className="text-[26px] md:text-[40px] font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#8FEFE3' }}>
              Agentur Berlin Sony Center
            </h3>
            <p className="text-white text-[17px] md:text-[18px] font-[300] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A.T.E.M. steht für &quot;Anstatt Träumen Einfach Machen&quot;.
              <br className="hidden md:block" />
              <span className="block md:inline"> Denn wer zögert, verliert den Vorsprung. Darum frage noch</span>
              <br className="hidden md:block" />
              <span className="block md:inline"> heute deine individuelle Musikmarketing Strategie an.</span>
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
            <Button size="lg" className="w-full lg:w-auto text-[18px]">
              Musikpromotion anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
