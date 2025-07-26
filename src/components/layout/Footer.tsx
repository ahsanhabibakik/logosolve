"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-secondary/10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Logo<span className="text-primary">Solve</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Creating distinctive brand identities that resonate with your audience and elevate your business.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/brand-identity" className="text-muted-foreground hover:text-primary transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services/logo-design" className="text-muted-foreground hover:text-primary transition-colors">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="/services/packaging" className="text-muted-foreground hover:text-primary transition-colors">
                  Product Packaging
                </Link>
              </li>
              <li>
                <Link href="/services/visual-branding" className="text-muted-foreground hover:text-primary transition-colors">
                  Visual Branding
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="flex flex-col gap-2 text-sm">
                  <span>hello@logosolve.com</span>
                  <span>+1 (234) 567-890</span>
                  <span>Num: +8801884276758</span>
                  <span>Gmail: logosolve@gmail.com</span>
                </div>
              </li>
              
              <li className="flex space-x-4 mt-4">
                <a 
                  href="https://facebook.com/logosolve" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-background/80 dark:bg-[#181825]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors" 
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/logosolve" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-background/80 dark:bg-[#181825]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors" 
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/logosolve" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-background/80 dark:bg-[#181825]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors" 
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LogoSolve. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;