import { CheckCircle2 } from "lucide-react";

const objectives = [
    {
        title: "Calidad en Servicios",
        description: "Proporcionar servicios de consultoría de alta calidad que contribuyan al cumplimiento normativo y la eficiencia operativa de nuestros clientes."
    },
    {
        title: "Cultura de Mejora Continua",
        description: "Fomentar una cultura de mejora continua en las organizaciones mediante la implementación de buenas prácticas en gestión."
    },
    {
        title: "Sostenibilidad y Seguridad",
        description: "Promover la sostenibilidad y la seguridad en los entornos laborales a través de estrategias innovadoras y efectivas."
    },
    {
        title: "Relación con Clientes",
        description: "Fortalecer la confianza y relación con nuestros clientes mediante un servicio profesional y personalizado."
    }
];

export default function CorporateObjectives() {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Objetivos Corporativos</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {objectives.map((obj) => (
                        <div key={obj.title} className="flex gap-4">
                            <div className="flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{obj.title}</h3>
                                <p className="text-gray-600">{obj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
