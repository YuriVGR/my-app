import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLoader } from "@fortawesome/pro-duotone-svg-icons";
import Card from "@/components/card";
import { projectData } from "@/data/projectsData";

export default function Page() {
  return (
    <main className="flex  justify-center items-center h-full w-full ">
      <div className="grid grid-cols-3 opacity-0 animate-slidein300 gap-6">
        {projectData.map((project) => (
          <Card
            name={project.title}
            url={project.image}
            description={project.description}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
    </main>
  );
}
