import portfolioData from "../portFoliodata";


const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full flex flex-col md:scroll-mt-23 scroll-mt-76">
      {portfolioData.map((item) => (
        <div key={item.id} className="w-full">
          <img
            src={item.image}
            alt={`portfolio-${item.id}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </section>
  );
};


export default Portfolio;

