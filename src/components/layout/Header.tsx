"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import ModeToggle from "@/components/mode-toggle";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

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
            <span className="relative h-8 w-[140px] block">
              <Image
                src="/logo/Logo-black.png"
                alt="LogoSolve"
                fill
                className="object-contain h-8 w-auto block dark:hidden"
                priority
              />
              <Image
                src="/logo/Logo-white.png"
                alt="LogoSolve"
                fill
                className="object-contain h-8 w-auto hidden dark:block"
                priority
              />
            </span>
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
          <ModeToggle />
          
          {/* Social Media Links */}
          <div className="flex items-center gap-3 border-l pl-4 border-border/40">
            <a 
              href="https://dribbble.com/logosolve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
              aria-label="Dribbble Portfolio"
            >
              {/* Official Dribbble SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#EA4C89"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 7.5c-1.06-.17-2.13-.26-3.19-.27-.14-.32-.28-.63-.44-.94C16.5 7.5 17.8 8.4 18.93 9.5zM12 4c1.7 0 3.29.56 4.56 1.5-1.13.97-2.47 1.7-3.97 2.13C11.7 6.3 11.1 5.1 10.5 4.13 11 4.05 11.5 4 12 4zm-2.07.36c.6.97 1.18 2.13 1.67 3.41-2.1.5-4.1.6-5.97.36C6.3 6.1 8.04 4.8 9.93 4.36zM4 12c0-.13 0-.26.01-.39 2.13.23 4.47.13 6.97-.33.2.47.39.95.56 1.44-2.7.8-5.1 2.3-6.97 4.36C4.21 15.1 4 13.58 4 12zm1.07 5.5c1.5-1.8 3.5-3.1 5.8-3.8.6 1.7 1.1 3.4 1.4 5.1-2.6-.3-4.8-1.6-7.2-3.3zm7.93 3.5c-.3-1.7-.8-3.4-1.4-5.1 2.2-.3 4.5-.2 6.8.2-1.2 2.1-3.2 3.6-5.4 4.9zm6.01-6.1c-2.3-.4-4.7-.5-7-.2-.2-.5-.4-1-.6-1.5 2.3-.5 4.5-1.5 6.3-3.1 1.1 1.4 1.7 3.1 1.3 4.8z" fill="#fff"/>
              </svg>
            </a>
            <a 
              href="https://behance.net/logosolve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
              aria-label="Behance Portfolio"
            >
              {/* Official Behance SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#1769FF"/>
                <path d="M7.8 10.2c.6 0 1.1.1 1.6.2.5.1.9.3 1.2.5.3.2.6.5.8.9.2.4.3.9.3 1.4 0 .6-.1 1.1-.4 1.6-.3.4-.7.8-1.3 1 .8.2 1.3.6 1.7 1.1.4.5.6 1.2.6 2 0 .6-.1 1.2-.4 1.6-.2.5-.6.8-1 .9-.4.3-.9.5-1.5.6-.6.1-1.2.2-1.8.2H2v-9.8h5.8zm-.4 5c.5 0 .9-.1 1.2-.3.3-.2.5-.6.5-1.1 0-.3-.1-.5-.2-.7-.1-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2-.2 0-.5-.1-.8-.1H4.6v2.8h2.8zm.2 5.4c.3 0 .5 0 .8-.1.2 0 .5-.1.6-.2.2-.1.3-.3.4-.5.1-.2.2-.5.2-.8 0-.7-.2-1.1-.6-1.4-.4-.3-.9-.4-1.6-.4H4.6v3.4h3zm11.9 1.6c.4 0 .8 0 1.1-.1.3-.1.6-.2.8-.4.2-.2.4-.4.4-.6.1-.3.1-.6.1-.9 0-.4-.1-.7-.2-1-.1-.3-.3-.5-.5-.6-.2-.2-.5-.3-.8-.4-.3-.1-.7-.1-1-.1-.4 0-.7 0-1.1.1-.3.1-.6.2-.8.4-.2.2-.4.4-.5.6-.1.3-.2.6-.2.9 0 .4.1.7.1.9.1.3.2.5.4.6.2.2.5.3.8.4.3.1.7.1 1.1.1zm-1.1-6.2c.3 0 .6 0 .9-.1.3-.1.5-.2.7-.4.2-.2.3-.4.4-.6.1-.2.2-.5.2-.9 0-.3-.1-.6-.2-.9-.1-.2-.3-.4-.4-.6-.2-.1-.4-.2-.7-.3-.3-.1-.5-.1-.9-.1-.3 0-.6 0-.9.1-.3.1-.5.2-.7.3-.2.1-.3.3-.4.6-.1.2-.2.5-.2.9 0 .3.1.6.2.9.1.2.2.4.4.6.2.2.4.3.7.4.3.1.6.1.9.1zM16 5.5h7.1v1.7H16v-1.7z" fill="#fff"/>
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
                <ModeToggle />
                <a 
                  href="https://dribbble.com/logosolve" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Dribbble Portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    {/* Official Dribbble SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#EA4C89"/>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 7.5c-1.06-.17-2.13-.26-3.19-.27-.14-.32-.28-.63-.44-.94C16.5 7.5 17.8 8.4 18.93 9.5zM12 4c1.7 0 3.29.56 4.56 1.5-1.13.97-2.47 1.7-3.97 2.13C11.7 6.3 11.1 5.1 10.5 4.13 11 4.05 11.5 4 12 4zm-2.07.36c.6.97 1.18 2.13 1.67 3.41-2.1.5-4.1.6-5.97.36C6.3 6.1 8.04 4.8 9.93 4.36zM4 12c0-.13 0-.26.01-.39 2.13.23 4.47.13 6.97-.33.2.47.39.95.56 1.44-2.7.8-5.1 2.3-6.97 4.36C4.21 15.1 4 13.58 4 12zm1.07 5.5c1.5-1.8 3.5-3.1 5.8-3.8.6 1.7 1.1 3.4 1.4 5.1-2.6-.3-4.8-1.6-7.2-3.3zm7.93 3.5c-.3-1.7-.8-3.4-1.4-5.1 2.2-.3 4.5-.2 6.8.2-1.2 2.1-3.2 3.6-5.4 4.9zm6.01-6.1c-2.3-.4-4.7-.5-7-.2-.2-.5-.4-1-.6-1.5 2.3-.5 4.5-1.5 6.3-3.1 1.1 1.4 1.7 3.1 1.3 4.8z" fill="#fff"/>
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
                    {/* Official Behance SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1769FF"/>
                      <path d="M7.8 10.2c.6 0 1.1.1 1.6.2.5.1.9.3 1.2.5.3.2.6.5.8.9.2.4.3.9.3 1.4 0 .6-.1 1.1-.4 1.6-.3.4-.7.8-1.3 1 .8.2 1.3.6 1.7 1.1.4.5.6 1.2.6 2 0 .6-.1 1.2-.4 1.6-.2.5-.6.8-1 .9-.4.3-.9.5-1.5.6-.6.1-1.2.2-1.8.2H2v-9.8h5.8zm-.4 5c.5 0 .9-.1 1.2-.3.3-.2.5-.6.5-1.1 0-.3-.1-.5-.2-.7-.1-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2-.2 0-.5-.1-.8-.1H4.6v2.8h2.8zm.2 5.4c.3 0 .5 0 .8-.1.2 0 .5-.1.6-.2.2-.1.3-.3.4-.5.1-.2.2-.5.2-.8 0-.7-.2-1.1-.6-1.4-.4-.3-.9-.4-1.6-.4H4.6v3.4h3zm11.9 1.6c.4 0 .8 0 1.1-.1.3-.1.6-.2.8-.4.2-.2.4-.4.4-.6.1-.3.1-.6.1-.9 0-.4-.1-.7-.2-1-.1-.3-.3-.5-.5-.6-.2-.2-.5-.3-.8-.4-.3-.1-.7-.1-1-.1-.4 0-.7 0-1.1.1-.3.1-.6.2-.8.4-.2.2-.4.4-.5.6-.1.3-.2.6-.2.9 0 .4.1.7.1.9.1.3.2.5.4.6.2.2.5.3.8.4.3.1.7.1 1.1.1zm-1.1-6.2c.3 0 .6 0 .9-.1.3-.1.5-.2.7-.4.2-.2.3-.4.4-.6.1-.2.2-.5.2-.9 0-.3-.1-.6-.2-.9-.1-.2-.3-.4-.4-.6-.2-.1-.4-.2-.7-.3-.3-.1-.5-.1-.9-.1-.3 0-.6 0-.9.1-.3.1-.5.2-.7.3-.2.1-.3.3-.4.6-.1.2-.2.5-.2.9 0 .3.1.6.2.9.1.2.2.4.4.6.2.2.4.3.7.4.3.1.6.1.9.1zM16 5.5h7.1v1.7H16v-1.7z" fill="#fff"/>
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