import type { ProjectDetail ,ServiceItem } from "../../Types/content";

export type DetailCardProps = {
  item: ProjectDetail | ServiceItem;
  reverse?: boolean;
};

const DetailCard = ({ item, reverse = false }: DetailCardProps) => {
  return (
    <section id={item.id} className={`scroll-mt-32 px-8 pb-10 mx-auto flex max-w-7xl flex-col items-center gap-3 mb-8 md:mb-0 md:gap-12 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="w-full lg:w-1/2">
        {item.image && (
         <img src={item.image} alt={item.title} className="h-80 w-full rounded-3xl object-cover shadow-xl" /> )}
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-primary">{item.title}</h2>
        {"location" in item && item.location && (
          <h3 className="mt-3 text-xl leading-relaxed text-gray-600"> {item.location} </h3>
        )}
        <p className="text-lg leading-9 text-gray-600">{item.description}</p>
        <div className="mt-6 space-y-3">
          {item.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                ✓
              </span>
              <span className="text-lg text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailCard;