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
      <section className="w-screen max-w-none overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 w-full">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="relative w-full aspect-[3/4] h-full overflow-hidden"
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/50" />
              {/* centered name */}
              <h4
                className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-bold text-white text-center"
              >
                {artist.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    );
  }