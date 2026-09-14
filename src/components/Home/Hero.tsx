import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getSiteContentRequest } from "../../services/siteContentService";
import type { HeroContent } from "../../Types/content";
import { MultilineText } from "../Ui/TextHelpers";

const ctaButtonClass = "rounded-xl px-6 py-3 font-semibold transition hover:scale-105";

const Hero = () => {
  const [content, setContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    getSiteContentRequest("hero")
      .then((data) => setContent(data as HeroContent))
      .catch((error) => console.error("خطا در دریافت محتوای Hero:", error));
  }, []);

  if (!content) return null;
  const images = [content.image1, content.image2, content.image3].filter(Boolean);

  return (
    <section>
      <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop={true}>
        {images.map((image , index)=>(
         <SwiperSlide key={image}>
          <img src={image} alt={`اسلاید ${index + 1}`} className="h-165 md:h-160 w-full object-cover object-[center_30%]"/>
          <div className="absolute inset-0 bg-black/20"/>
         </SwiperSlide>
        ))}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mr-10 md:mr-20 max-w-xl text-white">
            <h1 className="mb-6 text-4xl font-bold leading-relaxed">
              <MultilineText text={content.title} />
            </h1>
            <p className="mb-8 md:mb-8 whitespace-pre-line text-xl leading-8 text-gray-200">{content.description}</p>
            <div className="flex gap-4">  
              <a href="https://wa.me/989120812787" className={`${ctaButtonClass} bg-secondary text-primary`}>مشاوره رایگان</a>
              <a href="#projects" className={`${ctaButtonClass} border bg-primary/80 border-primary text-center`}>مشاهده پروژه ها</a>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;