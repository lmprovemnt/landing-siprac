import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import WhatsappButton from '@/components/shared/WhatsappButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: "SIPRAC | Servicios Integrales en Prevención de Riesgos",
  description:
    "Consultoría experta en SST, Medio Ambiente y Calidad. Implementamos sistemas de gestión integrados que transforman el cumplimiento normativo en excelencia operativa.",
  keywords: [
    "SST",
    "prevención de riesgos",
    "gestión ambiental",
    "ISO 9001",
    "consultoría HSEQ",
    "RUC",
    "PESV",
    "seguridad vial",
    "Sistemas de Gestión Integrados",
  ],
  authors: [{ name: "SIPRAC" }],
  openGraph: {
    title: "SIPRAC - Expertos en Prevención de Riesgos y Gestión Integral",
    description:
      "Consultoría especializada en la implementación, auditoría y mejora de sistemas de gestión normativos.",
    url: "https://siprac.com",
    siteName: "SIPRAC",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/logo-siprac.jpg",
        width: 1200,
        height: 630,
        alt: "SIPRAC - Gestión Integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIPRAC - Prevención de Riesgos y Gestión Integral",
    description:
      "Transformamos el cumplimiento normativo en ventaja competitiva para su organización.",
    images: ["/images/logo-siprac.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} `}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  )
}