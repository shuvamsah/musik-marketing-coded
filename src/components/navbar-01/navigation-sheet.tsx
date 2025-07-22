import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black border-neutral-800 text-white p-6">
        <Image
          src="/images/ATEM logo.svg"
          alt="Logo"
          width={40}
          height={40}
          priority
        />
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};
