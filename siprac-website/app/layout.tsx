import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
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
  title: 'SIPRAC | Servicios Integrales en Prevención de Riesgos',
  description: 'SIPRAC - Servicio Integral en Prevención de Riesgos Laborales, Medio Ambiente y Calidad. Consultoría especializada en Sistemas de Gestión Integrados.',
  keywords: 'SIPRAC, prevención de riesgos, gestión ambiental, SST, consultoría, ISO 9001, seguridad laboral'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} `}>
      <head>
        <link rel="icon" href="/favicon.ico" />
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