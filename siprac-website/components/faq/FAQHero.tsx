'use client'

import React from 'react'

const FAQHero = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50/50 to-white text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 mb-8 tracking-tight">
                    Preguntas Frecuentes
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                    Encuentre respuestas detalladas sobre nuestros procesos de consultoría,
                    tiempos de implementación y el valor agregado de SIPRAC.
                </p>
                <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-12 rounded-full opacity-20"></div>
            </div>
        </section>
    );
};

export default FAQHero;
