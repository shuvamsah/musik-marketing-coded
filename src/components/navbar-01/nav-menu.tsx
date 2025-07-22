import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className={`gap-12 text-white font-bold text-lg ${props.orientation === 'vertical' ? 'flex-col items-start gap-6' : ''}`}>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Musik Marketing</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Services</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Häufige Fragen (FAQ)</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Karriere</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Kontakt</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
  