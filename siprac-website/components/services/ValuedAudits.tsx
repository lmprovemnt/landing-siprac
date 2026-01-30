'use client'

import React from 'react'
import { Car, ShieldCheck, Activity, CheckCircle, ArrowUpRight } from 'lucide-react'

const audits = [
    {
        icon: <Car className="size-8" />,
        title: 'Auditoria de Seguridad Vial',
        description: 'Verificamos la implementación y eficiencia del plan estratégico de seguridad vial (PESV), identificando puntos críticos y áreas de mejora para garantizar desplazamientos seguros y cumplimiento normativo.',
        color: 'from-cyan-500 to-blue-600'
    },
    {
        icon: <ShieldCheck className="size-8" />,
        title: 'Auditoria de Registro Único de Contratistas – RUC',
        description: 'Realizamos evaluaciones internas rigurosas bajo los criterios del Consejo Colombiano de Seguridad para asegurar que su empresa mantenga los más altos puntajes de calificación.',
        color: 'from-red-500 to-rose-600'
    },
    {
        icon: <Activity className="size-8" />,
        title: 'Auditoria Seguridad y Salud en el Trabajo',
        description: 'Evaluamos de manera objetiva su SG-SST para validar el cumplimiento de los estándares mínimos y la efectividad de las medidas de control de riesgos implementadas.',
        color: 'from-orange-500 to-orange-600'
    },
    {
        icon: <CheckCircle className="size-8" />,
        title: 'Auditoria de Calidad',
        description: 'Evaluamos sus procesos internos frente a los estándares de calidad definidos, asegurando que cada etapa de su operación esté orientada a la satisfacción del cliente y la mejora continua.',
        color: 'from-blue-500 to-indigo-600'
    }
]

const ValuedAudits = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Evaluación Especializada</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-tight uppercase">Auditorías de Valor</h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    <p className="mt-8 text-gray-500 max-w-2xl mx-auto font-medium">
                        Identificamos oportunidades de mejora a través de evaluaciones rigurosas y objetivas que garantizan la excelencia operativa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {audits.map((audit, index) => (
                        <div
                            key={index}
                            className="bg-[#FAF9F6] rounded-[2.5rem] p-10 flex flex-col group cursor-default shadow-[inset_10px_10px_20px_#d1cfcc,inset_-10px_-10px_20px_#ffffff]"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`p-4 bg-[#FAF9F6] rounded-2xl text-orange-500 shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] border border-white/50 group-hover:text-orange-600 transition-colors duration-500`}>
                                    {audit.icon}
                                </div>
                                <div className="text-orange-300 group-hover:text-orange-500 transition-colors">
                                    <ArrowUpRight className="size-6" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-black mb-4 tracking-tight uppercase leading-tight">
                                {audit.title}
                            </h3>

                            <p className="text-gray-500 font-bold leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                {audit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decorative touches */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-orange-50/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-50/20 rounded-full blur-[120px] -z-10"></div>
        </section>
    )
}

export default ValuedAudits
