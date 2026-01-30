import { Eye, Target } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Brindar soluciones integrales en consultoría y asesoría para la implementación, auditoría y mejora de sistemas de gestión, garantizando el cumplimiento normativo y el desarrollo sostenible de las organizaciones.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                            <Eye className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser la firma de consultoría líder en la región, reconocida por la excelencia en la prestación de servicios, la innovación y el compromiso con la mejora continua de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
