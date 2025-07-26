"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import ModeToggle from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { Dribbble, ExternalLink } from "lucide-react";

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
              <Dribbble size={20} />
            </a>
            <a 
              href="https://behance.net/logosolve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
              aria-label="Behance Portfolio"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
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
                    <Dribbble size={20} />
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
                    <ExternalLink size={20} />
                    <span>Behance</span>
                  </div>
                </a>
              </div>
              
              <Button className="mt-6 w-full" onClick={() => setIsMenuOpen(false)}>
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;