import { useEffect, useState } from "react";
import { Link } from "react-router";
import type {ProjectDetail} from "../../Types/content"
import { getProjectsRequest } from "../../services/Projectservice";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    getProjectsRequest()
      .then(setProjects)
      .catch((error) => {
        console.error("خطا در دریافت پروژه ها", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="mt-10 md:mt-0 mb-70 md:mb-6">
      <div className="my-6 text-center">
        <span  className="text-secondary text-3xl md:text-4xl font-semibold">پروژه‌های ما</span>
        <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary">نمونه‌ای از پروژه‌های اجرا شده</h2>
      </div>
      {isLoading ? (
        <p className="text-center text-gray-500">در حال بارگذار پروژه ها ...</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-10 md:mx-20">
        {projects.slice(0, 3).map((project) => (
          <Link key={project.id} to={`/projects#${project.id}`} >
            <div className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
};

export default Projects;