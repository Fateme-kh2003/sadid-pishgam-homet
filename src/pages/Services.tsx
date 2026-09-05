import { useEffect, useState } from "react";
import DetailCard from "../components/Ui/DetailCard";
import type { ServiceItem } from "../Types/content";
import { getServicesRequest } from "../services/Servicesservice";

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getServicesRequest()
      .then(setServices)
      .catch((error) => {
        console.error("خطا در دریافت خدمات:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="bg-gray-50 pt-20 md:pt-22">
      {isLoading ? ( 
        <p className="py-20 text-center text-gray-500"> در حال بارگذاری خدمات... </p> ) 
        : ( 
          services.map((service, index) => ( 
            <DetailCard key={service.id} item={service} reverse={index % 2 !== 0} />
          )) 
      )}
    </main>
  );
};

export default Services;