import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Button from "./Button";
import type { NavItem,IconItem } from "../../Types";

const navLinks: NavItem[] = [
  {path:"/" , label: "صفحه اصلی"},
  { path: "/services" , label: "محصولات و خدمات" },
  { path: "/projects", label: "پروژه ها" },
  { path: "/about", label: "درباره ما" },
  { path: "/contact", label: "تماس با ما" },
];
    
const contactInfo:IconItem[] = [
  {icon:MapPin , label:"سمنان،شاهرود،میدان ولایت،بلوار شیرودی قبل از اخلاقی"},
  {icon:Phone , label:"0912 123 4567"},
  {icon:Mail , label:"info@hoomat.ir"},
  {icon:FaInstagram , label:"hoomat.co"},
]

const Footer = () => {
  return (
    <footer className="relative mt-55 md:mt-48 bg-primary text-white">
      <div className="absolute left-1/2 top-0  w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 md:px-6 rounded-3xl bg-secondary p-10 text-center shadow-2xl">
         <span className="text-primary text-3xl font-semibold">آماده شروع پروژه هستید؟</span>
         <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">پروژه بعدی شما می‌تواند با هومت آغاز شود.</h2>
         <p className="mx-auto text-xl md:text-base mt-5 max-w-3xl leading-8 text-gray-100">
          اگر برای اجرای سیستم‌های خورشیدی یا تجهیزات امنیتی به مشاوره نیاز دارید، کارشناسان هومت آماده‌اند تا بهترین راهکار را متناسب با نیاز شما ارائه دهند.
         </p>
         <Button className={"bg-primary mt-8 rounded-xl px-6 py-3 font-semibold text-white transition hover:scale-105 hover:cursor-pointer"}>
          تماس با ما
         </Button>
      </div>
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-63 md:pt-52">
        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold">Hoomat</h2>
            <p className="mt-5 text-lg md:text-base leading-8 text-gray-300">
              ارائه‌دهنده راهکارهای نوین در حوزه انرژی خورشیدی و سیستم‌های
              امنیتی با تمرکز بر کیفیت، نوآوری و رضایت مشتری.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-3xl md:text-2xl font-semibold">لینک‌های سریع</h3>
            <ul className="space-y-4 text-gray-300">
              {navLinks.map((link)=>{
                return(
                  <li key={link.path}>
                    <Link to={link.path} className={"hover:text-secondary text-lg md:text-base"}>
                    <span>{link.label}</span>
                    </Link>
                  </li>
                )})}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-3xl md:text-2xl font-semibold">اطلاعات تماس</h3>
            <div className="space-y-5">
              {contactInfo.map((contact ,index)=>{
                const Icon = contact.icon
                return(
                  <div key={index} className={"flex items-center gap-3"}>
                    <Icon size={25} className={"text-secondary"}/>
                    <span className="text-lg md:text-base">{contact.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-gray-400 flex justify-between mx-2 flex-col gap-3 md:flex-row">
          <Link to="/admin/login" className="bg-secondary text-sm text-black font-semibold rounded-xl px-4 py-3 hover:scale-105 transition">
             ورود مدیریت
          </Link>
          <span> © 2026 Hoomat. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer