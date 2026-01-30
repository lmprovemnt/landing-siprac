import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl shadow-orange-100/50 border border-orange-50 flex flex-col items-center max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-orange-500 mb-6 leading-tight tracking-tighter">
                        ¿Listo para transformar su organización?
                    </h2>
                    <p className="text-gray-500 font-bold mb-12 text-sm md:text-xl uppercase tracking-widest opacity-80">
                        Solicite una consultoría gratuita hoy mismo
                    </p>

                    <Button asChild size="lg" className="h-16 px-12 rounded-full font-black text-lg shadow-2xl shadow-orange-200/50 hover:shadow-orange-300/60 transition-all hover:-translate-y-1">
                        <Link href="/contact" className="flex items-center gap-3">
                            <Calendar className="size-6" />
                            Solicitar Consultoría Gratuita
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
