import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  firmName?: string;
}

const Navbar = ({ firmName = "KARI UOTI" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null or a loading state until component is mounted
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-100 shadow-sm h-20"></nav>
    );
  }

  const navItems = [
    { name: "Toimeksiannot", href: "#practice-areas" },
    { name: "Tietoa meistä", href: "#about" },
    { name: "Tiimi", href: "#team" },
    { name: "Yhteystiedot", href: "#contact" },
    { name: "Blogi", href: "#blog" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Firm Name */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-gray-900 font-light tracking-widest text-xl"
            >
              {firmName}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-1 py-2 text-sm font-light tracking-wider transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                className="ml-4 border-gray-300 text-gray-700 hover:bg-gray-50 font-light tracking-wider"
              >
                Ota yhteyttä
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn("md:hidden bg-white", isMenuOpen ? "block" : "hidden")}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-light text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-light tracking-wider"
            >
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
