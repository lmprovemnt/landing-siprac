import ServicesHero from '@/components/services/ServicesHero'
import CoreAdvisory from '@/components/services/CoreAdvisory'
import DetailedServices from '@/components/services/DetailedServices'
import ValuedAudits from '@/components/services/ValuedAudits'
import CTA from '@/components/sections/CTA'
import Benefits from '@/components/sections/Benefits'

export const metadata = {
    title: 'Nuestros Servicios | SIPRAC - Prevención de Riesgos',
    description: 'Conozca en detalle nuestro portafolio de servicios en SST, Gestión Ambiental, Calidad ISO 9001 y Auditorías Integrales.',
}

const ServicesPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ServicesHero />
            <CoreAdvisory />
            <DetailedServices />
            <ValuedAudits />
            <Benefits />
            <div className="bg-[#FAF9F6]">
                <CTA />
            </div>
        </div>
    )
}

export default ServicesPage
