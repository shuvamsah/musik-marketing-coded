import Image from "next/image";
import { NavMenu } from "./nav-menu"
import { NavigationSheet } from "./navigation-sheet";

const Navbar01Page = () => {
  return (
    <nav className="h-20 bg-black text-white flex items-center border-b border-neutral-800">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Image
          src="/images/ATEM logo.svg"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        {/* Mobile Menu */}
        <div className="md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  )
}

export default Navbar01Page