import AboutImage from "../assets/AboutImage.webp";
import ProjectImage3 from "../assets/ProjectImage3.webp";
import HeroImage1 from "../assets/HeroImage1.webp";
import HeroImage2 from "../assets/HeroImage2.webp"
import DetailCard from '../components/Ui/DetailCard';
import type { ProjectDetail  } from "../Types/content";

const services:ProjectDetail [] = [
  {id: "solar",title: "پنل خورشیدی",image: AboutImage,
    description:"ارائه راهکارهای مناسب برای استفاده از انرژی خورشیدی، از طراحی و انتخاب تجهیزات تا نصب و راه‌اندازی سیستم.",
    features: ["طراحی سیستم خورشیدی","تأمین تجهیزات","نصب و راه‌اندازی","پشتیبانی و نگهداری",],
  },
  {id: "camera",title: "دوربین مداربسته",image: ProjectImage3,
    description:"طراحی و اجرای سیستم‌های نظارتی و امنیتی متناسب با نیاز ساختمان‌ها، مجموعه‌های تجاری و پروژه‌های مختلف.",
    features: ["طراحی سیستم نظارتی","تأمین دوربین و تجهیزات","نصب و تنظیم تجهیزات","پشتیبانی سیستم",],
  },
  {id: "storage",title: "سیستم ذخیره انرژی",image: HeroImage1,
    description:"راهکارهای ذخیره‌سازی انرژی برای استفاده بهینه‌تر از انرژی تولیدشده و افزایش پایداری سیستم.",
    features: ["بررسی نیاز پروژه","انتخاب تجهیزات مناسب","نصب و راه‌اندازی","پشتیبانی فنی",],
  },
{id: "network",title: "شبکه وایرلس، اکتیو، پسیو و فیبر نوری",image: HeroImage2,
  description:"طراحی، اجرا و راه‌اندازی زیرساخت‌های شبکه شامل شبکه‌های وایرلس، تجهیزات اکتیو و پسیو و فیبر نوری متناسب با نیاز پروژه.",
  features: ["طراحی زیرساخت شبکه","اجرای شبکه‌های اکتیو و پسیو","راه‌اندازی شبکه‌های وایرلس","اجرای فیبر نوری",],
},
];

const Services = () => {
  return (
    <main className="bg-gray-50 pt-20 md:pt-22">
      {services.map((service, index) => (
        <DetailCard key={service.id} item={service} reverse={index % 2 !== 0}/>
      ))}
    </main>
  )
}

export default Services