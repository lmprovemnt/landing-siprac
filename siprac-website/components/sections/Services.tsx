'use client'

import { useEffect, useRef } from 'react'

const services = [
    {
        icon: 'fas fa-clipboard-check',
        title: 'Sistemas de Gestión Integrado (SGI)',
        description: 'Asesoría e implementación de sistemas integrados para optimizar procesos y cumplimiento normativo.',
        items: ['Implementación SGI', 'Consultoría especializada', 'Mejora continua']
    },
    {
        icon: 'fas fa-hard-hat',
        title: 'Seguridad y Salud en el Trabajo (SST)',
        description: 'Gestión de riesgos laborales, planes de prevención y mejora continua en seguridad ocupacional.',
        items: ['Evaluación de riesgos', 'Planes de prevención', 'Capacitación SST']
    },
    {
        icon: 'fas fa-leaf',
        title: 'Gestión Ambiental',
        description: 'Asesoría en cumplimiento ambiental, gestión de residuos y sostenibilidad empresarial.',
        items: ['Gestión de residuos', 'Planes ambientales', 'Sostenibilidad']
    },
    {
        icon: 'fas fa-award',
        title: 'Calidad ISO 9001',
        description: 'Implementación y auditoría de sistemas de gestión de calidad para mejorar procesos.',
        items: ['Certificación ISO', 'Auditorías internas', 'Mejora de procesos']
    },
    {
        icon: 'fas fa-search',
        title: 'Auditorías',
        description: 'Auditorías internas y externas para verificar el cumplimiento de los sistemas de gestión.',
        items: ['Auditorías internas', 'Pre-auditorías', 'Seguimiento']
    },
    {
        icon: 'fas fa-file-contract',
        title: 'Registro Único de Contratistas (RUC)',
        description: 'Asesoría para el registro y mantenimiento en el RUC según requisitos legales.',
        items: ['Inscripción RUC', 'Actualización', 'Acompañamiento']
    }
]

const Services = () => {
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Duplicar servicios para efecto infinito
        if (trackRef.current) {
            const track = trackRef.current
            const servicesHTML = track.innerHTML
            track.innerHTML = servicesHTML + servicesHTML
        }
    }, [])

    return (
        <section id="servicios" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Soluciones integrales para la gestión de su organización
                    </p>
                    <div className="w-20 h-1 bg-primary-orange mx-auto"></div>
                </div>

                {/* Carrusel de servicios */}
                <div className="relative overflow-hidden py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div
                        ref={trackRef}
                        className="flex gap-6 animate-servicios-scroll"
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] max-w-[300px] bg-white rounded-lg p-6 shadow-lg border-t-4 border-primary-orange hover:border-secondary-yellow hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                <div className="text-4xl text-primary-orange mb-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                                <ul className="space-y-2 mt-auto">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <i className="fas fa-check text-secondary-yellow mr-2"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services