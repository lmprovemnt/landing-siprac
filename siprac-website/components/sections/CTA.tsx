import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[2rem] p-12 md:p-20 text-center shadow-sm border border-orange-100 flex flex-col items-center max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6 leading-tight">
                        ¿Listo para transformar su organización?
                    </h2>
                    <p className="text-gray-500 font-medium mb-12 text-sm md:text-lg">
                        Solicite una consultoría gratuita y descubra cómo podemos ayudarle
                    </p>

                    <Link
                        href="/contact"
                        className="bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-sm md:text-base flex items-center gap-3 hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 group"
                    >
                        <i className="fas fa-calendar-alt transition-transform group-hover:scale-110"></i>
                        Solicitar Consultoría Gratuita
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
