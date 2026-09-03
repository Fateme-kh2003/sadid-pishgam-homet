import DetailCard from "../components/Ui/DetailCard"
import ProjectImage1 from "../assets/ProjectImage1.webp";
import ProjectImage2 from "../assets/ProjectImage2.webp";
import ProjectImage3 from "../assets/ProjectImage3.webp";
import type { ProjectDetail  } from "../Types/content";

const projects:ProjectDetail [] = [
  {
    id: "solar-projects",
    title: "پروژه پنل خورشیدی",
    location:"شاهرود",
    image: ProjectImage1,
    description:"ارائه راهکارهای مناسب برای استفاده از انرژی خورشیدی، از طراحی و انتخاب تجهیزات تا نصب و راه‌اندازی سیستم.",
    features: [
      "طراحی سیستم خورشیدی",
      "تأمین تجهیزات",
      "نصب و راه‌اندازی",
      "پشتیبانی و نگهداری",
    ],
  },
  {
    id: "camera-projects",
    title: "پروژه دوربین مداربسته",
    location:"تهران",
    image: ProjectImage2,
    description:"طراحی و اجرای سیستم‌های نظارتی و امنیتی متناسب با نیاز ساختمان‌ها، مجموعه‌های تجاری و پروژه‌های مختلف.",
    features: [
      "طراحی سیستم نظارتی",
      "تأمین دوربین و تجهیزات",
      "نصب و تنظیم تجهیزات",
      "پشتیبانی سیستم",
    ],
  },
  {
    id: "security-projects",
    title: "پروژه سیستم ذخیره انرژی",
    location:"سمنان",
    image: ProjectImage3,
    description:"راهکارهای ذخیره‌سازی انرژی برای استفاده بهینه‌تر از انرژی تولیدشده و افزایش پایداری سیستم.",
    features: [
      "بررسی نیاز پروژه",
      "انتخاب تجهیزات مناسب",
      "نصب و راه‌اندازی",
      "پشتیبانی فنی",
    ],
  },
];

const Projects = () => {
  return (
   <main className="bg-gray-50 pt-22 md:pt-20">
    {projects.map((project, index) => (
      <DetailCard key={project.id} item={project} reverse={index % 2 !== 0}/>
    ))}
   </main>
  )
}

export default Projects