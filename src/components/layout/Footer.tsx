"use client";

import Link from "next/link";

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
                <a href="mailto:hello@logosolve.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@logosolve.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <h4 className="font-medium text-sm mb-3">Follow Our Work</h4>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://dribbble.com/logosolve" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-3 py-2 bg-background/80 dark:bg-[#181825]/80 backdrop-blur-sm rounded-lg hover:bg-primary/10 transition-colors group"
                    aria-label="Dribbble"
                  >
                    {/* Official Dribbble SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#EA4C89"/>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 7.5c-1.06-.17-2.13-.26-3.19-.27-.14-.32-.28-.63-.44-.94C16.5 7.5 17.8 8.4 18.93 9.5zM12 4c1.7 0 3.29.56 4.56 1.5-1.13.97-2.47 1.7-3.97 2.13C11.7 6.3 11.1 5.1 10.5 4.13 11 4.05 11.5 4 12 4zm-2.07.36c.6.97 1.18 2.13 1.67 3.41-2.1.5-4.1.6-5.97.36C6.3 6.1 8.04 4.8 9.93 4.36zM4 12c0-.13 0-.26.01-.39 2.13.23 4.47.13 6.97-.33.2.47.39.95.56 1.44-2.7.8-5.1 2.3-6.97 4.36C4.21 15.1 4 13.58 4 12zm1.07 5.5c1.5-1.8 3.5-3.1 5.8-3.8.6 1.7 1.1 3.4 1.4 5.1-2.6-.3-4.8-1.6-7.2-3.3zm7.93 3.5c-.3-1.7-.8-3.4-1.4-5.1 2.2-.3 4.5-.2 6.8.2-1.2 2.1-3.2 3.6-5.4 4.9zm6.01-6.1c-2.3-.4-4.7-.5-7-.2-.2-.5-.4-1-.6-1.5 2.3-.5 4.5-1.5 6.3-3.1 1.1 1.4 1.7 3.1 1.3 4.8z" fill="#fff"/>
                    </svg>
                    <span className="text-sm font-medium">Dribbble</span>
                  </a>
                  
                  <a 
                    href="https://behance.net/logosolve" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-3 py-2 bg-background/80 dark:bg-[#181825]/80 backdrop-blur-sm rounded-lg hover:bg-primary/10 transition-colors group"
                    aria-label="Behance"
                  >
                    {/* Official Behance SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#1769FF"/>
                      <path d="M7.8 10.2c.6 0 1.1.1 1.6.2.5.1.9.3 1.2.5.3.2.6.5.8.9.2.4.3.9.3 1.4 0 .6-.1 1.1-.4 1.6-.3.4-.7.8-1.3 1 .8.2 1.3.6 1.7 1.1.4.5.6 1.2.6 2 0 .6-.1 1.2-.4 1.6-.2.5-.6.8-1 .9-.4.3-.9.5-1.5.6-.6.1-1.2.2-1.8.2H2v-9.8h5.8zm-.4 5c.5 0 .9-.1 1.2-.3.3-.2.5-.6.5-1.1 0-.3-.1-.5-.2-.7-.1-.2-.2-.3-.4-.4-.2-.1-.4-.2-.6-.2-.2 0-.5-.1-.8-.1H4.6v2.8h2.8zm.2 5.4c.3 0 .5 0 .8-.1.2 0 .5-.1.6-.2.2-.1.3-.3.4-.5.1-.2.2-.5.2-.8 0-.7-.2-1.1-.6-1.4-.4-.3-.9-.4-1.6-.4H4.6v3.4h3zm11.9 1.6c.4 0 .8 0 1.1-.1.3-.1.6-.2.8-.4.2-.2.4-.4.4-.6.1-.3.1-.6.1-.9 0-.4-.1-.7-.2-1-.1-.3-.3-.5-.5-.6-.2-.2-.5-.3-.8-.4-.3-.1-.7-.1-1-.1-.4 0-.7 0-1.1.1-.3.1-.6.2-.8.4-.2.2-.4.4-.5.6-.1.3-.2.6-.2.9 0 .4.1.7.1.9.1.3.2.5.4.6.2.2.5.3.8.4.3.1.7.1 1.1.1zm-1.1-6.2c.3 0 .6 0 .9-.1.3-.1.5-.2.7-.4.2-.2.3-.4.4-.6.1-.2.2-.5.2-.9 0-.3-.1-.6-.2-.9-.1-.2-.3-.4-.4-.6-.2-.1-.4-.2-.7-.3-.3-.1-.5-.1-.9-.1-.3 0-.6 0-.9.1-.3.1-.5.2-.7.3-.2.1-.3.3-.4.6-.1.2-.2.5-.2.9 0 .3.1.6.2.9.1.2.2.4.4.6.2.2.4.3.7.4.3.1.6.1.9.1zM16 5.5h7.1v1.7H16v-1.7z" fill="#fff"/>
                    </svg>
                    <span className="text-sm font-medium">Behance</span>
                  </a>
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