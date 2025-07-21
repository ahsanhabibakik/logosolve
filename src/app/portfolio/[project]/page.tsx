import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

type ProjectData = {
  title: string;
  description: string;
  content: React.ReactNode;
};

const projects: Record<string, ProjectData> = {
  "project-1": {
    title: "Evergreen Organics | LogoSolve Portfolio",
    description: "Case study coming soon.",
    content: (
      <>
        <h1 className="text-4xl font-bold mb-6">Evergreen Organics</h1>
        <p className="text-muted-foreground mb-4">Case study coming soon.</p>
      </>
    ),
  },
  // Add more projects here as needed
};

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }): Promise<Metadata> {
  const { project } = await params;
  const proj = projects[project];
  if (!proj) return { title: "Project Not Found | LogoSolve Portfolio" };
  return {
    title: proj.title,
    description: proj.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const proj = projects[project];
  if (!proj) return notFound();
  return (
    <div className="container py-20">
      {proj.content}
      <Button asChild>
        <Link href="/portfolio">Back to Portfolio</Link>
      </Button>
    </div>
  );
} 