import img2 from "../../assets/img2.jpg"
import img1 from "../../assets/img1.jpg"
import img4 from "../../assets/img4.jpg"
import { Link } from "react-router";
import type {ProjectSummary} from "../../Types"

const projects:ProjectSummary[] = [
  {label: "نیروگاه خورشیدی کارخانه",location: "شاهرود",image: img2,path: "/projects#solar-projects"},
  {label: "پنل خورشیدی ویلایی", location: "تهران", image: img1,path: "/projects#camera-projects"  },
  {label: "سیستم نظارتی مجتمع تجاری",location: "سمنان",image: img4,path: "/projects#security-projects"},
];

const Projects = () => {
  return (
    <section id="projects" className="mt-10 md:mt-0 mb-70 md:mb-6">
      <div className="my-6 text-center">
        <span  className="text-secondary text-3xl md:text-4xl font-semibold">پروژه‌های ما</span>
        <h2 className="mt-3 text-2xl md:text-4xl font-bold text-primary">نمونه‌ای از پروژه‌های اجرا شده</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-10 md:mx-20">
        {projects.map((project) => (
          <Link key={project.label} to={project.path} >
            <div className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
              <img src={project.image} alt={project.label} className="h-64 w-full object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary">{project.label}</h3>
                <p className="mt-3 text-gray-600">{project.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;