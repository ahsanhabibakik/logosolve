import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Crafting Distinctive <span className="text-primary">Brand Identities</span> That Resonate
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            We create compelling brand identities, memorable logos, and impactful packaging designs that help businesses stand out in today's competitive market.
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
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
                  Memorable logos that capture your brand's essence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our logo design process focuses on creating distinctive, versatile marks that work across all mediums and stand the test of time while conveying your brand's personality.
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
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our recent brand identity and design work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative aspect-square bg-background rounded-lg overflow-hidden group shadow-md">
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white font-medium text-lg">Project Name {item}</h3>
                    <p className="text-white/80 text-sm mt-2">Brand Identity, Packaging</p>
                    <Button variant="outline" size="sm" className="mt-4 text-white border-white hover:bg-white hover:text-primary" asChild>
                      <Link href={`/portfolio/project-${item}`}>View Project</Link>
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

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A collaborative approach to creating effective brand identities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, audience, and competition to understand your unique needs."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a strategic foundation for your brand that aligns with your business objectives."
              },
              {
                step: "03",
                title: "Design",
                description: "Our creative team crafts visual elements that bring your brand to life in a distinctive way."
              },
              {
                step: "04",
                title: "Delivery",
                description: "We provide all the assets and guidelines you need to implement your new brand identity."
              }
            ].map((process) => (
              <div key={process.step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-primary">{process.step}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Brand?</h2>
            <p className="mt-6 text-lg text-white/80">
              Let's collaborate to create a brand identity that resonates with your audience and helps your business thrive.
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