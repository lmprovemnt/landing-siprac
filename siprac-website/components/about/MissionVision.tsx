const MissionVision = () => {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Mission */}
                    <div className="bg-white rounded-3xl p-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border-t-[6px] border-orange-500 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 text-3xl">
                                <i className="fas fa-bullseye"></i>
                            </div>
                        </div>
                        <h2 className="text-3xl font-extrabold text-black mb-8">Nuestra Misión</h2>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Brindar soluciones integrales en consultoría y asesoría para la
                            implementación, auditoría y mejora de sistemas de gestión, garantizando
                            el cumplimiento normativo y el desarrollo sostenible de las
                            organizaciones.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-3xl p-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border-t-[6px] border-orange-500 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-500 text-3xl">
                                <i className="fas fa-eye"></i>
                            </div>
                        </div>
                        <h2 className="text-3xl font-extrabold text-black mb-8">Nuestra Visión</h2>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Ser la firma de consultoría líder en la región, reconocida por la excelencia
                            en la prestación de servicios, la innovación y el compromiso con la
                            mejora continua de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
