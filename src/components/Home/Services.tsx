import { Sun, Camera, BatteryCharging,Wrench,} from "lucide-react";
import { Link } from "react-router";


const services = [
  {title: "پنل خورشیدی",description:"طراحی، تأمین و نصب انواع سیستم‌های خورشیدی برای مصارف خانگی، تجاری وصنعتی.",icon: Sun,path:"/services#solar"},
  {title: "دوربین مداربسته",description:"اجرای سیستم‌های نظارتی و امنیتی با تجهیزات پیشرفته و کیفیت بالا.",icon: Camera,path: "/services#camera"},
  {title: "ذخیره‌سازی انرژی",description:"ارائه راهکارهای ذخیره انرژی با استفاده از باتری‌ها و تجهیزات استاندارد.",icon: BatteryCharging,path: "/services#storage"},
  {title: "نصب و پشتیبانی",description:"راه‌اندازی، سرویس دوره‌ای و پشتیبانی تخصصی برای تمامی پروژه‌ها.",icon: Wrench,path: "/services#support"},
];

const Services = () => {
  return (
     <section className="bg-gray-50 pt-14 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-4 md:mb-16 text-center">
          <span className="text-secondary text-3xl md:text-4xl font-semibold">
            خدمات ما
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">
            خدماتی که ارائه می‌دهیم
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            با ارائه خدمات تخصصی در حوزه انرژی خورشیدی و سیستم‌های امنیتی،
            راهکارهایی مطمئن، به‌روز و متناسب با نیاز مشتریان ارائه می‌دهیم.
          </p>
        </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link to={service.path} key={service.title}  >
                <div className="rounded-3xl h-auto md:h-60 bg-gray-100 md:bg-white px-3 py-4 md:p-8 text-center md:text-start shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
                  <div className="mb-4 md:mb-6 flex h-16 w-16 items-center justify-center rounded-2xl mx-9 md:mx-0 bg-secondary/20">
                   <Icon className="text-secondary" size={32} />
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-2 md:mt-4 leading-5 md:leading-8 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
          </div>
      </div>
    </section>
  )
}

export default Services
