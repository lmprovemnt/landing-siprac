'use client'

const services = [
    {
        icon: 'fas fa-hard-hat',
        title: 'Seguridad y Salud',
        description: 'Gestión de riesgos laborales, planes de prevención y mejora continua.',
        items: ['Evaluación de riesgos', 'Planes de prevención', 'Capacitación SST']
    },
    {
        icon: 'fas fa-leaf',
        title: 'Gestión Ambiental',
        description: 'Asesoría en cumplimiento ambiental y gestión de residuos.',
        items: ['Gestión de residuos', 'Planes ambientales', 'Sostenibilidad']
    },
    {
        icon: 'fas fa-award',
        title: 'Calidad ISO 9001',
        description: 'Implementación y auditoría de sistemas de gestión de calidad.',
        items: ['Certificación ISO', 'Auditorías internas', 'Procesos']
    },
    {
        icon: 'fas fa-search',
        title: 'Auditorías',
        description: 'Auditorías internas y externas para verificar cumplimiento.',
        items: ['Auditorías internas', 'Pre-auditorías', 'Seguimiento']
    },
    {
        icon: 'fas fa-file-contract',
        title: 'Registro Único RUC',
        description: 'Asesoría para el registro y mantenimiento en el RUC.',
        items: ['Inscripción RUC', 'Actualización', 'Acompañamiento']
    },
    {
        icon: 'fas fa-clipboard-check',
        title: 'Sistemas Gestión',
        description: 'Asesoría e implementación de sistemas integrados.',
        items: ['Implementación SGI', 'Consultoría', 'Mejora continua']
    }
]

const Services = () => {
    const duplicatedServices = [...services, ...services];

    return (
        <section id="servicios" className="py-24 bg-[#FAF9F6] overflow-hidden w-full">
            <div className="w-full">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl font-bold mb-4 text-black font-montserrat tracking-tight">Nuestros Servicios</h2>
                    <p className="text-gray-500 text-sm font-medium mb-6">
                        Soluciones integrales para la gestión de su organización
                    </p>
                    <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
                </div>

                <div className="relative w-full">
                    {/* The track container */}
                    <div className="animate-infinite-scroll flex gap-6">
                        {duplicatedServices.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[240px] h-[360px] bg-white rounded-2xl p-6 shadow-sm border-t-4 border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="text-3xl text-orange-500 mb-5 font-bold">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-base font-bold mb-3 text-black leading-tight h-10 flex items-center">{service.title}</h3>
                                <p className="text-[10px] text-gray-500 mb-4 leading-relaxed font-medium line-clamp-3">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mt-auto">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-[10px] font-bold text-gray-700">
                                            <i className="fas fa-check text-orange-500 mr-2 mt-0.5 text-[8px]"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Edge gradients - Extended width for full-screen fade effect */}
                    <div className="absolute top-0 left-0 bottom-0 w-40 md:w-80 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-40 md:w-80 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6] to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>
        </section>
    )
}

export default Services