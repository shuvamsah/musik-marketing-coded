import Image from "next/image";
import { NavMenu } from "./nav-menu"
import { NavigationSheet } from "./navigation-sheet";

const Navbar01Page = () => {
  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/ATEM logo.svg"
            alt="Logo"
            width={40}
            height={40}
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
    </div>
  )
}

export default Navbar01Page