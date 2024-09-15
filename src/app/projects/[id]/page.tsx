import { useRouter } from "next/router";
import { projectData, dataType } from "@/data/projectsData";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: dataType | undefined = projectData.find(
    (project) => project.id === params.id
  );

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
