import img3 from "../../assets/img3.jpg"
import { BadgeCheck, Users, Headset } from "lucide-react";
import Button from "../Ui/Button";
import { Link } from "react-router";

const about =[
    {title:"کیفیت تضمین‌شده", icon:BadgeCheck},
    {title:"تیم متخصص و باتجربه", icon:Users},
    {title:"پشتیبانی و خدمات پس از اجرا", icon:Headset},  
]

const About = () => {
  return ( 
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl items-center gap-16 px-8">
        <div className="w-1/2">
          <span className="text-secondary text-4xl font-semibold">
            چرا هومت؟
          </span>
          <h2 className="mt-3 text-5xl font-bold text-primary leading-relaxed">
            انتخابی مطمئن برای
            <br />
            انرژی پاک و امنیت پایدار
          </h2>
          <p className="mt-6 text-lg leading-9 text-gray-600"> ما با ترکیب دانش فنی، تجربه اجرایی و استفاده از تجهیزات باکیفیت، راهکارهایی ارائه می‌دهیم که علاوه بر افزایش بهره‌وری انرژی، امنیت و آرامش خاطر را برای مشتریان فراهم می‌کند. از مشاوره و طراحی تا اجرا و پشتیبانی، در تمامی مراحل پروژه همراه شما هستیم.</p>
          <div className="mt-6 space-y-5">
            {about.map((about)=> {
                const Icon = about.icon;
                return(
                    <div className="flex items-center gap-3">
                        <Icon className="text-secondary" size={28}/>
                        <span className="text-lg font-medium">
                            {about.title}
                        </span>
                    </div>
                )
            })}
          </div>
          <Link to="/about" className="mt-10 inline-block rounded-xl bg-secondary px-6 py-3 font-semibold text-primary transition hover:scale-105 hover:cursor-pointer">
            درباره ما
          </Link>
        </div>
        <div className="w-1/2">
          <img src={img3} alt="درباره هومت" className="h-137.5 w-full rounded-3xl object-cover shadow-xl"/>
        </div>
      </div>
    </section>
  )
}

export default About
