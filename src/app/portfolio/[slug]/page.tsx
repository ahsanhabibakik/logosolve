import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import projectsData from "../../../../public/data/projects.json";

// Generate metadata for each project page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // First try to find by slug
  let project = projectsData.projects.find(p => p.slug === params.slug);
  
  // If not found by slug, try to find by title converted to slug format
  if (!project) {
    project = projectsData.projects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );
  }
  
  if (!project) {
    return {
      title: "Project Not Found | LogoSolve",
      description: "The requested project could not be found."
    };
  }
  
  return {
    title: `${project.title} | LogoSolve Portfolio`,
    description: project.description,
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // First try to find by slug
  let project = projectsData.projects.find(p => p.slug === params.slug);
  
  // If not found by slug, try to find by title converted to slug format
  if (!project) {
    project = projectsData.projects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );
  }
  
  // If project not found, return 404
  if (!project) {
    notFound();
  }
  
  // Find next project for navigation
  const currentIndex = projectsData.projects.findIndex(p => p.id === project.id);
  const nextProject = projectsData.projects[(currentIndex + 1) % projectsData.projects.length];
  const prevProject = projectsData.projects[(currentIndex - 1 + projectsData.projects.length) % projectsData.projects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-primary/5 py-24 md:py-32">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/hero-shapes.svg')] bg-no-repeat bg-cover opacity-70"></div>
        
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-background relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-medium mb-4">The Challenge</h3>
                <p className="text-muted-foreground text-lg">
                  {project.challenge}
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-medium mb-4">Our Solution</h3>
                <p className="text-muted-foreground text-lg">
                  {project.solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary/10 p-8 rounded-xl">
              <h3 className="text-xl font-medium mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Services</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.services.map((service, index) => (
                      <span key={index} className="text-xs bg-primary/10 px-3 py-1 rounded-full text-primary">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.website && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Website</p>
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container relative">
          <h2 className="text-3xl font-bold mb-12 text-center">The Brand Identity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-4">Logo Design</h3>
              <div className="aspect-video bg-secondary/10 rounded-lg flex items-center justify-center">
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} Logo`}
                  className="max-w-full h-auto max-h-64"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-4">Color Palette</h3>
              <div className="grid grid-cols-5 gap-2 mb-4">
                <div className="aspect-square bg-primary rounded-md"></div>
                <div className="aspect-square bg-primary/80 rounded-md"></div>
                <div className="aspect-square bg-primary/60 rounded-md"></div>
                <div className="aspect-square bg-accent rounded-md"></div>
                <div className="aspect-square bg-accent/60 rounded-md"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                A carefully selected color palette that reflects the brand's personality and values.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="aspect-square bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <img 
                    src={project.thumbnail} 
                    alt={`${project.title} Application ${item}`}
                    className="max-w-full h-auto max-h-48"
                  />
                </div>
                <h4 className="font-medium">Application Example {item}</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Showcasing how the brand identity is applied across different touchpoints.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="py-24 bg-background relative">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Client Feedback</h2>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border/50 relative">
                {/* Decorative quote mark */}
                <div className="absolute top-6 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary/10">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                
                {/* Quote content */}
                <div className="relative z-10">
                  <p className="text-muted-foreground mb-8 italic text-lg leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  
                  {/* Author info with gradient border */}
                  <div className="flex items-center pt-6 border-t border-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <span className="text-primary font-bold text-lg">{project.testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{project.testimonial.author}</h4>
                      <p className="text-sm text-primary/80">{project.testimonial.position}, {project.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Navigation */}
      <section className="py-12 bg-secondary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Button variant="outline" className="mb-4 md:mb-0" asChild>
              <Link href={`/portfolio/${prevProject.slug}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Previous Project
              </Link>
            </Button>
            <Button variant="outline" className="mb-4 md:mb-0" asChild>
              <Link href="/portfolio">
                Back to Portfolio
              </Link>
            </Button>
            <Button asChild>
              <Link href={`/portfolio/${nextProject.slug}`}>
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
              Let's collaborate to create a brand identity that resonates with your audience and helps your business thrive in today's competitive market.
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