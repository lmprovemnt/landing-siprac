"use client";
import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "¿Cuál es el tiempo de respuesta para consultas?",
            answer: "Nuestro equipo se compromete a responder todas las consultas en un plazo máximo de 24 horas hábiles."
        },
        {
            question: "¿Ofrecen servicios virtuales?",
            answer: "Sí, contamos con una plataforma robusta para asesorías, auditorías y capacitaciones en modalidad 100% virtual para todo el país."
        },
        {
            question: "¿Cuál es el costo de una consultoría inicial?",
            answer: "La primera sesión de diagnóstico y acercamiento no tiene costo. Basado en ella, elaboramos una propuesta técnica y económica a la medida."
        }
    ];

    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-black mb-2">Preguntas Frecuentes</h2>
                    <div className="w-16 h-1 bg-orange-500 mx-auto mt-6"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-black text-sm md:text-base">{faq.question}</span>
                                <i className={`fas fa-chevron-down text-orange-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 pb-6 text-sm text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
