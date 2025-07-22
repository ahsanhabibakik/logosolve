"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="LogoSolve"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Social Media Links */}
          <div className="flex items-center gap-3 border-l pl-4 border-border/40">
            <a 
              href="https://dribbble.com/logosolve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
              aria-label="Dribbble Portfolio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.955 9.955 0 0112 2.069c2.262 0 4.344.744 6.043 1.99zM9.173 3.155a44.59 44.59 0 013.423 5.317c-3.341.818-6.333 1.01-9.01.535a9.963 9.963 0 015.587-5.852zM2.068 12c0-.163.004-.323.01-.484 3.007.577 6.39.355 10.052-.635.284.614.54 1.213.765 1.791-3.377 1.122-6.126 3.245-8.165 6.38A9.92 9.92 0 012.067 12zm3.918 7.505c1.858-2.815 4.28-4.7 7.312-5.652 1.223 3.223 2.089 6.17 2.564 8.834A9.923 9.923 0 0112 21.931c-2.207 0-4.24-.707-5.914-1.906zm11.422-.321c-.438-2.353-1.208-5.042-2.299-7.997 1.876-.265 3.93-.196 6.167.196a9.957 9.957 0 01-3.868 7.801z"/>
              </svg>
            </a>
            <a 
              href="https://behance.net/logosolve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
              aria-label="Behance Portfolio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613-.24.458-.571.829-.989 1.114-.423.289-.915.501-1.475.64-.571.138-1.173.208-1.809.208H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707-.103-.189-.242-.335-.416-.436-.181-.1-.39-.168-.627-.202-.241-.034-.49-.051-.752-.051H4.59v2.86h2.862zm.162 5.361c.285 0 .548-.025.789-.067.241-.042.451-.119.627-.229.181-.11.317-.268.427-.48.107-.212.162-.485.162-.82 0-.653-.186-1.126-.559-1.418-.373-.291-.917-.437-1.634-.437H4.59v3.451h3.024zM19.674 19.14c.405.002.774-.04 1.106-.125.33-.086.6-.211.806-.376.203-.165.35-.373.442-.625.09-.253.135-.569.135-.949 0-.38-.062-.704-.187-.969-.125-.264-.3-.479-.523-.649-.226-.17-.494-.3-.806-.39-.308-.09-.654-.135-1.035-.135-.38 0-.733.045-1.057.135-.326.09-.6.22-.83.39-.229.17-.404.385-.523.649-.121.265-.182.589-.182.969 0 .38.045.696.135.949.09.252.239.46.442.625.205.165.476.29.806.376.329.085.701.127 1.106.125zm-1.106-6.202c.304 0 .588-.04.853-.119.264-.08.491-.2.683-.36.19-.159.339-.363.447-.611.107-.248.162-.542.162-.885 0-.334-.055-.618-.162-.853-.108-.235-.258-.426-.447-.571-.192-.145-.419-.25-.683-.312-.265-.064-.549-.096-.853-.096-.32 0-.612.032-.876.096-.264.063-.493.167-.683.312-.19.145-.339.336-.447.571-.108.235-.162.519-.162.853 0 .343.054.637.162.885.108.248.257.452.447.611.19.16.419.28.683.36.264.079.556.119.876.119zM15.95 5.488h7.062v1.657H15.95V5.488zm-3.055 9.358c-.44.858-1.156 1.487-2.149 1.886-.993.4-2.089.599-3.291.599H0V3.8h7.881c.734 0 1.436.08 2.108.239.671.16 1.261.426 1.77.799.51.372.915.873 1.213 1.501.297.629.447 1.435.447 2.428 0 1.028-.241 1.887-.723 2.577-.482.69-1.189 1.211-2.122 1.561.988.345 1.72.875 2.193 1.591.473.717.709 1.596.709 2.639 0 1.028-.19 1.911-.57 2.65z"/>
              </svg>
            </a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-stone-600 hover:text-stone-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Social Media Links for Mobile */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/40">
                <a 
                  href="https://dribbble.com/logosolve" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Dribbble Portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.955 9.955 0 0112 2.069c2.262 0 4.344.744 6.043 1.99zM9.173 3.155a44.59 44.59 0 013.423 5.317c-3.341.818-6.333 1.01-9.01.535a9.963 9.963 0 015.587-5.852zM2.068 12c0-.163.004-.323.01-.484 3.007.577 6.39.355 10.052-.635.284.614.54 1.213.765 1.791-3.377 1.122-6.126 3.245-8.165 6.38A9.92 9.92 0 012.067 12zm3.918 7.505c1.858-2.815 4.28-4.7 7.312-5.652 1.223 3.223 2.089 6.17 2.564 8.834A9.923 9.923 0 0112 21.931c-2.207 0-4.24-.707-5.914-1.906zm11.422-.321c-.438-2.353-1.208-5.042-2.299-7.997 1.876-.265 3.93-.196 6.167.196a9.957 9.957 0 01-3.868 7.801z"/>
                    </svg>
                    <span>Dribbble</span>
                  </div>
                </a>
                <a 
                  href="https://behance.net/logosolve" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Behance Portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613-.24.458-.571.829-.989 1.114-.423.289-.915.501-1.475.64-.571.138-1.173.208-1.809.208H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707-.103-.189-.242-.335-.416-.436-.181-.1-.39-.168-.627-.202-.241-.034-.49-.051-.752-.051H4.59v2.86h2.862zm.162 5.361c.285 0 .548-.025.789-.067.241-.042.451-.119.627-.229.181-.11.317-.268.427-.48.107-.212.162-.485.162-.82 0-.653-.186-1.126-.559-1.418-.373-.291-.917-.437-1.634-.437H4.59v3.451h3.024zM19.674 19.14c.405.002.774-.04 1.106-.125.33-.086.6-.211.806-.376.203-.165.35-.373.442-.625.09-.253.135-.569.135-.949 0-.38-.062-.704-.187-.969-.125-.264-.3-.479-.523-.649-.226-.17-.494-.3-.806-.39-.308-.09-.654-.135-1.035-.135-.38 0-.733.045-1.057.135-.326.09-.6.22-.83.39-.229.17-.404.385-.523.649-.121.265-.182.589-.182.969 0 .38.045.696.135.949.09.252.239.46.442.625.205.165.476.29.806.376.329.085.701.127 1.106.125zm-1.106-6.202c.304 0 .588-.04.853-.119.264-.08.491-.2.683-.36.19-.159.339-.363.447-.611.107-.248.162-.542.162-.885 0-.334-.055-.618-.162-.853-.108-.235-.258-.426-.447-.571-.192-.145-.419-.25-.683-.312-.265-.064-.549-.096-.853-.096-.32 0-.612.032-.876.096-.264.063-.493.167-.683.312-.19.145-.339.336-.447.571-.108.235-.162.519-.162.853 0 .343.054.637.162.885.108.248.257.452.447.611.19.16.419.28.683.36.264.079.556.119.876.119zM15.95 5.488h7.062v1.657H15.95V5.488zm-3.055 9.358c-.44.858-1.156 1.487-2.149 1.886-.993.4-2.089.599-3.291.599H0V3.8h7.881c.734 0 1.436.08 2.108.239.671.16 1.261.426 1.77.799.51.372.915.873 1.213 1.501.297.629.447 1.435.447 2.428 0 1.028-.241 1.887-.723 2.577-.482.69-1.189 1.211-2.122 1.561.988.345 1.72.875 2.193 1.591.473.717.709 1.596.709 2.639 0 1.028-.19 1.911-.57 2.65z"/>
                    </svg>
                    <span>Behance</span>
                  </div>
                </a>
              </div>
              
              <Button className="mt-6 w-full" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;