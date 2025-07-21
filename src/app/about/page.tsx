import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | LogoSolve",
  description: "Learn about LogoSolve, our team, and our approach to creating distinctive brand identities.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LogoSolve</h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of designers and brand strategists dedicated to helping businesses establish memorable brand identities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                LogoSolve was founded in 2018 with a simple mission: to help businesses of all sizes develop brand identities that truly represent their values and connect with their audience.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small design studio has grown into a full-service brand identity agency, working with clients across various industries to create distinctive visual identities that stand the test of time.
              </p>
              <p className="text-muted-foreground">
                Our approach combines strategic thinking with creative excellence, ensuring that every brand we create not only looks beautiful but also effectively communicates the right message to the right audience.
              </p>
            </div>
            <div className="bg-secondary/10 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                [Team Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We're committed to delivering exceptional quality in everything we do, from initial concepts to final deliverables."
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from working closely with our clients, understanding their vision and bringing it to life."
              },
              {
                title: "Innovation",
                description: "We constantly push creative boundaries to develop unique solutions that help our clients stand out in their markets."
              }
            ].map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our talented team of designers, strategists, and brand experts work together to create impactful brand identities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Creative Director",
                bio: "With over 15 years of experience in brand design, Alex leads our creative team with vision and expertise."
              },
              {
                name: "Sarah Chen",
                role: "Brand Strategist",
                bio: "Sarah helps our clients develop strategic foundations for their brands that align with business objectives."
              },
              {
                name: "Michael Rodriguez",
                role: "Senior Designer",
                bio: "Michael specializes in creating distinctive visual identities that capture the essence of each brand."
              },
              {
                name: "Emma Wilson",
                role: "Packaging Designer",
                bio: "Emma brings brands to life through innovative packaging solutions that stand out on shelves."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">[Photo]</span>
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
            <p className="mt-6 text-lg text-white/80">
              Let's collaborate to create a brand identity that resonates with your audience and helps your business thrive.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}