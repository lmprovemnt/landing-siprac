"use client";

import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, duration = 1500 }: { target: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const targetNum = parseInt(target);
    const suffix = target.replace(/[0-9]/g, '');

    useEffect(() => {
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease out quad function for smoother deceleration
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            const currentCount = Math.floor(easeProgress * targetNum);

            if (currentCount !== countRef.current) {
                countRef.current = currentCount;
                setCount(currentCount);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [targetNum, duration]);

    return (
        <>
            {count}{suffix}
        </>
    );
};

const Hero = () => {
    const stats = [
        { number: '100+', label: 'Proyectos Completados' },
        { number: '50+', label: 'Clientes Satisfechos' },
        { number: '15+', label: 'Años de Experiencia' },
    ]

    return (
        <section
            id="inicio"
            className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#FAF9F6]"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight text-black leading-tight">
                        SERVICIO INTEGRAL EN <br className="hidden md:block" />
                        <span className="text-orange-500">PREVENCIÓN DE RIESGOS</span> <br className="hidden md:block" />
                        LABORALES, MEDIO AMBIENTE Y CALIDAD
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto font-medium">
                        Especialistas en Sistemas de Gestión Integrados (SGI) con enfoque en mejora continua
                        y cumplimiento normativo para su organización.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="#servicios"
                            className="text-black font-bold hover:text-orange-500 transition-colors"
                        >
                            Nuestros Servicios
                        </a>
                        <a
                            href="/contact"
                            className="bg-white border-2 border-orange-500 text-orange-500 px-10 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-orange-200"
                        >
                            Contactar Ahora
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-24 border-t border-gray-100 pt-16">
                    <p className="text-center text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-12">Nuestra Trayectoria</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-32">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-5xl md:text-7xl font-black text-[#D1D1D1]/30 mb-2 group-hover:text-orange-500/20 transition-colors duration-500 min-w-[120px]">
                                    <AnimatedCounter target={stat.number} />
                                </div>
                                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-black">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;