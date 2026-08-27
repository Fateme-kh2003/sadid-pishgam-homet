import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import panel from "../../assets/Panel.jpg";
import panel2 from "../../assets/Panel2.png";
import dorbin from "../../assets/Dorbin.jpg";
import Button from "../Ui/Button";

const picture = [{img:panel,alt:"پنل خورشیدی"} , {img:panel2,alt:"پنل خورشیدی"} ,{img:dorbin,alt:"دوربین مداربسته"} ]
const ctaButtonClass = "rounded-xl px-6 py-3 font-semibold transition hover:scale-105";

const Hero = () => {
  return (
      <section>
        <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop={true}>
          {picture.map((image)=>(
           <SwiperSlide key={image.img}>
            <img src={image.img} alt={image.alt} className="h-165 md:h-160 w-full object-cover object-[center_30%]"/>
            <div className="absolute inset-0 bg-black/20"></div>
           </SwiperSlide>
          ))}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="mr-10 md:mr-20 max-w-xl text-white">
              <h1 className="mb-6 text-4xl font-bold leading-relaxed">
               راهکارهای نوین
                <br />
               انرژی خورشیدی و سیستم‌های امنیتی
              </h1>
              <p className="mb-8 md:mb-8 text-xl leading-8 text-gray-200">
               طراحی، تأمین، نصب و پشتیبانی انواع پنل‌های خورشیدی و سیستم‌های
               نظارتی با بهره‌گیری از تجهیزات باکیفیت و تیمی متخصص.
              </p>
              <div className="flex gap-4">  
                <Button className={`${ctaButtonClass} bg-secondary text-primary`}>
                 مشاوره رایگان
                </Button>
                <a href="#projects" className={`${ctaButtonClass} border bg-primary/80 border-primary text-center`}>
                 مشاهده پروژه ها
                </a>
              </div>
            </div>
          </div>
        </Swiper>
      </section>
  );
};

export default Hero;