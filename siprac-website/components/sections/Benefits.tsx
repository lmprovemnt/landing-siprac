const benefits = [
    {
        icon: 'fas fa-check-circle',
        title: 'Cumplimiento Normativo',
        description: 'Reducción de riesgos legales y administrativos',
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Optimización de Procesos',
        description: 'Mejora de eficiencia y productividad',
    },
    {
        icon: 'fas fa-trophy',
        title: 'Competitividad',
        description: 'Incremento de reputación empresarial',
    },
    {
        icon: 'fas fa-money-bill-wave',
        title: 'Reducción de Costos',
        description: 'Disminución de costos operativos',
    },
]

const Benefits = () => {
    return (
        <section id="beneficios" className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Valor Agregado</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-tighter uppercase">Beneficios de Nuestros Servicios</h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#FAF9F6] rounded-[2.5rem] p-12 text-center flex flex-col items-center group cursor-default transition-all duration-500 shadow-[inset_12px_12px_24px_#d1cfcc,inset_-12px_-12px_24px_#ffffff]"
                        >
                            <div className="w-20 h-20 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-10 text-gray-400 text-3xl transition-all duration-500 shadow-[inset_6px_6px_12px_#d1cfcc,inset_-6px_-6px_12px_#ffffff] group-hover:text-orange-500 border border-white/10">
                                <i className={benefit.icon}></i>
                            </div>
                            <h3 className="text-xl font-black mb-4 text-black tracking-tight group-hover:text-orange-600 transition-colors duration-500 uppercase">
                                {benefit.title}
                            </h3>
                            <p className="text-[10px] text-gray-500 font-extrabold leading-relaxed tracking-widest uppercase opacity-60">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
