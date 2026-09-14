import { useEffect, useState } from "react";
import { BadgeCheck, Users, Headset } from "lucide-react";
import { Link } from "react-router";
import type { IconItem , AboutHomeContent } from "../../Types/content"
import { getSiteContentRequest } from "../../services/siteContentService";
import { MultilineText } from "../Ui/TextHelpers";

const about:IconItem[] =[
  {label:"کیفیت تضمین‌شده", icon:BadgeCheck},
  {label:"تیم متخصص و باتجربه", icon:Users},
  {label:"پشتیبانی و خدمات پس از اجرا", icon:Headset},  
]

const About = () => {
  const [content, setContent] = useState<AboutHomeContent | null>(null);

  useEffect(() => {
    getSiteContentRequest("about-home")
      .then((data) => setContent(data as AboutHomeContent))
      .catch((error) => console.error("خطا در دریافت بخش چرا هومت:", error));
  }, []);

  if (!content) return null;

  return ( 
    <section className="bg-white pb-8 pt-28 md:py-17 mx-auto flex max-w-7xl items-center gap-16  md:px-8">
      <div className="md:w-1/2 md:text-start text-center">
        <span className="text-secondary text-3xl md:text-4xl font-semibold">چرا هومت؟</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary leading-relaxed">
          <MultilineText text={content.title} />
        </h2>
        <p className="mt-4 md:mt-6 m-4 md:mx-0 text-lg leading-9 text-gray-600">{content.description}</p>
        <div className="mt-6 mr-3 space-y-5">
          {about.map((item)=> {
            const Icon = item.icon;
            return(
              <div key={item.label} className="flex items-center gap-3">
                <Icon className="text-secondary" size={28}/>
                <span className="text-lg font-medium">{item.label}</span>
              </div>
            )
          })}
        </div>
        <Link to="/about" className="mt-10 md:mt-6   inline-block rounded-xl bg-secondary px-6 py-3 font-semibold text-primary transition hover:scale-105 hover:cursor-pointer">
            درباره ما
        </Link>
      </div>
      <img src={content.image} alt="درباره هومت" className="h-137.5 w-1/2 rounded-3xl object-cover shadow-xl hidden md:flex"/>
    </section>
  )
}

export default About