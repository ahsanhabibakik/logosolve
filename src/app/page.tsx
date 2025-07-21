import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/hero-shapes.svg')] bg-no-repeat bg-cover opacity-70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Brand Identity Agency
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Crafting Distinctive <span className="text-primary">Brand Identities</span> That Resonate
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                We create compelling brand identities, memorable logos, and impactful packaging designs that help businesses stand out in today&apos;s competitive market.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-lg transform -rotate-6"></div>
                <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-lg transform rotate-6"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/portfolio/placeholder-1.svg" alt="Brand Identity Example" width={224} height={224} className="w-56 h-56 rounded-lg shadow-lg" />
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-lg transform rotate-12"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-lg transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive brand identity solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <CardTitle className="text-xl">Brand Identity</CardTitle>
                <CardDescription>
                  Complete brand identity systems that communicate your values and vision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop comprehensive brand identities that include logo design, color palettes, typography, and brand guidelines to ensure consistency across all touchpoints.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:bg-primary/10" asChild>
                  <Link href="/services/brand-identity">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    <circle cx="13.5" cy="7.5" r=".5"></circle>
                  </svg>
                </div>
                <CardTitle className="text-xl">Logo Design</CardTitle>
                <CardDescription>
                  Memorable logos that capture your brand&apos;s essence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our logo design process focuses on creating distinctive, versatile marks that work across all mediums and stand the test of time while conveying your brand&apos;s personality.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:bg-primary/10" asChild>
                  <Link href="/services/logo-design">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
                <CardTitle className="text-xl">Product Packaging</CardTitle>
                <CardDescription>
                  Eye-catching packaging that sells your product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design packaging solutions that not only protect your product but also communicate its value, attract attention on shelves, and enhance the overall customer experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:bg-primary/10" asChild>
                  <Link href="/services/packaging">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent brand identity and design work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Evergreen Organics", category: "Brand Identity", image: "/portfolio/placeholder-1.svg" },
              { id: 2, name: "Pulse Fitness", category: "Logo Design", image: "/portfolio/placeholder-2.svg" },
              { id: 3, name: "Azure Tech", category: "Visual Identity", image: "/portfolio/placeholder-3.svg" },
              { id: 4, name: "Bloom Cosmetics", category: "Brand System", image: "/portfolio/placeholder-4.svg" },
              { id: 5, name: "Harvest Cafe", category: "Brand Guidelines", image: "/portfolio/placeholder-5.svg" },
              { id: 6, name: "Nomad Adventures", category: "Packaging Design", image: "/portfolio/placeholder-6.svg" }
            ].map((project) => (
              <div key={project.id} className="relative aspect-square rounded-lg overflow-hidden group shadow-md">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={224}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white font-medium text-lg">{project.name}</h3>
                    <p className="text-white/80 text-sm mt-2">{project.category}</p>
                    <Button variant="outline" size="sm" className="mt-4 text-white border-white hover:bg-white hover:text-primary" asChild>
                      <Link href={`/portfolio/project-${project.id}`}>View Project</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Client Feedback
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "LogoSolve transformed our brand identity completely. The new logo and visual system perfectly capture our company&apos;s values and have helped us stand out in a competitive market.",
                author: "Sarah Johnson",
                position: "Marketing Director",
                company: "Acme Corp"
              },
              {
                quote: "Working with LogoSolve was a game-changer for our product packaging. Their designs increased our shelf visibility and customer engagement significantly.",
                author: "Michael Chen",
                position: "Product Manager",
                company: "Zenith Inc"
              },
              {
                quote: "The team at LogoSolve delivered beyond our expectations. Their strategic approach to brand identity has given us a cohesive visual language that resonates with our audience.",
                author: "Alex Rodriguez",
                position: "CEO",
                company: "Quantum Tech"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/20">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-medium">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="mt-16">
            <h3 className="text-center text-lg font-medium mb-8">Trusted by innovative companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <Image src="/clients/client-1.svg" alt="Acme Corp" width={48} height={48} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <Image src="/clients/client-2.svg" alt="Zenith Inc" width={48} height={48} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <Image src="/clients/client-3.svg" alt="Quantum Tech" width={48} height={48} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Design Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A collaborative approach to creating effective brand identities
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We learn about your business, goals, audience, and competition to understand your unique needs.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  )
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "We develop a strategic foundation for your brand that aligns with your business objectives.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  )
                },
                {
                  step: "03",
                  title: "Design",
                  description: "Our creative team crafts visual elements that bring your brand to life in a distinctive way.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                      <path d="M2 2l7.586 7.586"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  )
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "We provide all the assets and guidelines you need to implement your new brand identity.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>
                  )
                }
              ].map((process) => (
                <div key={process.step} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{process.step}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/services">Learn About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Creative Showcase Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Creativity
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Design Elements</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the visual elements that make our brand identities stand out
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-primary/5 rounded-lg flex items-center justify-center p-6 hover:bg-primary/10 transition-colors">
              <div className="w-full h-full rounded-full bg-primary/20"></div>
            </div>
            <div className="aspect-square bg-primary/5 rounded-lg flex items-center justify-center p-6 hover:bg-primary/10 transition-colors">
              <div className="w-full h-full bg-primary/20 rounded-lg"></div>
            </div>
            <div className="aspect-square bg-primary/5 rounded-lg flex items-center justify-center p-6 hover:bg-primary/10 transition-colors">
              <div className="w-full h-full bg-primary/20" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
            </div>
            <div className="aspect-square bg-primary/5 rounded-lg flex items-center justify-center p-6 hover:bg-primary/10 transition-colors">
              <div className="w-full h-full bg-primary/20" style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}></div>
            </div>
            <div className="aspect-square bg-accent/5 rounded-lg flex items-center justify-center p-6 hover:bg-accent/10 transition-colors">
              <div className="w-full h-full bg-accent/20" style={{ clipPath: "circle(50% at 50% 50%)" }}></div>
            </div>
            <div className="aspect-square bg-accent/5 rounded-lg flex items-center justify-center p-6 hover:bg-accent/10 transition-colors">
              <div className="w-full h-full bg-accent/20 rounded-lg"></div>
            </div>
            <div className="aspect-square bg-accent/5 rounded-lg flex items-center justify-center p-6 hover:bg-accent/10 transition-colors">
              <div className="w-full h-full bg-accent/20" style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}></div>
            </div>
            <div className="aspect-square bg-accent/5 rounded-lg flex items-center justify-center p-6 hover:bg-accent/10 transition-colors">
              <div className="w-full h-full bg-accent/20" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }}></div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Heading</p>
                  <p className="text-2xl font-bold">Aa Bb Cc Dd Ee</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Body</p>
                  <p className="text-base">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Color Palette</h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square bg-primary rounded-md"></div>
                <div className="aspect-square bg-primary/80 rounded-md"></div>
                <div className="aspect-square bg-primary/60 rounded-md"></div>
                <div className="aspect-square bg-primary/40 rounded-md"></div>
                <div className="aspect-square bg-accent rounded-md"></div>
                <div className="aspect-square bg-accent/80 rounded-md"></div>
                <div className="aspect-square bg-accent/60 rounded-md"></div>
                <div className="aspect-square bg-accent/40 rounded-md"></div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Iconography</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-primary/10 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m16 12-4 4-4-4"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </div>
                <div className="aspect-square bg-primary/10 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="aspect-square bg-primary/10 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    <circle cx="13.5" cy="7.5" r=".5"></circle>
                  </svg>
                </div>
                <div className="aspect-square bg-primary/10 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
              </div>
            </div>
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
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}