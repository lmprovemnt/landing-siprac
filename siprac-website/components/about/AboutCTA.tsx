import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutCTA() {
    return (
        <section className="py-20 bg-blue-600">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    ¿Listo para optimizar sus sistemas de gestión?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Contáctenos hoy mismo para una consultoría gratuita y descubra cómo podemos ayudarle a alcanzar sus objetivos.
                </p>
                <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700"
                >
                    <Link href="/contact">
                        Agendar Consulta
                    </Link>
                </Button>
            </div>
        </section>
    );
}
