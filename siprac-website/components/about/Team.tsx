import { Mail } from "lucide-react";

const team = [
    {
        name: "NINI JOHANA GUTIÉRREZ CÁRDENAS",
        role: "Gerente",
        title: "Profesional en Seguridad y Salud en el Trabajo",
        description: "Lidera la firma con una sólida trayectoria en consultoría empresarial y enfoque estratégico. Amplia experiencia en implementación de sistemas de gestión.",
        email: "gerencia@siprac.com"
    },
    {
        name: "MICHEL DAYANA ORTEGA",
        role: "Analista en SST",
        title: "Tecnóloga en Seguridad y Salud en el Trabajo",
        description: "Especializada en Seguridad y Salud en el Trabajo (SST), con experiencia en la implementación y seguimiento de sistemas de gestión.",
        email: "analista@siprac.com"
    }
];

export default function Team() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Nuestro Equipo</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Nuestro equipo está conformado por profesionales comprometidos y altamente capacitados. Juntas, impulsan soluciones efectivas adaptadas a las necesidades de cada cliente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {team.map((member) => (
                        <div key={member.name} className="bg-gray-50 rounded-2xl p-8 transition-transform hover:-translate-y-1">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                                {member.name.charAt(0)}
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                                <p className="text-sm text-gray-500 mt-1">{member.title}</p>
                                <p className="mt-4 text-gray-600">{member.description}</p>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    {member.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
