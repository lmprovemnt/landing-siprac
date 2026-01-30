const MissionVision = () => {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Mission */}
                    <div className="bg-[#FAF9F6] rounded-[3rem] p-16 shadow-[inset_15px_15px_30px_#d1cfcc,inset_-15px_-15px_30px_#ffffff] transition-all duration-500 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-12 shadow-[inset_10px_10px_20px_#d1cfcc,inset_-10px_-10px_20px_#ffffff] transition-all duration-500 border border-white/10 group-hover:text-orange-500">
                            <i className="fas fa-bullseye text-3xl transition-colors duration-500"></i>
                        </div>
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter uppercase group-hover:text-orange-600 transition-colors duration-500">Nuestra Misión</h2>
                        <p className="text-gray-500 font-bold leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                            Brindar soluciones integrales en consultoría y asesoría para la
                            implementación, auditoría y mejora de sistemas de gestión, garantizando
                            el cumplimiento normativo y el desarrollo sostenible de las
                            organizaciones.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-[#FAF9F6] rounded-[3rem] p-16 shadow-[inset_15px_15px_30px_#d1cfcc,inset_-15px_-15px_30px_#ffffff] transition-all duration-500 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-12 shadow-[inset_10px_10px_20px_#d1cfcc,inset_-10px_-10px_20px_#ffffff] transition-all duration-500 border border-white/10 group-hover:text-orange-500">
                            <i className="fas fa-eye text-3xl transition-colors duration-500"></i>
                        </div>
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter uppercase group-hover:text-orange-600 transition-colors duration-500">Nuestra Visión</h2>
                        <p className="text-gray-500 font-bold leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
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
