"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const typingWords = ["Musiker", "Brands", "Labels"];

const TypingEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 90;
  const deletingSpeed = 50;
  const pause = 900;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = typingWords[wordIndex];
    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % typingWords.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="text-[#8FEFE3]">{displayed}<span className="animate-pulse">|</span></span>
  );
};

const Hero04 = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="/images/CTA background.png"
        alt="Background"
        fill
        className="object-cover object-center opacity-80 -z-10"
        priority
      />
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0 items-center">
        <div className="my-auto z-10">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white max-w-[18ch]">
            PREMIUM MUSIK <br />
            <span className="inline-block mt-4">
              <span className="bg-[#8FEFE3] text-black px-6 py-2 rounded-md font-extrabold text-4xl md:text-5xl xl:text-6xl tracking-tight">
                MARKETING
              </span>
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl font-bold text-white">
            Mehr Reichweite, mehr Fans, mehr Streams, mehr Umsatz!
          </p>
          <p className="mt-2 text-base md:text-lg text-white max-w-xl">
            Aus dem Herzen Berlins: Wir sind offizielle Major Label Partner & gehören zu den führenden Musikmarketing Agenturen Deutschlands. Wir helfen Artists & Music Brands, ihre Fanbase authentisch aufzubauen & Releases erfolgreich zu promoten.
          </p>
          <p className="mt-6 text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            Marketing für <TypingEffect />
          </p>
          <Button className="mt-8 text-lg font-extrabold px-8 py-3">
            Strategie anfragen
          </Button>
          <div className="mt-6">
            <span className="text-[#8FEFE3] text-lg md:text-xl font-bold">
              Ohne Strategie ist Erfolg nur Zufall
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="/images/Hero pic.png"
            alt="Hero"
            width={420}
            height={420}
            className="rounded-xl shadow-2xl object-cover w-full max-w-xs md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero04;
