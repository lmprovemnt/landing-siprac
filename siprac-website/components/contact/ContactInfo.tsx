export default function ContactInfo() {
    const infoCards = [
        {
            title: "Teléfonos",
            icon: "fas fa-phone",
            items: [
                "311 630 0848",
                "315 437 6818",
                "315 865 3629"
            ],
            footer: "Llamadas y WhatsApp disponibles"
        },
        {
            title: "Correos Electrónicos",
            icon: "fas fa-envelope",
            items: [
                "sipracsiprac@gmail.com",
                "asesordegestion.sst@gmail.com",
                "siprac.dou001@gmail.com"
            ],
            footer: "Respondemos en menos de 24 horas"
        },
        {
            title: "WhatsApp",
            icon: "fab fa-whatsapp",
            content: "Comuníquese directamente por WhatsApp para una respuesta rápida",
            button: {
                text: "Escribir por WhatsApp",
                color: "bg-[#25D366]"
            }
        },
        {
            title: "Horario de Atención",
            icon: "fas fa-clock",
            details: [
                { label: "Lunes - Viernes", value: "8:00 AM - 6:00 PM" },
                { label: "Sábados", value: "9:00 AM - 1:00 PM" },
                { label: "Emergencias", value: "24/7" }
            ],
            footer: "Servicio de urgencias disponible"
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {infoCards.map((card, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-orange-500 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-orange-50 flex items-center justify-center rounded-full mb-6">
                                <i className={`${card.icon} text-orange-500 text-xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-6">{card.title}</h3>

                            {card.items && (
                                <div className="space-y-3 w-full mb-6">
                                    {card.items.map((item, i) => (
                                        <div key={i} className="bg-[#FAF9F6] py-3 px-4 rounded-lg text-sm text-gray-700 font-medium">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {card.content && (
                                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                    {card.content}
                                </p>
                            )}

                            {card.button && (
                                <button className={`${card.button.color} text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity mb-6`}>
                                    <i className="fab fa-whatsapp text-lg"></i>
                                    {card.button.text}
                                </button>
                            )}

                            {card.details && (
                                <div className="space-y-4 w-full mb-6 text-left">
                                    {card.details.map((detail, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-black">{detail.label}:</span>
                                            <span className="text-gray-600 font-medium">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {card.footer && (
                                <p className="text-xs text-gray-400 italic">
                                    {card.footer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
