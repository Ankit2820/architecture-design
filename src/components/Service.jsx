import servicesData from "../data";
const Services = () => {
  return (
    <section id="services" className="py-16 px-6 md:px-20 bg-[#fff5ea] md:scroll-mt-24 scroll-mt-76">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8B4513]">
          Our Services
        </h2>
        <p className="text-[#8B4513] text-xl mt-4">
          We provide high quality architectural and design solutions.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
  key={service.id}
  className="relative h-72 rounded-2xl overflow-hidden shadow-md group"
>
  {/* Background Image */}
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col justify-end p-14 sm:p-8 text-white">
    <h3 className="md:text-4xl font-bold mb-2 text-2xl">
      {service.title}
    </h3>
    <p className="text-xl">
      {service.description}
    </p>
  </div>
</div>

        ))}
      </div>

    </section>
  );
};

export default Services;


