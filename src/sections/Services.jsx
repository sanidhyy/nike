import { ServiceCard } from "../components";
import { services } from "../constants";

// services
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {/* map over each service */}
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
