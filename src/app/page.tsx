import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-primary/5 py-24 md:py-36">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/hero-shapes.svg')] bg-no-repeat bg-cover opacity-70"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                Brand Identity Agency
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Crafting <span className="text-primary relative">
                  Distinctive
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-accent/40 rounded-full"></span>
                </span> Brand <span className="text-primary">Identities</span> That Resonate
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl">
                We create compelling brand identities, memorable logos, and impactful packaging designs that help businesses stand out in today&apos;s competitive market.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg transition-all hover:-translate-y-1" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-lg transform -rotate-6 animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-lg transform rotate-6 animate-float" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Main image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
                    <Image 
                      src="/portfolio/placeholder-1.svg" 
                      alt="Brand Identity Example" 
                      width={280} 
                      height={280} 
                      className="w-64 h-64 rounded-lg shadow-xl relative z-10 transition-all hover:scale-105 duration-500"
                    />
                  </div>
                </div>
                
                {/* More decorative elements */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-lg transform -rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              What We Do
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive brand identity solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold">Brand Identity</CardTitle>
                <CardDescription className="text-base mt-2">
                  Complete brand identity systems that communicate your values and vision
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground">
                  We develop comprehensive brand identities that include logo design, color palettes, typography, and brand guidelines to ensure consistency across all touchpoints.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="text-primary hover:bg-primary/10 group flex items-center gap-2" asChild>
                  <Link href="/services/brand-identity">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    <circle cx="13.5" cy="7.5" r=".5"></circle>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold">Logo Design</CardTitle>
                <CardDescription className="text-base mt-2">
                  Memorable logos that capture your brand&apos;s essence
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground">
                  Our logo design process focuses on creating distinctive, versatile marks that work across all mediums and stand the test of time while conveying your brand&apos;s personality.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="text-primary hover:bg-primary/10 group flex items-center gap-2" asChild>
                  <Link href="/services/logo-design">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold">Product Packaging</CardTitle>
                <CardDescription className="text-base mt-2">
                  Eye-catching packaging that sells your product
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground">
                  We design packaging solutions that not only protect your product but also communicate its value, attract attention on shelves, and enhance the overall customer experience.
                </p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="text-primary hover:bg-primary/10 group flex items-center gap-2" asChild>
                  <Link href="/services/packaging">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Our Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent brand identity and design work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Evergreen Organics", category: "Brand Identity", image: "/portfolio/placeholder-1.svg" },
              { id: 2, name: "Pulse Fitness", category: "Logo Design", image: "/portfolio/placeholder-2.svg" },
              { id: 3, name: "Azure Tech", category: "Visual Identity", image: "/portfolio/placeholder-3.svg" },
              { id: 4, name: "Bloom Cosmetics", category: "Brand System", image: "/portfolio/placeholder-4.svg" },
              { id: 5, name: "Harvest Cafe", category: "Brand Guidelines", image: "/portfolio/placeholder-5.svg" },
              { id: 6, name: "Nomad Adventures", category: "Packaging Design", image: "/portfolio/placeholder-6.svg" }
            ].map((project) => (
              <div key={project.id} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-30"></div>
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
                      <div className="w-12 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
                      <p className="text-white/90 text-sm mb-6">{project.category}</p>
                      <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                        <Link href={`/portfolio/project-${project.id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1" asChild>
              <Link href="/portfolio">
                <span className="flex items-center gap-2">
                  View All Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Client Feedback
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 relative">
                {/* Decorative quote mark */}
                <div className="absolute top-6 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary/10">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                
                {/* Quote content */}
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-8 italic text-lg leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                  
                  {/* Author info with gradient border */}
                  <div className="flex items-center pt-6 border-t border-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <span className="text-primary font-bold text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-sm text-primary/80">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="mt-20 bg-white/50 backdrop-blur-sm py-12 px-8 rounded-2xl shadow-sm">
            <h3 className="text-center text-xl font-medium mb-10">Trusted by innovative companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <Image src="/clients/client-1.svg" alt="Acme Corp" width={120} height={60} className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <Image src="/clients/client-2.svg" alt="Zenith Inc" width={120} height={60} className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <Image src="/clients/client-3.svg" alt="Quantum Tech" width={120} height={60} className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
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



      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <div className="w-24 h-1 bg-accent/60 mx-auto mb-8 rounded-full"></div>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let&apos;s collaborate to create a brand identity that resonates with your audience and helps your business thrive in today&apos;s competitive market.
            </p>
            <div className="mt-12">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary px-10 py-7 rounded-xl text-lg font-medium shadow-lg shadow-primary-dark/20 transition-all hover:shadow-xl hover:shadow-primary-dark/30 hover:-translate-y-1" 
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-3">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}