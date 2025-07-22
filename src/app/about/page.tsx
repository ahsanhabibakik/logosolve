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
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-primary/5 py-24 md:py-32">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/hero-shapes.svg')] bg-no-repeat bg-cover opacity-70"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-primary relative">
                LogoSolve
                <span className="absolute bottom-1 left-0 w-full h-1 bg-accent/40 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              We&apos;re a passionate team of designers and brand strategists dedicated to helping businesses establish memorable brand identities that drive growth and recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Since 2018
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Journey</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  LogoSolve was founded with a simple mission: to help businesses of all sizes develop brand identities that truly represent their values and connect with their audience.
                </p>
                <p className="text-muted-foreground text-lg">
                  What started as a small design studio has grown into a full-service brand identity agency, working with clients across various industries to create distinctive visual identities that stand the test of time.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our approach combines strategic thinking with creative excellence, ensuring that every brand we create not only looks beautiful but also effectively communicates the right message to the right audience.
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">150+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground mt-1">Industry Awards</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-lg transform -rotate-6"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-lg transform rotate-6"></div>
              <div className="relative bg-white aspect-square rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/20">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <p className="text-muted-foreground mt-4">Team Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide our work and define our approach to creating exceptional brand identities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We're committed to delivering exceptional quality in everything we do, from initial concepts to final deliverables.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                )
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from working closely with our clients, understanding their vision and bringing it to life.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We constantly push creative boundaries to develop unique solutions that help our clients stand out in their markets.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2v8"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M16 18a4 4 0 0 0-8 0"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              The People Behind LogoSolve
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of designers, strategists, and brand experts work together to create impactful brand identities
            </p>
          </div>
          
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
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"></div>
                    <div className="absolute inset-0 bg-white/90 rounded-full transform scale-[0.97]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary/30">{member.name.charAt(0)}</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1" asChild>
              <Link href="/contact">
                <span className="flex items-center gap-2">
                  Join Our Team
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
            <p className="mt-6 text-lg text-white/80">
              Let&apos;s collaborate to create a brand identity that resonates with your audience and helps your business thrive.
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