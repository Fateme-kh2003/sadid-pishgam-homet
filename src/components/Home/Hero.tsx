import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import panel from "../../assets/Panel.jpg";
import panel2 from "../../assets/Panel2.png";
import dorbin from "../../assets/Dorbin.jpg";
import Button from "../Ui/Button";

const Hero = () => {
  return (
    <section>
      <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop={true}>
        <SwiperSlide>
          <img src={panel} alt="پنل خورشیدی" className="h-182.25 w-full object-cover object-[center_30%]"/>
          <div className="absolute inset-0 bg-black/20"></div>
        </SwiperSlide>
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mr-20 max-w-xl text-white">
            <h1 className="mb-6 text-4xl font-bold leading-relaxed">
              راهکارهای نوین
              <br />
              انرژی خورشیدی و سیستم‌های امنیتی
            </h1>

            <p className="mb-8 text-xl leading-8 text-gray-200">
              طراحی، تأمین، نصب و پشتیبانی انواع پنل‌های خورشیدی و سیستم‌های
              نظارتی با بهره‌گیری از تجهیزات باکیفیت و تیمی متخصص.
            </p>

            <div className="flex gap-4">
              
              <Button className="rounded-xl bg-secondary px-6 py-3 font-semibold text-primary transition hover:scale-105 hover:cursor-pointer">مشاوره رایگان</Button>
              <Button  className="rounded-xl border bg-primary/80 border-primary px-6 py-3 transition hover:scale-105 hover:cursor-pointer">
               <a href="#projects">مشاهده پروژه ها</a>
              </Button>
            </div>
          </div>
        </div>
        <SwiperSlide>
          <img src={panel2} alt="پنل خورشیدی" className="h-182.25 w-full object-cover object-[center_30%]"/>
          <div className="absolute inset-0 bg-black/20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dorbin} alt="دوربین مداربسته" className={"h-182.25 w-full object-cover object-[center_30%]"}/>
          <div className="absolute inset-0 bg-black/20"></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
