"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Music } from "lucide-react";

interface HeadingsProps {
  /** The text or elements to display as the heading */
  children: React.ReactNode;
  /** Optional icon displayed between the separators */
  icon?: React.ReactNode;
  /** Width of the separator lines (Tailwind width class) */
  lineWidth?: string;
}


export function Headings({
  children,
  icon = <Music className="w-6 h-6 text-teal-400" />,
  lineWidth = "w-16 md:w-32",
}: HeadingsProps) {
  // Support two-tone heading: pass an array or React fragment as children
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white flex flex-wrap justify-center items-center gap-x-2">
        
        {Array.isArray(children) ? (
          <>
            <span className="text-teal-300">{children[0]}</span>
            {children.slice(1)}
          </>
        ) : (
          children
        )}
      </h2>
      <div className="mt-6 w-1/5 mx-auto flex justify-center">
        <div className="flex items-center justify-center w-full space-x-6">
          <Separator className="flex-1 h-1 border-2 border-teal-300" />
          <span className="flex items-center justify-center bg-black rounded-full p-2">
            {React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<any, any>, {
                  className: `${(icon as React.ReactElement<any, any>).props.className || ''} w-10 h-10 text-cyan-300 !fill-current`
                })
              : icon}
          </span>
          <Separator className="flex-1 h-1 border-2 border-teal-300" />
        </div>
      </div>
    </section>
  );
}
