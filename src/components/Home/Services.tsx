import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { ServiceItem, ServicesIntroContent } from "../../Types/content";
import { getServicesRequest } from "../../services/servicesService";
import { getSiteContentRequest } from "../../services/siteContentService";
import { SpinnerMini } from "../Ui/Spinner";

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [intro, setIntro] = useState<ServicesIntroContent | null>(null);

  useEffect(() => {
    getServicesRequest()
      .then(setServices)
      .catch((error) => {
        console.error("خطا در دریافت خدمات:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    getSiteContentRequest("services-intro")
      .then((data) => {
        setIntro(data as ServicesIntroContent);
      })
      .catch((error) => {
        console.error("خطا در دریافت محتوای خدمات:", error);
      });
  }, []);

  if (!intro) return null;

  return (
    <section className="bg-gray-50 pt-14 md:py-10 mx-auto max-w-7xl px-4">
      <div className="mb-4 md:mb-16 text-center">
        <span className="text-secondary text-3xl md:text-4xl font-semibold">
          {intro.title}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
          {intro.subtitle}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          {intro.description}
        </p>
      </div>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {services.map((service) => (
            <Link
              to={`/services#${service.id}`}
              key={service.id}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-3xl bg-gray-100 md:bg-white px-3 py-4 md:p-6 text-center md:text-start shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
                {service.emoji && (
                  <div className="mb-4 md:mb-6 flex h-16 w-16 items-center justify-center rounded-2xl mx-9 md:mx-0 bg-secondary/20 text-3xl">
                    {service.emoji}
                  </div>
                )}
                <h3 className="line-clamp-2 text-lg md:text-2xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 md:mt-4 line-clamp-3 leading-5 md:leading-8 text-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
