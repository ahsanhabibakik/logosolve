import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Portfolio | LogoSolve",
  description: "Explore our portfolio of brand identity, logo design, and packaging projects.",
};

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Evergreen Organics",
    category: "Brand Identity, Packaging",
    description: "A complete brand identity system for an organic food company, including logo, packaging, and brand guidelines.",
    tags: ["Food & Beverage", "Organic", "Sustainable"],
    image: "/portfolio/placeholder-1.svg"
  },
  {
    id: 2,
    title: "Pulse Fitness",
    category: "Logo Design, Visual Branding",
    description: "A dynamic logo and visual identity for a modern fitness center chain.",
    tags: ["Fitness", "Health", "Lifestyle"],
    image: "/portfolio/placeholder-2.svg"
  },
  {
    id: 3,
    title: "Azure Tech",
    category: "Brand Identity, Digital Assets",
    description: "A sleek, modern brand identity for a technology startup focused on cloud solutions.",
    tags: ["Technology", "B2B", "Digital"],
    image: "/portfolio/placeholder-3.svg"
  },
  {
    id: 4,
    title: "Bloom Cosmetics",
    category: "Packaging, Brand Identity",
    description: "Elegant packaging design and brand identity for a premium cosmetics line.",
    tags: ["Beauty", "Luxury", "Retail"],
    image: "/portfolio/placeholder-4.svg"
  },
  {
    id: 5,
    title: "Harvest Cafe",
    category: "Logo Design, Menu Design",
    description: "A warm, inviting brand identity for a farm-to-table cafe, including logo and menu design.",
    tags: ["Food & Beverage", "Restaurant", "Local"],
    image: "/portfolio/placeholder-5.svg"
  },
  {
    id: 6,
    title: "Nomad Adventures",
    category: "Brand Identity, Marketing Materials",
    description: "An adventurous brand identity for a travel company specializing in unique experiences.",
    tags: ["Travel", "Adventure", "Lifestyle"],
    image: "/portfolio/placeholder-6.svg"
  },
  {
    id: 7,
    title: "Lumina Jewelry",
    category: "Logo Design, Packaging",
    description: "Sophisticated branding and packaging for a high-end jewelry brand.",
    tags: ["Luxury", "Retail", "Fashion"],
    image: "/portfolio/placeholder-1.svg"
  },
  {
    id: 8,
    title: "Urban Roots",
    category: "Brand Identity, Packaging",
    description: "A vibrant brand identity for an urban gardening company, including product packaging.",
    tags: ["Home & Garden", "Sustainable", "Lifestyle"],
    image: "/portfolio/placeholder-2.svg"
  },
  {
    id: 9,
    title: "Velocity Motors",
    category: "Logo Design, Visual Branding",
    description: "A powerful brand identity for a luxury car dealership.",
    tags: ["Automotive", "Luxury", "Retail"],
    image: "/portfolio/placeholder-3.svg"
  }
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/hero-shapes.svg')] bg-no-repeat bg-cover opacity-30"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of brand identity projects, showcasing our expertise in logo design, packaging, and visual branding.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Filter Categories - Can be made interactive with client-side JS */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <Button variant="default" className="rounded-full bg-primary text-white hover:bg-primary/90">All Projects</Button>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">Brand Identity</Button>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">Logo Design</Button>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">Packaging</Button>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">Visual Branding</Button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group">
                <Link href={`/portfolio/project-${item.id}`} className="block">
                  <div className="aspect-square rounded-lg overflow-hidden relative mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                        View Project
                      </Button>
                    </div>
                  </div>
                </Link>
                <h3 className="text-xl font-medium mb-1">
                  <Link href={`/portfolio/project-${item.id}`} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-primary text-sm mb-2">{item.category}</p>
                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-primary/10 px-2 py-1 rounded-full text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Brands Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our collaborative design process ensures we create brand identities that truly represent your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-medium text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
                    <p className="text-muted-foreground">We start by understanding your business, target audience, and brand goals through an in-depth consultation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-medium text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Research & Strategy</h3>
                    <p className="text-muted-foreground">Our team conducts market research and develops a strategic foundation for your brand identity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-medium text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Concept Development</h3>
                    <p className="text-muted-foreground">We create multiple design concepts based on the strategy, presenting you with diverse options.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-medium text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Refinement & Delivery</h3>
                    <p className="text-muted-foreground">After selecting a direction, we refine the design and deliver a complete brand identity package.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full"></div>
              <div className="relative z-10 aspect-video bg-white p-4 rounded-lg shadow-lg">
                <img src="/portfolio/placeholder-4.svg" alt="Design Process" className="w-full h-full object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Create Your Brand?</h2>
            <p className="mt-6 text-lg text-white/80">
              Let's collaborate to develop a brand identity that captures your vision and connects with your audience.
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