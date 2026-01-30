'use client'

import React from 'react'
import { CheckCircle2, Shield, Leaf, Award, Search, FileText, Settings, ArrowRight } from 'lucide-react'

const serviceDetails = [
    {
        id: 'sst',
        title: 'Seguridad y Salud en el Trabajo (SST)',
        icon: <Shield className="size-8 text-orange-500" />,
        description: 'Implementamos sistemas de gestión que protegen a su activo más valioso: sus trabajadores. Nos enfocamos en la prevención de riesgos y el cumplimiento normativo.',
        features: [
            'Diseño e implementación del SG-SST (Res. 0312)',
            'Asesoría técnica en prevención de riesgos laborales',
            'Investigación de accidentes e incidentes',
            'Planes de emergencias y formación de brigadas',
            'Mediciones higiénicas y ergonomía'
        ],
        color: 'orange'
    },
    {
        id: 'ambiental',
        title: 'Gestión Ambiental',
        icon: <Leaf className="size-8 text-green-500" />,
        description: 'Acompañamos a las empresas en su transición hacia la sostenibilidad, garantizando el cumplimiento de la legislación ambiental vigente y minimizando su impacto.',
        features: [
            'Planes de Manejo Ambiental (PMA)',
            'Gestión integral de residuos (GIRS)',
            'Trámites ante autoridades ambientales',
            'Programas de uso eficiente de recursos',
            'Asesoría en producción más limpia'
        ],
        color: 'green'
    },
    {
        id: 'calidad',
        title: 'Gestión de Calidad (ISO 9001)',
        icon: <Award className="size-8 text-blue-500" />,
        description: 'Buscamos la excelencia operacional a través de procesos estandarizados que aumentan la satisfacción del cliente y la eficiencia organizacional.',
        features: [
            'Implementación de la norma ISO 9001:2015',
            'Gestión por procesos y mejora continua',
            'Elaboración de manuales y procedimientos',
            'Indicadores de gestión y KPI\'s',
            'Estandarización de servicios'
        ],
        color: 'blue'
    },
    {
        id: 'auditorias',
        title: 'Auditorías Integrales',
        icon: <Search className="size-8 text-purple-500" />,
        description: 'Evaluamos objetivamente sus sistemas de gestión para identificar oportunidades de mejora y garantizar que se cumplan los objetivos establecidos.',
        features: [
            'Auditorías internas de certificación',
            'Pre-auditorías de cumplimiento normativo',
            'Auditorías a proveedores',
            'Seguimiento a planes de acción',
            'Informes técnicos de diagnóstico'
        ],
        color: 'purple'
    },
    {
        id: 'ruc',
        title: 'Registro Único RUC',
        icon: <FileText className="size-8 text-red-500" />,
        description: 'Asesoría especializada para empresas contratistas del sector hidrocarburos y otros sectores que requieran calificación RUC.',
        features: [
            'Inscripción y actualización RUC',
            'Acompañamiento en evaluaciones del Consejo Colombiano de Seguridad',
            'Análisis de brechas frente a los requisitos RUC',
            'Gestión documental especializada',
            'Mantenimiento continuo del sistema'
        ],
        color: 'red'
    },
    {
        id: 'sgi',
        title: 'Sistemas Integrados (HSEQ)',
        icon: <Settings className="size-8 text-amber-500" />,
        description: 'Integramos sus sistemas en una sola estructura coherente que facilite la toma de decisiones y reduzca la duplicidad de esfuerzos.',
        features: [
            'Integración SST, Ambiente y Calidad',
            'Simplificación de la estructura documental',
            'Cultura organizacional integrada',
            'Optimización de recursos administrativos',
            'Visión holística del riesgo'
        ],
        color: 'amber'
    }
]

const DetailedServices = () => {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-20">
                    {serviceDetails.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Content Box */}
                            <div className="flex-1 w-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-white rounded-2xl shadow-xl shadow-gray-200/50">
                                        {service.icon}
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tight">
                                    {service.title}
                                </h2>

                                <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 group">
                                            <CheckCircle2 className="size-5 text-orange-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-bold text-gray-700 leading-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <button className="flex items-center gap-2 text-sm font-black text-orange-500 uppercase tracking-widest hover:gap-4 transition-all group">
                                        Solicitar información técnica
                                        <ArrowRight className="size-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Image/Box Placeholder */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center`}>
                                        {/* Using an icon as a large watermark placeholder */}
                                        <div className="opacity-5 scale-[3] group-hover:scale-[3.5] group-hover:rotate-6 transition-all duration-700">
                                            {service.icon}
                                        </div>
                                        <div className="relative z-10 text-center p-8">
                                            <div className="text-gray-300 text-6xl font-black mb-2 italic">SIPRAC</div>
                                            <div className="text-gray-200 text-sm font-bold uppercase tracking-[1em]">Excellence</div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                                        <div className="text-orange-500 font-black text-xl leading-none">0{index + 1}</div>
                                        <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">Sección</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DetailedServices
