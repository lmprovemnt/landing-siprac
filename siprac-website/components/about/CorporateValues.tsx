import MobileCarousel from "../ui/MobileCarousel";

const values = [
  {
    title: "Compromiso",
    description:
      "Trabajamos con responsabilidad y dedicación para cumplir con las expectativas de nuestros clientes.",
    icon: "fa-hands-helping",
  },
  {
    title: "Excelencia",
    description:
      "Buscamos la mejora continua en todos nuestros servicios para garantizar la calidad.",
    icon: "fa-award",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con transparencia, ética y respeto en todas nuestras actividades.",
    icon: "fa-balance-scale",
    highlight: true,
  },
  {
    title: "Innovación",
    description:
      "Aplicamos soluciones innovadoras y tecnológicas en nuestros procesos de consultoría.",
    icon: "fa-lightbulb",
  },
];

const CorporateValues = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-4 tracking-tighter">
            Valores Corporativos
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">
            Principios que guían nuestro trabajo
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <MobileCarousel className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl md:mx-auto md:pb-0 scrollbar-hide justify-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#FAF9F6] rounded-[2.5rem] p-8 md:p-12 text-center flex flex-col items-center group cursor-default transition-all duration-500 shadow-[inset_12px_12px_24px_#d1cfcc,inset_-12px_-12px_24px_#ffffff] h-full"
            >
              <div className="w-20 h-20 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-10 shadow-[inset_8px_8px_16px_#d1cfcc,inset_-8px_-8px_16px_#ffffff] transition-all duration-500 border border-white/10">
                <i
                  className={`fas ${value.icon} text-3xl transition-colors duration-500 ${value.highlight ? "text-orange-600" : "text-orange-500 opacity-60 group-hover:opacity-100 group-hover:text-orange-600"}`}
                ></i>
              </div>
              <h3
                className={`text-2xl font-black mb-6 tracking-tight uppercase transition-colors duration-500 ${value.highlight ? "text-orange-600" : "text-black group-hover:text-orange-600"}`}
              >
                {value.title}
              </h3>
              <p className="text-[11px] font-extrabold text-gray-500 leading-relaxed uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                {value.description}
              </p>
            </div>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
};

export default CorporateValues;
