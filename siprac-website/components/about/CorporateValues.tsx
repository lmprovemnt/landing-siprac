const values = [
    {
        title: "Compromiso",
        description: "Trabajamos con responsabilidad y dedicación para cumplir con las expectativas de nuestros clientes.",
        icon: "fa-hands-helping"
    },
    {
        title: "Excelencia",
        description: "Buscamos la mejora continua en todos nuestros servicios para garantizar la calidad.",
        icon: "fa-award"
    },
    {
        title: "Integridad",
        description: "Actuamos con transparencia, ética y respeto en todas nuestras actividades.",
        icon: "fa-balance-scale",
        highlight: true
    },
    {
        title: "Innovación",
        description: "Aplicamos soluciones innovadoras y tecnológicas en nuestros procesos de consultoría.",
        icon: "fa-lightbulb"
    }
]

const CorporateValues = () => {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-orange-500 mb-4 tracking-tighter">Valores Corporativos</h2>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Principios que guían nuestro trabajo</p>
                    <div className="w-16 h-1 bg-orange-500 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-10 text-center transition-all duration-500 group cursor-default h-full flex flex-col items-center ${value.highlight
                                    ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-2xl scale-105 border-none'
                                    : 'bg-white text-gray-500 shadow-sm hover:shadow-xl hover:-translate-y-2'
                                }`}
                        >
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 ${value.highlight ? 'bg-white/20' : 'bg-orange-50'
                                }`}>
                                <i className={`fas ${value.icon} text-3xl ${value.highlight ? 'text-white' : 'text-orange-500'}`}></i>
                            </div>
                            <h3 className={`text-2xl font-black mb-6 ${value.highlight ? 'text-white' : 'text-black'}`}>{value.title}</h3>
                            <p className={`text-sm font-bold leading-relaxed ${value.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateValues;
