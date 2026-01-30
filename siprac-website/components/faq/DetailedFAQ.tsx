'use client'

import React from 'react'
import { Award, Clock, Search, BookOpen, Headset, ArrowRight, ChevronDown } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        icon: <Award className="size-6" />,
        question: "¿SIPRAC emite certificaciones ISO?",
        answer: "No, somos consultores expertos. Preparamos y auditamos su sistema para que cumpla con todos los requisitos necesarios para obtener la certificación ante un ente oficial.",
        category: "Certificaciones"
    },
    {
        icon: <Clock className="size-6" />,
        question: "¿Cuánto tiempo toma implementar un sistema de gestión?",
        answer: "El tiempo varía según el tamaño y la complejidad de la organización, estimando un periodo de entre 6 meses y 1 año.",
        category: "Procesos"
    },
    {
        icon: <Search className="size-6" />,
        question: "¿Qué incluyen sus servicios de auditoría?",
        answer: "Evaluamos a fondo sus procesos, identificamos brechas de cumplimiento y entregamos un plan de acción detallado para la mejora funcional del sistema.",
        category: "Auditoría"
    },
    {
        icon: <BookOpen className="size-6" />,
        question: "¿Es necesario tener conocimiento previo en normas?",
        answer: "No. Nosotros diseñamos el sistema desde cero, adaptándolo 100% a la realidad y operación actual de su negocio; al igual que orientando al cumplimiento solicitado por ministerio de trabajo.",
        category: "Requisitos"
    },
    {
        icon: <Headset className="size-6" />,
        question: "¿Brindan soporte después de la implementación?",
        answer: "Sí, ofrecemos servicios de mantenimiento y auditorías internas periódicas para asegurar que el sistema evolucione y se mantenga eficiente.",
        category: "Soporte"
    }
]

const DetailedFAQ = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <Accordion type="single" collapsible className="w-full space-y-6">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="liquid-glass border border-white/40 rounded-[2rem] px-8 bg-[#FAF9F6]/50 hover:bg-white transition-all duration-500 overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <AccordionTrigger className="hover:no-underline py-8 group/trigger">
                                <div className="flex items-center gap-6 text-left w-full">
                                    <div className="p-3 bg-white rounded-2xl text-orange-500 shadow-sm border border-orange-100 group-hover/trigger:bg-orange-500 group-hover/trigger:text-white transition-all duration-500 transform group-hover/trigger:rotate-12">
                                        {faq.icon}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-500/60 group-hover/trigger:text-orange-600">
                                            {faq.category}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-black text-black tracking-tight leading-tight">
                                            {faq.question}
                                        </h3>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-8">
                                <div className="pl-[4.5rem] pr-4">
                                    <div className="w-12 h-1 bg-orange-100 mb-6 rounded-full group-hover:w-20 transition-all duration-500"></div>
                                    <p className="text-gray-500 font-medium leading-relaxed text-base mb-8">
                                        {faq.answer}
                                    </p>

                                    <a
                                        href={`https://wa.me/573116300848?text=${encodeURIComponent(`Hola SIPRAC, tengo una duda sobre: ${faq.question}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 bg-orange-50 text-orange-500 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
                                    >
                                        Consúltanos por WhatsApp <ArrowRight className="size-3" />
                                    </a>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Background decorative touches */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50/20 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
        </section>
    )
}

export default DetailedFAQ
