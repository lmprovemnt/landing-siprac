'use client'

import React from 'react'
import { LayoutGrid, FileText, Leaf, Shield, Car, ArrowUpRight } from 'lucide-react'

const advisoryServices = [
    {
        icon: <LayoutGrid className="size-8" />,
        title: 'Sistemas de Gestión Integrado (SGI)',
        description: 'Diseñamos una estructura unificada que integra calidad, medio ambiente y seguridad, optimizando recursos y eliminando la duplicidad de procesos para una gestión empresarial más ágil.',
        color: 'from-amber-400 to-orange-600'
    },
    {
        icon: <FileText className="size-8" />,
        title: 'Registro Único de Contratistas (RUC)',
        description: 'Acompañamos a las empresas contratistas en el cumplimiento de los estándares de Seguridad, Salud en el Trabajo y Medio Ambiente exigidos por la guía RUC para elevar su competitividad en licitaciones.',
        color: 'from-blue-400 to-indigo-600'
    },
    {
        icon: <Leaf className="size-8" />,
        title: 'Gestión Ambiental',
        description: 'Asesoramos en la implementación de prácticas sostenibles que aseguren el cumplimiento de la normativa ambiental vigente, reduciendo el impacto de su operación y fortaleciendo su responsabilidad social corporativa.',
        color: 'from-green-400 to-emerald-600'
    },
    {
        icon: <Shield className="size-8" />,
        title: 'Seguridad y Salud en el Trabajo (SST)',
        description: 'Desarrollamos el Sistema de Gestión de Seguridad y Salud en el Trabajo bajo estándares legales, enfocándonos en la prevención de riesgos y la protección de la integridad física y mental de sus colaboradores.',
        color: 'from-orange-400 to-red-600'
    },
    {
        icon: <Car className="size-8" />,
        title: 'Plan estratégico de seguridad vial (PESV)',
        description: 'Diseñamos y ponemos en marcha planes de movilidad segura con el objetivo de reducir la accidentalidad vial, cumpliendo con los requisitos legales y fomentando una cultura de prevención en la vía.',
        color: 'from-cyan-400 to-blue-600'
    }
]

const CoreAdvisory = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-orange-500 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Especialidades</span>
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.9]">
                            Asesoría <br />
                            <span className="text-orange-500">& Consultoría</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 font-bold max-w-sm text-sm uppercase tracking-widest leading-relaxed border-l-2 border-orange-500 pl-6">
                        Transformamos desafíos normativos en ventajas competitivas reales a través de soluciones estratégicas transversales.
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-12 -mx-4 px-4 md:grid md:grid-cols-2 md:gap-12 md:pb-0 md:mx-auto snap-x snap-mandatory">
                    {advisoryServices.map((service, index) => (
                        <div
                            key={index}
                            className={`relative group min-w-[280px] flex-shrink-0 snap-center ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            {/* Background Number */}
                            <div className="absolute -top-12 -left-6 text-[8rem] md:text-[10rem] font-black text-gray-50 opacity-50 group-hover:text-orange-50 group-hover:opacity-100 transition-all duration-700 -z-10 select-none">
                                0{index + 1}
                            </div>

                            <div className="bg-[#FAF9F6] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[inset_8px_8px_16px_#d1cfcc,inset_-8px_-8px_16px_#ffffff] md:shadow-[inset_10px_10px_20px_#d1cfcc,inset_-10px_-10px_20px_#ffffff] transition-all duration-500 cursor-default h-full flex flex-col">
                                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
                                    <div className="p-3 md:p-5 bg-[#FAF9F6] rounded-2xl md:rounded-3xl text-orange-500 shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] md:shadow-[inset_6px_6px_12px_#d1cfcc,inset_-6px_-6px_12px_#ffffff] border border-white/50 group-hover:text-orange-600 transition-colors duration-500">
                                        {React.cloneElement(service.icon as React.ReactElement, { className: "size-6 md:size-8" })}
                                    </div>
                                    <div className={`h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent`}></div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-6 tracking-tight uppercase leading-tight group-hover:text-orange-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 font-bold leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                                    {service.description}
                                </p>

                                <div className="mt-6 md:mt-10 flex items-center gap-3">
                                    <div className="w-8 md:w-10 h-1 bg-orange-500/20 group-hover:w-16 md:group-hover:w-24 transition-all duration-500 rounded-full"></div>
                                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
                                        Excelencia Operativa
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Architectural accent lines */}
            <div className="absolute top-0 right-0 w-1/3 h-full border-r border-gray-50 -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px border-b border-gray-50 -z-10"></div>

            {/* Soft decorative glow */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-100/20 rounded-full blur-[150px] -z-10"></div>
        </section>
    )
}

export default CoreAdvisory
