const CompanyIntro = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-[#e67e22] mb-4">Nuestra Empresa</h2>
                        <div className="w-20 h-1 bg-orange-500 mb-8"></div>
                        <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
                            <p>
                                Somos una empresa especializada en la asesoría y consultoría en
                                Sistemas de Gestión Integrados (SGI), con un enfoque en la
                                mejora continua y cumplimiento normativo. Nuestro equipo de
                                expertos cuenta con amplia experiencia en la implementación,
                                auditoría y optimización de sistemas de gestión en diversas
                                industrias.
                            </p>
                            <p>
                                En un entorno empresarial cada vez más exigente, nuestra firma
                                nace con el propósito de acompañar a las organizaciones en el
                                fortalecimiento de sus sistemas de gestión. A través de soluciones
                                integrales en consultoría y asesoría, buscamos impulsar el
                                cumplimiento normativo, la eficiencia operativa y la sostenibilidad.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/images/about/nuestra-empresa.jpg"
                                alt="Siprac Oficina"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                                    Nuestras Instalaciones
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;
