import { Handshake, Award, ShieldCheck, Lightbulb, Leaf } from "lucide-react";

const values = [
    {
        name: "Compromiso",
        description: "Trabajamos con responsabilidad y dedicación para cumplir con las expectativas de nuestros clientes.",
        icon: Handshake
    },
    {
        name: "Excelencia",
        description: "Buscamos la mejora continua en todos nuestros servicios para garantizar la calidad.",
        icon: Award
    },
    {
        name: "Integridad",
        description: "Actuamos con transparencia, ética y respeto en todas nuestras actividades.",
        icon: ShieldCheck
    },
    {
        name: "Innovación",
        description: "Aplicamos soluciones innovadoras y tecnológicas en nuestros procesos de consultoría.",
        icon: Lightbulb
    },
    {
        name: "Sostenibilidad",
        description: "Promovemos la gestión responsable de los recursos y el desarrollo sostenible.",
        icon: Leaf
    }
];

export default function CorporateValues() {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Valores Corporativos</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <div key={value.name} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <value.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.name}</h3>
                            <p className="text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
