import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Evergreen Organics Brand Identity | LogoSolve",
  description: "Case study of the brand identity design for Evergreen Organics, an organic food company.",
};

export default function ProjectPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Brand Identity
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Evergreen Organics</h1>
            <p className="text-lg text-muted-foreground">
              A complete brand identity system for an organic food company, including logo, packaging, and brand guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                Evergreen Organics approached LogoSolve with a need for a complete brand refresh as they expanded their product line and entered new markets. The company needed a brand identity that would communicate their commitment to organic, sustainable products while standing out in a competitive market.
              </p>
              <p className="text-muted-foreground mb-6">
                Our goal was to create a cohesive brand identity system that would resonate with health-conscious consumers and reflect the company&apos;s values of sustainability, quality, and transparency.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Project Scope</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-muted-foreground">Brand strategy and positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-muted-foreground">Logo design (primary and secondary marks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-muted-foreground">Color palette and typography system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-muted-foreground">Packaging design for product line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-muted-foreground">Brand guidelines document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-muted-foreground">Marketing collateral design</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary/10 p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium">Evergreen Organics</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Industry</p>
                  <p className="font-medium">Food & Beverage</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <p className="font-medium">Brand Identity, Packaging Design</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="font-medium">8 Weeks</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year</p>
                  <p className="font-medium">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">The Brand Identity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-4">Logo Design</h3>
              <p className="text-muted-foreground mb-6">
                We created a distinctive logo that combines a leaf motif with clean typography to represent the organic nature of the products while maintaining a modern, premium feel.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
                <Image 
                  src="/portfolio/placeholder-1.svg" 
                  alt="Evergreen Organics Logo" 
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Color Palette</h3>
              <p className="text-muted-foreground mb-6">
                The color palette features earthy greens and browns complemented by fresh accent colors that reflect the natural, organic qualities of the brand.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-5 gap-2">
                  <div className="aspect-square bg-[#2E7D32] rounded-md"></div>
                  <div className="aspect-square bg-[#558B2F] rounded-md"></div>
                  <div className="aspect-square bg-[#8BC34A] rounded-md"></div>
                  <div className="aspect-square bg-[#795548] rounded-md"></div>
                  <div className="aspect-square bg-[#FFEB3B] rounded-md"></div>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  <div className="text-xs text-center text-muted-foreground">#2E7D32</div>
                  <div className="text-xs text-center text-muted-foreground">#558B2F</div>
                  <div className="text-xs text-center text-muted-foreground">#8BC34A</div>
                  <div className="text-xs text-center text-muted-foreground">#795548</div>
                  <div className="text-xs text-center text-muted-foreground">#FFEB3B</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-4">Typography</h3>
              <p className="text-muted-foreground mb-6">
                We selected a clean, modern sans-serif for headings paired with a readable serif for body text to create a balance between contemporary appeal and natural authenticity.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Heading Font</p>
                    <p className="text-2xl font-bold">Montserrat</p>
                    <p className="text-lg mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Body Font</p>
                    <p className="text-xl" style={{ fontFamily: "serif" }}>Merriweather</p>
                    <p className="text-base mt-2" style={{ fontFamily: "serif" }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="text-base" style={{ fontFamily: "serif" }}>abcdefghijklmnopqrstuvwxyz</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Packaging Design</h3>
              <p className="text-muted-foreground mb-6">
                The packaging design emphasizes transparency with clear windows to showcase the product, complemented by clean, informative layouts and the brand&apos;s distinctive visual elements.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
                <Image 
                  src="/portfolio/placeholder-6.svg" 
                  alt="Evergreen Organics Packaging" 
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            <h3 className="text-xl font-medium mb-4">Brand Guidelines</h3>
            <p className="text-muted-foreground mb-6">
              We created comprehensive brand guidelines to ensure consistent application of the brand identity across all touchpoints, from packaging to marketing materials and digital presence.
            </p>
            <div className="aspect-video bg-secondary/10 rounded-lg flex items-center justify-center">
              <Image 
                src="/portfolio/placeholder-5.svg" 
                alt="Evergreen Organics Brand Guidelines" 
                width={600}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Marketing Collateral</h3>
              <div className="aspect-square bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground">[Image Placeholder]</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Brochures, flyers, and promotional materials designed with the new brand identity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Digital Assets</h3>
              <div className="aspect-square bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground">[Image Placeholder]</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Website design, social media templates, and digital marketing assets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">In-Store Display</h3>
              <div className="aspect-square bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground">[Image Placeholder]</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Point-of-sale materials and in-store display designs for retail presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Results & Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">42%</h3>
              <p className="text-muted-foreground">Increase in brand recognition in target markets</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">28%</h3>
              <p className="text-muted-foreground">Growth in sales within the first quarter after rebrand</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">95%</h3>
              <p className="text-muted-foreground">Positive feedback from customer surveys</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Client Testimonial</h3>
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                  <path d="M11.94 3.72C5.2 4.18 4.24 9.51 4.04 11.83c-.02.23.16.42.39.42h3.96c.39 0 .55-.51.3-.79C7.53 10.21 7 8.43 7 7.09c0-.45.1-.89.29-1.3C8.8 6.33 10.6 7.44 10.96 9.1c.57 2.63-1.42 5.44-4.08 5.44-.28 0-.5.22-.5.5v4.35c0 .28.22.5.5.5h4.05c.28 0 .5-.22.5-.5V15.2c0-.28.22-.5.5-.5h.03c3.55 0 6.44-2.89 6.44-6.44 0-3.56-2.89-6.45-6.45-6.45-.02 0-.03 0-.05-.09z" />
                  <path d="M22.4 11.94c-.2-2.32-1.16-7.65-7.9-8.11-.02 0-.03 0-.05.09 0 3.56-2.89 6.45-6.45 6.45h-.03c-.28 0-.5.22-.5.5v4.35c0 .28.22.5.5.5h4.05c.28 0 .5-.22.5-.5v-4.19c0-.28.22-.5.5-.5 2.66 0 4.65-2.81 4.08-5.44-.36-1.66-2.16-2.77-3.67-2.31-.19.41-.29.85-.29 1.3 0 1.34.53 3.12 1.69 4.37.25.28.09.79-.3.79h-3.96c-.23 0-.41-.19-.39-.42.2-2.32 1.16-7.65 7.9-8.11.02 0 .03 0 .05-.09 3.56 0 6.45 2.89 6.45 6.45 0 3.55-2.89 6.44-6.44 6.44h-.03c-.28 0-.5.22-.5.5v4.35c0 .28.22.5.5.5h4.05c.28 0 .5-.22.5-.5V15.2c0-.28.22-.5.5-.5h.03c3.55 0 6.44-2.89 6.44-6.44 0-3.56-2.89-6.45-6.45-6.45-.02 0-.03 0-.05.09z" />
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground mb-6 italic">
                &quot;LogoSolve transformed our brand identity completely. The new logo and visual system perfectly capture our company&apos;s values and have helped us connect with our target audience in a meaningful way. Since the rebrand, we&apos;ve seen significant growth in sales and brand recognition. The team was professional, creative, and truly understood our vision.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-medium">JM</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jennifer Miller</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director, Evergreen Organics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-12 bg-secondary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Button variant="outline" className="mb-4 md:mb-0" asChild>
              <Link href="/portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Back to Portfolio
              </Link>
            </Button>
            <Button asChild>
              <Link href="/portfolio/project-2">
                Next Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Brand?</h2>
            <p className="mt-6 text-lg text-white/80">
              Let&apos;s collaborate to create a brand identity that resonates with your audience and helps your business thrive.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}