import { useEffect, useState } from "react";
import DetailCard from "../components/Ui/DetailCard";
import type { ServiceItem } from "../Types/content";
import { getServicesRequest } from "../services/servicesService";
import { SpinnerMini } from "../components/Ui/Spinner";

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
        <div className="flex min-h-[60vh] items-center justify-center">
          <SpinnerMini />
        </div>
      ) 
      : (
        services.map((service, index) => (
          <DetailCard
            key={service.id}
            item={service}
            reverse={index % 2 !== 0}
          />
        ))
      )}
    </main>
  );
};

export default Services;