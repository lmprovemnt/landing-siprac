"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    const faqs = [
        {
            question: "¿SIPRAC emite certificaciones ISO?",
            answer: "No, somos consultores expertos. Preparamos y auditamos su sistema para que cumpla con todos los requisitos necesarios para obtener la certificación ante un ente oficial."
        },
        {
            question: "¿Cuánto tiempo toma implementar un sistema de gestión?",
            answer: "El tiempo varía según el tamaño y la complejidad de la organización, estimando un periodo de entre 6 meses y 1 año."
        },
        {
            question: "¿Qué incluyen sus servicios de auditoría?",
            answer: "Evaluamos a fondo sus procesos, identificamos brechas de cumplimiento y entregamos un plan de acción detallado para la mejora funcional del sistema."
        },
        {
            question: "¿Es necesario tener conocimiento previo en normas para contratarlos?",
            answer: "No. Nosotros diseñamos el sistema desde cero, adaptándolo 100% a la realidad y operación actual de su negocio; al igual que orientando al cumplimiento solicitado por ministerio de trabajo."
        },
        {
            question: "¿Brindan soporte después de la implementación?",
            answer: "Sí, ofrecemos servicios de mantenimiento y auditorías internas periódicas para asegurar que el sistema evolucione y se mantenga eficiente."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="mb-16">
                    <h2 className="text-4xl font-black text-black mb-3">Preguntas Frecuentes</h2>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest opacity-60">Resolvemos tus dudas principales</p>
                    <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="text-left">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border border-gray-100 rounded-3xl px-8 bg-[#FAF9F6]/50 hover:bg-white transition-colors overflow-hidden"
                            >
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <span className="font-black text-black text-sm md:text-base text-left pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-gray-500 font-medium leading-relaxed pb-8">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
