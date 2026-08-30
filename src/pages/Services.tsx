import Header from "../components/Ui/Header"
import Footer from "../components/Ui/Footer"
import CallButton from "../components/Ui/CallButton"
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import Service3 from "../assets/service3.jpg";
import ScrollToHash from "../components/Ui/ScrollToHash";
import DetailCard from '../components/Ui/DetailCard';
import type { ProjectDetail  } from "../Types";

const services:ProjectDetail [] = [
  {
    id: "solar",
    title: "پنل خورشیدی",
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
    id: "camera",
    title: "دوربین مداربسته",
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
    id: "storage",
    title: "سیستم ذخیره انرژی",
    image: Service3,
    description:"راهکارهای ذخیره‌سازی انرژی برای استفاده بهینه‌تر از انرژی تولیدشده و افزایش پایداری سیستم.",
    features: [
      "بررسی نیاز پروژه",
      "انتخاب تجهیزات مناسب",
      "نصب و راه‌اندازی",
      "پشتیبانی فنی",
    ],
  },
  {
    id: "support",
    title: "نصب و پشتیبانی",
    image: Service1,
    description:"ارائه خدمات نصب، راه‌اندازی و پشتیبانی با هدف اطمینان از عملکرد صحیح تجهیزات و سیستم‌های اجراشده.",
    features: [
      "نصب تخصصی",
      "راه‌اندازی تجهیزات",
      "عیب‌یابی",
      "خدمات پشتیبانی",
    ],
  },
];

const Services = () => {
  return (
    <>
    <Header/>
    <ScrollToHash />
    <main className="bg-gray-50 pt-20 md:pt-22">
      {services.map((service, index) => (
        <DetailCard key={service.id} item={service} reverse={index % 2 !== 0}/>
      ))}
    </main>
    <CallButton/>
    <Footer/>
    </>
  )
}

export default Services
