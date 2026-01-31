"use client";

import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({
  target,
  duration = 1500,
}: {
  target: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const targetNum = parseInt(target);
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed) {
          setHasPlayed(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  useEffect(() => {
    if (!hasPlayed) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeProgress * targetNum);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasPlayed, targetNum, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const stats = [
    { number: "100+", label: "Proyectos Completados" },
    { number: "50+", label: "Clientes Satisfechos" },
    { number: "15+", label: "Años de Experiencia" },
  ];

  return (
    <section
      id="inicio"
      className="pt-32 pb-16 md:pt-48 md:pb-24 bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
      }}
    >
      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/80 via-black/75 to-black/70" />

      {/* Blur overlay - separate layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(8px)",
          opacity: 0.7,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Headline */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-2xl">
            SERVICIO INTEGRAL EN <br className="hidden md:block" />
            <span className="text-orange-500">PREVENCIÓN DE RIESGOS</span>{" "}
            <br className="hidden md:block" />
            LABORALES, MEDIO AMBIENTE Y CALIDAD
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium drop-shadow-lg">
            Especialistas en Sistemas de Gestión Integrados (SGI) con enfoque en
            mejora continua y cumplimiento normativo para su organización.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#servicios"
              className="text-white font-bold hover:text-orange-400 transition-colors drop-shadow-lg"
            >
              Nuestros Servicios
            </a>
            <a
              href="/contact"
              className="bg-orange-500 border-2 border-orange-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 hover:border-orange-600 transition-all shadow-lg hover:shadow-orange-500/50"
            >
              Contactar Ahora
            </a>
          </div>
        </div>

        {/* Stats - Original Style */}
        <div className="mt-24 border-t border-white/20 pt-16">
          <p className="text-center text-white text-xs font-black uppercase tracking-[0.3em] mb-12 drop-shadow-lg">
            Nuestra Trayectoria
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-32">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:text-orange-500/80 transition-colors duration-500 min-w-[120px] drop-shadow-2xl">
                  <AnimatedCounter target={stat.number} />
                </div>
                <div className="text-[10px] md:text-xs text-gray-200 uppercase tracking-[0.2em] font-black drop-shadow-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
