import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import type { IconItem } from "../../Types/content";
import type { NavItem } from "../../Types/nav";
import { getSiteContentRequest } from "../../services/siteContentService";
import logo from "../../assets/logo.svg"

const navLinks: NavItem[] = [
  { path:"/" , label: "صفحه اصلی"},
  { path: "/services" , label: "محصولات و خدمات" },
  { path: "/projects", label: "پروژه ها" },
  { path: "/about", label: "درباره ما" },
];

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<Record<string, string> | null>( null );
  const [copyright, setCopyright] = useState<string>("");
  const contactItems: IconItem[] = [ { icon: MapPin, label: contactInfo?.address ?? "", }, { icon: Phone, label: contactInfo?.phone ?? "", }, { icon: Mail, label: contactInfo?.email ?? "", }, { icon: FaInstagram, label: contactInfo?.instagram ?? "", }, ];
  
  useEffect(() => { 
    Promise.all([ getSiteContentRequest("contact-info"), getSiteContentRequest("copyright"), ]) 
    .then(([contact, copyrightData]) => { setContactInfo(contact); setCopyright(copyrightData?.text ?? ""); }) 
    .catch((error) => { 
      console.error("خطا در دریافت اطلاعات فوتر:", error); 
    }); 
  }, []);

  if (!contactInfo) return null

  return (
    <footer className="relative mt-55 md:mt-48 bg-primary text-white">
      <div className="absolute left-1/2 top-0  w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-secondary p-6 text-center shadow-2xl">
        <span className="text-primary text-3xl font-semibold">آماده شروع پروژه هستید؟</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">پروژه بعدی شما می‌تواند با هومت آغاز شود.</h2>
        <p className="mx-auto text-xl md:text-base mt-5 max-w-3xl leading-8 text-gray-100"> اگر برای اجرای سیستم‌های خورشیدی یا تجهیزات امنیتی به مشاوره نیاز دارید، کارشناسان هومت آماده‌اند تا بهترین راهکار را متناسب با نیاز شما ارائه دهند.</p>
        <a href="https://wa.me/989120812787" className={"bg-primary inline-block mt-4 rounded-xl px-6 py-3 font-semibold text-white transition hover:scale-105 hover:cursor-pointer"}>
         تماس با ما
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-63 md:pt-40">
        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="flex w-fit items-center justify-center rounded-xl bg-secondary px-4 py-2 mx-auto">
              <img src={logo} alt="هومت" className="h-20 w-auto" />
            </div>
            <p className="mt-5 text-lg md:text-base leading-8 text-gray-300"> ارائه‌دهنده راهکارهای نوین در حوزه انرژی خورشیدی و سیستم‌های امنیتی با تمرکز بر کیفیت، نوآوری و رضایت مشتری.</p>
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
              {contactItems.map((contact ,index)=>{
                const Icon = contact.icon
                if (!contact.label) { return null; }
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
        <div className="mt-4 border-t border-white/10 pt-2 text-center text-gray-400 flex justify-between mx-2 flex-col gap-3 md:flex-row">
          <Link to="/admin/login" className="bg-secondary text-sm text-black font-semibold rounded-xl px-4 py-3 hover:scale-105 transition">
             ورود مدیریت
          </Link>
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer