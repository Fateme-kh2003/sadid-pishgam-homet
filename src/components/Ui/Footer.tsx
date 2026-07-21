import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../Ui/Button";

const Footer = () => {
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
            <Button className={"bg-primary rounded-xl px-6 py-3 font-semibold text-white transition hover:scale-105 hover:cursor-pointer"}>
              تماس با ما
            </Button>
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
              <li>
                <Link className="hover:text-secondary" to="/">
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link className="hover:text-secondary" to="/services">
                  خدمات
                </Link>
              </li>

              <li>
                <Link className="hover:text-secondary" to="/projects">
                  پروژه‌ها
                </Link>
              </li>

              <li>
                <Link className="hover:text-secondary" to="/about">
                  درباره ما
                </Link>
              </li>

              <li>
                <Link className="hover:text-secondary" to="/contact">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              اطلاعات تماس
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <MapPin className="text-secondary" />
                <span>شاهرود، ایران</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-secondary" />
                <span>0912 123 4567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-secondary" />
                <span>info@hoomat.ir</span>
              </div>

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
