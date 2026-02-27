import ProjectCard from "@/components/common/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-full m-auto">
      <h1 className="sr-only">My Projects</h1>
      <div className="px-6">
        <ProjectCard imageUrl="/portfolio-site.png" description="Portolio site - Yes, like a snake biting it&apos;s own tail!"></ProjectCard>
      </div>
    </main>
  );
};