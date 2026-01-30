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

const Services = () => {
    const duplicatedServices = [...services, ...services, ...services];

    return (
        <section id="servicios" className="py-24 bg-white overflow-hidden w-full relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="w-full relative z-10">
                <div className="text-center mb-16 px-4">
                    <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-tight uppercase">Portafolio de Servicios</h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative group/carousel">
                    {/* The track container with pause on hover */}
                    <div className="flex gap-6 animate-infinite-scroll group-hover/carousel:[animation-play-state:paused] py-10">
                        {duplicatedServices.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] h-[420px] bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/40 border border-gray-50 flex flex-col relative overflow-hidden group/card hover:-translate-y-2 transition-all duration-500"
                            >
                                {/* Active background hover effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover/card:opacity-[0.03] transition-opacity duration-500`}></div>

                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-orange-50 rounded-2xl text-orange-500 shadow-sm group-hover/card:scale-110 group-hover/card:bg-orange-500 group-hover/card:text-white transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="text-gray-200 group-hover/card:text-orange-500 transition-colors">
                                        <ArrowUpRight className="size-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-black mb-4 text-black leading-tight tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-xs text-gray-500 mb-6 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mt-auto">
                                    {service.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="size-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover/card:bg-orange-100 transition-colors">
                                                <CheckCircle2 className="size-3 text-orange-500" />
                                            </div>
                                            <span className="text-[11px] font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Watermark */}
                                <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover/card:opacity-[0.05] transition-opacity duration-500 pointer-events-none rotate-12 group-hover/card:rotate-0 transform transition-transform duration-700">
                                    <div className="text-9xl font-black">SIPRAC</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced edge gradients */}
                    <div className="absolute top-0 left-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                </div>

            </div>
        </section>
    )
}

export default Services