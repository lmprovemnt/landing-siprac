import React from "react";
import {
  FileText,
  Gavel,
  Scale,
  Copyright,
  AlertTriangle,
  ShieldCheck,
  HelpCircle,
  Handshake,
  Globe2,
} from "lucide-react";

export default function TermsContent() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[inset_6px_6px_12px_#d1cfcc,inset_-6px_-6px_12px_#ffffff] border border-white/10 text-orange-500">
            <Gavel className="size-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter uppercase">
            Términos de Uso
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">
            Condiciones de Servicio y Navegación - SIPRAC
          </p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="bg-[#FAF9F6] rounded-[2.5rem] p-8 md:p-16 shadow-[20px_20px_40px_#d1cfcc,-20px_-20px_40px_#ffffff] border border-white/50 space-y-12">
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Handshake className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                1. Relación Contractual
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              Los presentes Términos de Uso regulan el acceso y la utilización
              del sitio web{" "}
              <span className="text-black font-bold">siprac.com</span> y de
              todos los servicios digitales proporcionados por SIPRAC. Al
              utilizar esta plataforma, usted reconoce haber leído, comprendido
              y aceptado en su totalidad estas disposiciones legales.
            </p>
            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 flex gap-4 items-start">
              <AlertTriangle className="size-6 text-orange-600 shrink-0 mt-1" />
              <p className="text-sm font-bold text-gray-700 leading-relaxed uppercase tracking-wide">
                Si usted no está de acuerdo con estos términos, debe cesar
                inmediatamente el uso de la plataforma. El uso continuado
                implica una declaración de voluntad vinculante.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Globe2 className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                2. Acceso y Uso del Sitio
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              SIPRAC otorga una licencia limitada, no exclusiva y revocable para
              acceder y hacer uso personal y comercial de acuerdo a los fines de
              consultoría de la plataforma. Queda estrictamente prohibido:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Extraer datos mediante scraping o robots sin autorización previa por escrito.",
                "Utilizar la plataforma para enviar spam o comunicaciones no solicitadas.",
                "Intentar vulnerar las medidas de seguridad del servidor.",
                "Suplantar la identidad de otros usuarios o representantes legales de SIPRAC.",
                "Cargar malware, virus o cualquier código de naturaleza destructiva.",
                "Utilizar el contenido del sitio para alimentar modelos de IA sin permiso.",
              ].map((forbidden, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-[#FAF9F6] rounded-xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff]"
                >
                  <span className="text-red-500 font-black text-lg leading-none">
                    ×
                  </span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    {forbidden}
                  </span>
                </div>
              ))}
            </div>
          </section>{" "}
          section
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Copyright className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                3. Derechos de Propiedad Intelectual
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              Todo el material audiovisual, metodologías de diagnóstico,
              esquemas de auditoría, herramientas de cálculo de riesgo y diseños
              de interfaz neumórfica son propiedad intelectual protegida de
              SIPRAC.
            </p>
            <p className="text-gray-600 font-medium leading-relaxed">
              La reproducción, distribución, comunicación pública o
              transformación de cualquier contenido del sitio sin la
              autorización expresa de los titulares de los derechos constituye
              una violación de la legislación sobre propiedad intelectual
              colombiana.
            </p>
          </section>
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <ShieldCheck className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                4. Exención de Responsabilidad Técnica
              </h2>
            </div>
            <div className="p-8 bg-[#FAF9F6] rounded-[2rem] shadow-[inset_10px_10px_20px_#d1cfcc,inset_-10px_-10px_20px_#ffffff]">
              <p className="text-gray-600 font-medium leading-relaxed mb-4">
                Las herramientas de diagnóstico preliminar en línea son ayudas
                didácticas e informativas. SIPRAC NO garantiza que los
                resultados obtenidos a través de los formularios web por sí
                solos certifiquen el cumplimiento legal de su empresa ante el
                Ministerio de Trabajo u otros entes de control.
              </p>
              <p className="text-gray-600 font-medium leading-relaxed font-bold">
                La consultoría formal requiere de una validación documental y
                técnica en sitio por parte de nuestros profesionales titulados.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <AlertTriangle className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                5. Modificaciones a los Términos
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              SIPRAC se reserva el derecho de modificar estos términos en
              cualquier momento según las evoluciones normativas en Colombia.
              Los cambios serán efectivos desde su publicación en el sitio web.
              Le recomendamos revisar periódicamente esta sección para estar al
              tanto de las condiciones vigentes.
            </p>
          </section>
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <HelpCircle className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                6. Resolución de Conflictos
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              Cualquier reclamo o disputa legal relacionada con el uso de este
              sitio web se regirá por las leyes de la República de Colombia. Las
              partes acuerdan someterse a la jurisdicción exclusiva de los
              tribunales de Medellín, Antioquia, renunciando expresamente a
              cualquier otro fuero que pudiera corresponderles por razón de su
              domicilio presente o futuro.
            </p>
          </section>
          {/* Final Note */}
          <div className="pt-10 border-t border-gray-200/50 text-center flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <Scale className="size-4 text-orange-200" />
              <FileText className="size-4 text-orange-200" />
              <ShieldCheck className="size-4 text-orange-200" />
            </div>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">
              Vigente desde el 31 de Enero de 2026. <br />
              SIPRAC - Sistemas de Gestión con Excelencia Operacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
