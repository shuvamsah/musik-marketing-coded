"use client";

import Image from "next/image";
import React from "react";

interface Artist {
  name: string;
  image: string;
}

const artists: Artist[] = [
  { name: "NIMO",         image: "/images/artists/NIMO.png" },
  { name: "CAPO",         image: "/images/artists/CAPO.png" },
  { name: "AZZI MEMO",    image: "/images/artists/AZZI MEMO.png" },
  { name: "MARVIN GAME",  image: "/images/artists/MARVIN GAME.png" },
  { name: "ALINE JOST",   image: "/images/artists/ALINE JOST.png" },
  { name: "JEYZ",         image: "/images/artists/JEYZ.png" },
];

export function ArtistGallery() {
    return (
      <section className="w-full relative overflow-hidden">
        {/* Fade overlay across entire section */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 z-10" />
        
        <div className="grid grid-cols-6 w-full">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
              <h4
                className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center px-2 z-20"
              >
                {artist.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    );
  }