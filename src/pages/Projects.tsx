import { useEffect, useState } from "react";
import DetailCard from "../components/Ui/DetailCard";
import type { ProjectDetail } from "../Types/content";
import { getProjectsRequest } from "../services/projectService";
import { SpinnerMini } from "../components/Ui/Spinner";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProjectsRequest()
      .then(setProjects)
      .catch((error) => {
        console.error("خطا در دریافت پروژه‌ها:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="bg-gray-50 pt-22 md:pt-20">
      {isLoading ? (
        <div className="flex min-h-[60vh] items-center justify-center">
          <SpinnerMini />
        </div>
      ) : (
        projects.map((project, index) => (
          <DetailCard
            key={project.id}
            item={project}
            reverse={index % 2 !== 0}
          />
        ))
      )}
    </main>
  );
};

export default Projects;