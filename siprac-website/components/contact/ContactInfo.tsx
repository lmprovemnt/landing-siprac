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
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {infoCards.map((card, idx) => (
                        <div key={idx} className="bg-[#FAF9F6] rounded-[2.5rem] p-12 shadow-[inset_12px_12px_24px_#d1cfcc,inset_-12px_-12px_24px_#ffffff] transition-all duration-500 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mb-8 shadow-[inset_6px_6px_12px_#d1cfcc,inset_-6px_-6px_12px_#ffffff] border border-white/10 group-hover:text-orange-500 transition-colors duration-500 text-gray-400">
                                <i className={`${card.icon} text-2xl`}></i>
                            </div>
                            <h3 className="text-2xl font-black text-black mb-8 tracking-tight uppercase group-hover:text-orange-600 transition-colors duration-500">{card.title}</h3>

                            {card.items && (
                                <div className="space-y-4 w-full mb-8">
                                    {card.items.map((item, i) => (
                                        <div key={i} className="bg-[#FAF9F6] py-4 px-6 rounded-2xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] text-xs text-gray-700 font-bold uppercase tracking-widest border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {card.content && (
                                <p className="text-[11px] font-extrabold text-gray-500 leading-relaxed uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity mb-8">
                                    {card.content}
                                </p>
                            )}

                            {card.button && (
                                <a
                                    href="https://wa.me/573116300848"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${card.button.color} text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:scale-105 transition-transform mb-8 shadow-lg`}
                                >
                                    <i className="fab fa-whatsapp text-lg"></i>
                                    {card.button.text}
                                </a>
                            )}

                            {card.details && (
                                <div className="space-y-5 w-full mb-8 text-left">
                                    {card.details.map((detail, i) => (
                                        <div key={i} className="flex justify-between items-center bg-[#FAF9F6] p-4 rounded-xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] border border-white/5">
                                            <span className="text-[10px] font-black text-black uppercase tracking-wider">{detail.label}:</span>
                                            <span className="text-[11px] text-gray-600 font-bold uppercase">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {card.footer && (
                                <p className="text-[10px] text-gray-400 font-bold italic uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
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
