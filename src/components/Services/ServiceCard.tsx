type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

type ServiceCardProps = {
  service: Service;
  reverse?: boolean;
};

const ServiceCard = ({ service, reverse = false }: ServiceCardProps) => {
  return (
    <section id={service.id} className="scroll-mt-32 px-8 pb-10">
      <div className={`mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row ${ reverse ? "lg:flex-row-reverse" : ""}`}>
        <div className="w-full lg:w-1/2">
          <img src={service.image} alt={service.title} className="h-80 w-full rounded-3xl object-cover shadow-xl"/>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold leading-relaxed text-primary">
            {service.title}
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            {service.description}
          </p>

          <div className="mt-6 space-y-3">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                  ✓
                </span>

                <span className="text-lg text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;