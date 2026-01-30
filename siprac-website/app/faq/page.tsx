import FAQHero from '@/components/faq/FAQHero'
import DetailedFAQ from '@/components/faq/DetailedFAQ'
import CTA from '@/components/sections/CTA'

export const metadata = {
    title: 'Preguntas Frecuentes | SIPRAC - Prevención de Riesgos',
    description: 'Encuentre respuestas a sus dudas sobre certificaciones ISO, tiempos de implementación y auditorías de sistemas de gestión.',
}

const FAQPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <FAQHero />
            <DetailedFAQ />
            <div className="bg-[#FAF9F6]">
                <CTA />
            </div>
        </div>
    );
};

export default FAQPage;
