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
                    <h2 className="text-4xl font-bold mb-4 text-black">Beneficios de Nuestros Servicios</h2>
                    <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="liquid-glass bg-white rounded-2xl p-8 text-center shadow-sm flex flex-col items-center group transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500 text-2xl group-hover:scale-110 transition-transform duration-500">
                                <i className={benefit.icon}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-black group-hover:text-orange-500 transition-colors duration-500">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                                "{benefit.description}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
