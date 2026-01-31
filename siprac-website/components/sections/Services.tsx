'use client'

import React from 'react'
import {
    HardHat,
    Leaf,
    Award,
    Search,
    FileText,
    Settings,
    CheckCircle2,
    ArrowUpRight,
    Car
} from 'lucide-react'

const services = [
    {
        icon: <HardHat className="size-8" />,
        title: 'Seguridad y Salud',
        description: 'Gestión de riesgos laborales, planes de prevención y mejora continua.',
        items: ['Evaluación de riesgos', 'Planes de prevención', 'Capacitación SST'],
        color: 'from-orange-400 to-orange-600'
    },
    {
        icon: <Leaf className="size-8" />,
        title: 'Gestión Ambiental',
        description: 'Asesoría en cumplimiento ambiental y gestión de residuos.',
        items: ['Gestión de residuos', 'Planes ambientales', 'Sostenibilidad'],
        color: 'from-green-400 to-green-600'
    },
    {
        icon: <Award className="size-8" />,
        title: 'Calidad ISO 9001',
        description: 'Implementación y auditoría de sistemas de gestión de calidad.',
        items: ['Certificación ISO', 'Auditorías internas', 'Procesos'],
        color: 'from-blue-400 to-blue-600'
    },
    {
        icon: <Search className="size-8" />,
        title: 'Auditorías',
        description: 'Auditorías internas y externas para verificar cumplimiento.',
        items: ['Auditorías internas', 'Pre-auditorías', 'Seguimiento'],
        color: 'from-purple-400 to-purple-600'
    },
    {
        icon: <FileText className="size-8" />,
        title: 'Registro Único RUC',
        description: 'Asesoría para el registro y mantenimiento en el RUC.',
        items: ['Inscripción RUC', 'Actualización', 'Acompañamiento'],
        color: 'from-red-400 to-red-600'
    },
    {
        icon: <Settings className="size-8" />,
        title: 'Sistemas Gestión',
        description: 'Asesoría e implementación de sistemas integrados.',
        items: ['Implementación SGI', 'Consultoría', 'Mejora continua'],
        color: 'from-amber-400 to-amber-600'
    },
    {
        icon: <Car className="size-8" />,
        title: 'Seguridad Vial (PESV)',
        description: 'Diseño e implementación del Plan Estratégico de Seguridad Vial.',
        items: ['Diseño PESV', 'Seguimiento', 'Normativa vigente'],
        color: 'from-cyan-400 to-cyan-600'
    }
]

// Reusable Neumorphic Card Component
const NeumorphicCard = ({ service, index }: { service: any, index: number }) => (
    <div className="min-w-[280px] md:min-w-[350px] h-auto md:h-[450px] bg-[#FAF9F6] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group/card shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff] transition-transform duration-300 hover:-translate-y-2 flex flex-col">

        {/* Header: Icon & Arrow */}
        <div className="flex justify-between items-start mb-4 md:mb-8">
            <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl text-orange-500 shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] bg-[#FAF9F6] group-hover/card:text-orange-600 transition-colors duration-500`}>
                {React.cloneElement(service.icon as React.ReactElement, { className: "size-6 md:size-8" })}
            </div>
            <div className="text-gray-300 group-hover/card:text-orange-500 transition-colors">
                <ArrowUpRight className="size-5 md:size-6" />
            </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-black leading-tight tracking-tight uppercase">
            {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 leading-relaxed font-bold opacity-80">
            {service.description}
        </p>

        {/* List Items */}
        <div className="space-y-2 md:space-y-3 mt-auto">
            {service.items.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3">
                    <div className="size-1.5 md:size-2 rounded-full bg-orange-500 shrink-0 shadow-[2px_2px_4px_#d1cfcc]"></div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-wide">{item}</span>
                </div>
            ))}
        </div>

        {/* Decorative corner accent */}
        <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-tl-[100px] pointer-events-none`}></div>
    </div>
);

const Services = () => {
    // Duplicate for infinite scroll effect
    const duplicatedServices = [...services, ...services];

    return (
        <section id="servicios" className="py-24 bg-[#FAF9F6] overflow-hidden w-full relative">

            <div className="w-full relative z-10">
                <div className="text-center mb-16 px-4">
                    <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-tight uppercase">Portafolio de Servicios</h2>
                    <div className="w-20 h-1 bg-gray-200 mx-auto rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-orange-500 mx-auto"></div>
                    </div>
                </div>

                <div className="relative group/carousel">

                    {/* Mobile: Manual Carousel (Swipe) */}
                    <div className="md:hidden flex overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory gap-6 scroll-smooth">
                        {services.map((service, index) => (
                            <div key={`mobile-${index}`} className="snap-center flex-shrink-0">
                                <NeumorphicCard service={service} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Infinite Scroll (Auto) */}
                    <div className="hidden md:flex gap-8 animate-infinite-scroll group-hover/carousel:[animation-play-state:paused] py-10 px-4">
                        {duplicatedServices.map((service, index) => (
                            <NeumorphicCard key={`desktop-${index}`} service={service} index={index} />
                        ))}
                    </div>

                    {/* Gradient Masks (Desktop Only) */}
                    <div className="hidden md:block absolute top-0 left-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="hidden md:block absolute top-0 right-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10 pointer-events-none"></div>
                </div>

            </div>
        </section>
    )
}

export default Services