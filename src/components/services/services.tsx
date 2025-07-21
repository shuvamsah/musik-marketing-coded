"use client";

import Image from "next/image";
import { Headings } from "@/components/Headings";
import { Card } from "@/components/ui/card";
import React from "react";

const services = [
  {
    title: "Newcomer Academy",
    desc: "Lerne von Musikindustrie Experten und vernetze dich mit Producern, Labels & anderen Artists!",
    image: "/images/Services/Newcomer Academy.png",
    icon: "/images/Icons/Newcomer Academy icon.png",
  },
  {
    title: "Social Media für Musiker",
    desc: "Authentische TikTok, Instagram, & YouTube Strategien für Musiker & Music Brands",
    image: "/images/Services/Social Media für Musiker.jpg",
    icon: "/images/Icons/Social Media für Musiker icon.png",
  },
  {
    title: "Werbung & Musikpromotion",
    desc: "Wir schalten für dich zielgerichtete Werbung oder bringen dir bei, selbst Werbung zu schalten",
    image: "/images/Services/Werbung & Musikpromotion.png",
    icon: "/images/Icons/Werbung & Musikpromotion icon.png",
  },
  {
    title: "Authentisches Branding",
    desc: "Gemeinsam erschaffen wir einzigartige Künstleridentitäten & echte Music Brands",
    image: "/images/Services/Authentisches Branding.png",
    icon: "/images/Icons/Authentisches Branding icon.png",
  },
  {
    title: "Deutschrap Songwriting",
    desc: "Raptexte schreiben lassen oder verbessern von unseren Deutschrap Ghostwritern",
    image: "/images/Services/Deutschrap Songwriting.png",
    icon: "/images/Icons/Deutschrap Songwriting icon.png",
  },
  {
    title: "Label gründen",
    desc: "Strategieberatung für alle Musikinvestoren & Musikmanager, die ihr eigenes Label gründen wollen",
    image: "/images/Services/Label gründen.png",
    icon: "/images/Icons/Label gründen icon.png",
  },
  {
    title: "Audio- & Videoproduktion",
    desc: "Wir connecten dich mit den besten Musikproduzenten aus deiner Region",
    image: "/images/Services/udio- & Videoproduktion.png",
    icon: "/images/Icons/udio- & Videoproduktion - icon.png",
  },
  {
    title: "Musik Vertrieb",
    desc: "Vertriebsauswahl, Spotify Playlist Pitching, Merch uvm.! Wir unterstützen beim Musikvertrieb",
    image: "/images/Services/Musik Vertrieb.png",
    icon: "/images/Icons/Musik Vertrieb icon.png",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-black text-white py-16">
      <Headings>
        {["Von Musik Marketing ", "bis Label Gründung"]}
      </Headings>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service) => (
          <Card key={service.title} className="relative overflow-hidden group p-0 h-[340px] rounded-xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-xl"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300 z-10 rounded-xl" />
            <div className="relative z-20 flex flex-col h-full justify-end p-6">
              <div className="flex items-center mb-4">
                <Image src={service.icon} alt="icon" width={48} height={48} className="mr-3" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{service.title}</h3>
              <p className="text-base text-white/90 drop-shadow-md">{service.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
