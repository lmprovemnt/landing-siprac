const teamMembers = [
    {
        name: "NINI JOHANA GUTIÉRREZ CÁRDENAS",
        role: "Gerente",
        specialty: "Profesional en Seguridad y Salud en el Trabajo",
        description: "Lidera la firma con una sólida trayectoria en consultoría empresarial y enfoque estratégico. Amplia experiencia en implementación de sistemas de gestión.",
        icon: "fa-user-tie"
    },
    {
        name: "MICHEL DAYANA ORTEGA",
        role: "Analista en SST",
        specialty: "Tecnóloga en Seguridad y Salud en el Trabajo",
        description: "Especializada en Seguridad y Salud en el Trabajo (SST), con experiencia en la implementación y seguimiento de sistemas de gestión.",
        icon: "fa-user-md"
    }
]

const Team = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-[#e67e22] mb-4">Nuestro Equipo</h2>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Profesionales comprometidos y altamente capacitados</p>
                    <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
                </div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-[#FAF9F6] rounded-3xl overflow-hidden shadow-sm border border-orange-50 hover:shadow-lg transition-all duration-500 group">
                            <div className="md:w-1/4 bg-[#FAF3E9] flex items-center justify-center py-12 px-8">
                                <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center text-white text-5xl shadow-xl group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                                    <i className={`fas ${member.icon} relative z-10`}></i>
                                </div>
                            </div>
                            <div className="md:w-3/4 p-12 bg-white flex flex-col justify-center">
                                <h3 className="text-2xl font-black text-black mb-2 tracking-tight">{member.name}</h3>
                                <p className="text-orange-500 font-bold mb-2 uppercase text-sm tracking-wide">{member.role}</p>
                                <p className="text-[#e67e22] font-extrabold mb-8 italic text-xs">{member.specialty}</p>

                                <div className="w-full h-px bg-gray-100 mb-8"></div>

                                <p className="text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl">
                                    {member.description}
                                </p>

                                <button className="flex items-center gap-3 text-orange-500 font-bold bg-orange-50 px-6 py-3 rounded-xl w-fit hover:bg-orange-500 hover:text-white transition-all duration-300">
                                    <i className="fas fa-envelope"></i>
                                    Email
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Summary Box */}
                <div className="max-w-4xl mx-auto mt-20">
                    <div className="bg-[#FAF3E9] rounded-2xl p-12 border-l-[6px] border-orange-500 text-center shadow-sm">
                        <p className="text-gray-600 font-bold leading-relaxed text-lg">
                            Nuestro equipo está conformado por profesionales comprometidos y altamente
                            capacitados. Juntos, impulsan soluciones efectivas adaptadas a las necesidades de
                            cada cliente. Su combinación de liderazgo, conocimiento técnico y vocación de
                            servicio garantiza resultados de calidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
