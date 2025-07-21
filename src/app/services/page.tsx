import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Services | LogoSolve",
  description: "Explore our brand identity, logo design, and packaging services for businesses of all sizes.",
};

const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    shortDescription: "Complete brand identity systems that communicate your values and vision",
    fullDescription: "Our comprehensive brand identity service creates a complete visual language for your business. We develop all the elements needed to establish a consistent and memorable brand presence across all touchpoints.",
    deliverables: [
      "Brand strategy and positioning",
      "Logo design (primary and secondary marks)",
      "Color palette selection",
      "Typography system",
      "Brand guidelines document",
      "Business card and stationery design",
      "Digital assets for web and social media"
    ]
  },
  {
    id: "logo-design",
    title: "Logo Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        <circle cx="13.5" cy="7.5" r=".5"></circle>
      </svg>
    ),
    shortDescription: "Memorable logos that capture your brand&apos;s essence",
    fullDescription: "Our logo design service focuses on creating a distinctive visual mark that represents your brand&apos;s personality and values. We craft logos that are not only visually appealing but also versatile and timeless.",
    deliverables: [
      "Brand discovery and research",
      "Multiple concept directions",
      "Refinement of selected concept",
      "Final logo in multiple formats (vector, raster)",
      "Logo variations (horizontal, vertical, icon-only)",
      "Color and monochrome versions",
      "Basic usage guidelines"
    ]
  },
  {
    id: "packaging",
    title: "Product Packaging",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    ),
    shortDescription: "Eye-catching packaging that sells your product",
    fullDescription: "Our packaging design service creates compelling product packaging that stands out on shelves and communicates your product's value. We focus on both aesthetic appeal and functional considerations to enhance the customer experience.",
    deliverables: [
      "Packaging concept development",
      "Structural design recommendations",
      "Label and packaging graphics",
      "Material selection guidance",
      "Mockups and prototypes",
      "Production-ready artwork",
      "Packaging guidelines"
    ]
  },
  {
    id: "visual-branding",
    title: "Visual Branding",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12"></path>
        <path d="m8 11 4 4 4-4"></path>
        <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
      </svg>
    ),
    shortDescription: "Cohesive visual elements that strengthen your brand presence",
    fullDescription: "Our visual branding service extends your brand identity across various marketing materials and touchpoints. We ensure visual consistency while creating engaging designs that resonate with your target audience.",
    deliverables: [
      "Marketing collateral design",
      "Social media templates and assets",
      "Website visual design",
      "Email marketing templates",
      "Presentation templates",
      "Environmental graphics",
      "Digital advertising materials"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive brand identity solutions tailored to your unique business needs, from logo design to complete brand systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-muted-foreground mb-6">
                At LogoSolve, we provide a range of brand identity services designed to help businesses establish a strong visual presence in their market. Our strategic approach ensures that every element of your brand identity works together to communicate your values and connect with your audience.
              </p>
              <p className="text-muted-foreground">
                Whether you need a complete brand identity system, a distinctive logo, eye-catching packaging, or cohesive visual branding, our team of experienced designers and strategists will work closely with you to create solutions that meet your specific needs and objectives.
              </p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-8">
              <h3 className="text-xl font-medium mb-4">Our Process</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Discovery</h4>
                    <p className="text-sm text-muted-foreground">We learn about your business, goals, audience, and competition.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Strategy</h4>
                    <p className="text-sm text-muted-foreground">We develop a strategic foundation for your brand identity.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Design</h4>
                    <p className="text-sm text-muted-foreground">We create visual elements that bring your brand to life.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery</h4>
                    <p className="text-sm text-muted-foreground">We provide all the assets and guidelines you need.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services in Detail</h2>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-background rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    [Service Image Placeholder]
                  </div>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-primary">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.fullDescription}</p>
                  
                  <h4 className="font-medium mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Brand?</h2>
            <p className="mt-6 text-lg text-white/80">
              Contact us today to discuss your project and discover how we can help you create a distinctive brand identity.
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