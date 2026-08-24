import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const navLinks = [
        {path:"/" , label: "صفحه اصلی"},
        { path: "/services" , label: "محصولات و خدمات" },
        { path: "/projects", label: "پروژه ها" },
        { path: "/about", label: "درباره ما" },
        { path: "/contact", label: "تماس با ما" },
        { path: "/services", label: "ورود/ثبت نام" }];
    
    const navContact = [
      {icon:MapPin , lebel:"سمنان،شاهرود،میدان ولایت،بلوار شیرودی قبل از اخلاقی"},
      {icon:Phone , lebel:"0912 123 4567"},
      {icon:Mail , lebel:"info@hoomat.ir"},
      {icon:FaInstagram , lebel:"hoomat.co"},
    ]

  return (
    <footer className="relative mt-48 bg-primary text-white">
      <div className="absolute left-1/2 top-0 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6">
        <div className="rounded-3xl bg-secondary p-10 text-center shadow-2xl">
          <span className="text-primary text-3xl font-semibold">
            آماده شروع پروژه هستید؟
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            پروژه بعدی شما می‌تواند با هومت آغاز شود.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-100">
            اگر برای اجرای سیستم‌های خورشیدی یا تجهیزات امنیتی به مشاوره نیاز دارید، کارشناسان هومت آماده‌اند تا بهترین راهکار را متناسب با نیاز شما ارائه دهند.
          </p>

          <div className="mt-8">
            <Link to="/contact" className={"bg-primary rounded-xl px-6 py-3 font-semibold text-white transition hover:scale-105 hover:cursor-pointer"}>
              تماس با ما
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 pb-8 pt-52">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold">Hoomat</h2>
            <p className="mt-5 leading-8 text-gray-300">
              ارائه‌دهنده راهکارهای نوین در حوزه انرژی خورشیدی و سیستم‌های
              امنیتی با تمرکز بر کیفیت، نوآوری و رضایت مشتری.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              لینک‌های سریع
            </h3>

            <ul className="space-y-4 text-gray-300">
              {navLinks.map((link)=>{
                return(
                  <li>
                    <Link key={link.path} to={link.path} className={"hover:text-secondary"}>
                    <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              اطلاعات تماس
            </h3>

            <div className="space-y-5">
              {navContact.map((contact)=>{
                const Icon = contact.icon
                return(
                  <div className={"flex items-center gap-3"}>
                    <Icon size={25} className={"text-secondary"}/>
                    <span>{contact.lebel}</span>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-gray-400">
          © 2026 Hoomat. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
