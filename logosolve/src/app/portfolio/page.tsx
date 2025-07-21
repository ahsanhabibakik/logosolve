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
    tags: ["Food & Beverage", "Organic", "Sustainable"]
  },
  {
    id: 2,
    title: "Pulse Fitness",
    category: "Logo Design, Visual Branding",
    description: "A dynamic logo and visual identity for a modern fitness center chain.",
    tags: ["Fitness", "Health", "Lifestyle"]
  },
  {
    id: 3,
    title: "Azure Tech",
    category: "Brand Identity, Digital Assets",
    description: "A sleek, modern brand identity for a technology startup focused on cloud solutions.",
    tags: ["Technology", "B2B", "Digital"]
  },
  {
    id: 4,
    title: "Bloom Cosmetics",
    category: "Packaging, Brand Identity",
    description: "Elegant packaging design and brand identity for a premium cosmetics line.",
    tags: ["Beauty", "Luxury", "Retail"]
  },
  {
    id: 5,
    title: "Harvest Cafe",
    category: "Logo Design, Menu Design",
    description: "A warm, inviting brand identity for a farm-to-table cafe, including logo and menu design.",
    tags: ["Food & Beverage", "Restaurant", "Local"]
  },
  {
    id: 6,
    title: "Nomad Adventures",
    category: "Brand Identity, Marketing Materials",
    description: "An adventurous brand identity for a travel company specializing in unique experiences.",
    tags: ["Travel", "Adventure", "Lifestyle"]
  },
  {
    id: 7,
    title: "Lumina Jewelry",
    category: "Logo Design, Packaging",
    description: "Sophisticated branding and packaging for a high-end jewelry brand.",
    tags: ["Luxury", "Retail", "Fashion"]
  },
  {
    id: 8,
    title: "Urban Roots",
    category: "Brand Identity, Packaging",
    description: "A vibrant brand identity for an urban gardening company, including product packaging.",
    tags: ["Home & Garden", "Sustainable", "Lifestyle"]
  },
  {
    id: 9,
    title: "Velocity Motors",
    category: "Logo Design, Visual Branding",
    description: "A powerful brand identity for a luxury car dealership.",
    tags: ["Automotive", "Luxury", "Retail"]
  }
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20">
        <div className="container">
          <div className="max-w-3xl">
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
            <Button variant="outline" className="rounded-full">All Projects</Button>
            <Button variant="outline" className="rounded-full">Brand Identity</Button>
            <Button variant="outline" className="rounded-full">Logo Design</Button>
            <Button variant="outline" className="rounded-full">Packaging</Button>
            <Button variant="outline" className="rounded-full">Visual Branding</Button>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group">
                <Link href={`/portfolio/project-${item.id}`} className="block">
                  <div className="aspect-square bg-secondary/10 rounded-lg overflow-hidden relative mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
                    <span key={index} className="text-xs bg-secondary/20 px-2 py-1 rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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