export default function ContactForm() {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-16">
                    <h2 className="text-3xl font-bold text-black mb-2">Envíenos un Mensaje</h2>
                    <p className="text-gray-500 mb-12 text-sm font-medium">Complete el formulario y nos pondremos en contacto con usted</p>

                    <h3 className="text-xl font-bold text-black mb-8">Contáctenos</h3>

                    <form className="space-y-6 text-left">
                        <div className="relative">
                            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"></i>
                            <input
                                type="text"
                                placeholder="Nombre Completo *"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <i className="fas fa-building absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"></i>
                            <input
                                type="text"
                                placeholder="Empresa / Organización"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            />
                        </div>

                        <div className="relative">
                            <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"></i>
                            <input
                                type="tel"
                                placeholder="Teléfono *"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"></i>
                            <input
                                type="email"
                                placeholder="Correo Electrónico *"
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <i className="fas fa-list absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"></i>
                            <select className="w-full pl-12 pr-10 py-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none appearance-none cursor-pointer transition-all">
                                <option>Seleccione el asunto</option>
                                <option>SST</option>
                                <option>Medio Ambiente</option>
                                <option>Calidad</option>
                                <option>Otros</option>
                            </select>
                            <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none"></i>
                        </div>

                        <div className="relative">
                            <i className="fas fa-plus-circle absolute left-4 top-6 text-orange-500"></i>
                            <textarea
                                placeholder="Mensaje Detallado *"
                                rows={4}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        <div className="space-y-4 pt-4">
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" required />
                                <span className="text-xs text-gray-500 font-medium leading-relaxed">
                                    Acepto la <span className="text-orange-500 hover:underline">Política de Privacidad</span> y autorizo el tratamiento de mis datos personales *
                                </span>
                            </label>

                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                <span className="text-xs text-gray-500 font-medium leading-relaxed">
                                    Deseo recibir información sobre servicios, ofertas y novedades de SIPRAC
                                </span>
                            </label>
                        </div>

                        <div className="pt-6">
                            <button className="w-full bg-orange-500 text-white py-4 rounded-full font-bold shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                                <i className="fas fa-paper-plane"></i>
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
