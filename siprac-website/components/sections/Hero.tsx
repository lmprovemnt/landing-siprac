const Hero = () => {
    const stats = [
        { number: '100+', label: 'Proyectos Completados' },
        { number: '50+', label: 'Clientes Satisfechos' },
        { number: '15+', label: 'Años de Experiencia' },
    ]

    return (
        <section
            id="inicio"
            className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-orange-50 to-yellow-50"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        SERVICIO INTEGRAL EN{' '}
                        <span className="text-primary-orange relative">
                            PREVENCIÓN DE RIESGOS
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-60 -z-10"></span>
                        </span>{' '}
                        LABORALES, MEDIO AMBIENTE Y CALIDAD
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        Especialistas en Sistemas de Gestión Integrados (SGI) con enfoque en mejora continua
                        y cumplimiento normativo para su organización.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#servicios"
                            className="btn bg-primary-orange text-white px-8 py-3 rounded hover:bg-transparent hover:text-primary-orange hover:border-2 hover:border-primary-orange transition-all"
                        >
                            Nuestros Servicios
                        </a>
                        <a
                            href="/contact"
                            className="btn bg-transparent text-primary-orange border-2 border-primary-orange px-8 py-3 rounded hover:bg-primary-orange hover:text-white transition-all"
                        >
                            Contactar Ahora
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero