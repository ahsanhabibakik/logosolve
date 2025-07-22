import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import projectsData from "../../../../public/data/projects.json";

// Generate metadata for each project page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.projects.find(p => p.slug === params.slug);
  
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
  const project = projectsData.projects.find(p => p.slug === params.slug);
  
  // If project not found, return 404
  if (!project) {
    notFound();
  }
  
  // Find next project for navigation
  const currentIndex = projectsData.projects.findIndex(p => p.slug === params.slug);
  const nextProject = projectsData.projects[(currentIndex + 1) % projectsData.projects.length];
  const prevProject = projectsData.projects[(currentIndex - 1 + projectsData.projects.length) % projectsData.projects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-lg text-muted-foreground">
        