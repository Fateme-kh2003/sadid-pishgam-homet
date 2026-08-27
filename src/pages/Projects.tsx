import Header from "../components/Ui/Header"
import Footer from "../components/Ui/Footer"
import CallButton from "../components/Ui/CallButton"
import DetailCard from "../components/Projects/DetailCard"
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import Service3 from "../assets/service3.jpg";
import ScrollToHash from "../components/Ui/ScrollToHash";
import type { ProjectDetail  } from "../Types";

const projects:ProjectDetail [] = [
  {
    id: "solar-projects",
    title: "پروژه پنل خورشیدی",
    image: Service1,
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
    image: Service2,
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
    image: Service3,
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
   <>
   <Header/>
   <ScrollToHash />
   <main className="bg-gray-50 pt-22 md:pt-20">
    {projects.map((project, index) => (
      <DetailCard key={project.id} item={project} reverse={index % 2 !== 0}/>
    ))}
   </main>
   <CallButton/>
   <Footer/>
   </>
  )
}

export default Projects
