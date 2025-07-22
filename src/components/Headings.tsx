"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Music } from "lucide-react";

interface HeadingsProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Headings({
  children,
  icon = <Music className="w-6 h-6" style={{ color: '#8FEFE3' }} />,
}: HeadingsProps) {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white flex flex-wrap justify-center items-center gap-x-2">
        {Array.isArray(children) ? (
          <>
            <span style={{ color: '#8FEFE3' }}>{children[0]}</span>
            {children.slice(1)}
          </>
        ) : (
          children
        )}
      </h2>
      <div className="mt-6 w-1/5 mx-auto flex justify-center">
        <div className="flex items-center justify-center w-full space-x-6">
          <Separator className="flex-1 h-1 border-2" style={{ borderColor: '#8FEFE3' }} />
          <span className="flex items-center justify-center bg-black rounded-full p-2">
            {React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<React.ComponentProps<'svg'>>, {
                  className: `${(icon as React.ReactElement<React.ComponentProps<'svg'>>).props.className || ''} w-10 h-10 !fill-current`,
                  style: { color: '#8FEFE3' }
                })
              : icon}
          </span>
          <Separator className="flex-1 h-1 border-2" style={{ borderColor: '#8FEFE3' }} />
        </div>
      </div>
    </section>
  );
}
