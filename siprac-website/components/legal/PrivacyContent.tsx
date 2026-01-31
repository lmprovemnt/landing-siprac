import React from "react";
import {
  Shield,
  Lock,
  FileText,
  CheckCircle2,
  Info,
  Eye,
  Database,
  Globe,
  UserCheck,
} from "lucide-react";

export default function PrivacyContent() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[inset_6px_6px_12px_#d1cfcc,inset_-6px_-6px_12px_#ffffff] border border-white/10 text-orange-500">
            <Shield className="size-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tighter uppercase">
            Políticas de Privacidad
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">
            Tratamiento de Datos Personales - SIPRAC
          </p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="bg-[#FAF9F6] rounded-[2.5rem] p-8 md:p-16 shadow-[20px_20px_40px_#d1cfcc,-20px_-20px_40px_#ffffff] border border-white/50 space-y-12">
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Lock className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                1. Identificación del Responsable
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              <span className="text-black font-bold">
                SIPRAC (Servicios Integrales en Prevención de Riesgos y Gestión)
              </span>
              , identificada con las normativas legales vigentes en Colombia y
              con domicilio principal en Medellín, es la entidad responsable del
              tratamiento de sus datos personales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF9F6] rounded-xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] flex flex-col gap-1">
                <span className="text-[10px] font-black text-orange-500 uppercase">
                  Correo Electrónico
                </span>
                <span className="text-sm font-bold text-gray-700 select-all">
                  sipracsiprac@gmail.com
                </span>
              </div>
              <div className="p-4 bg-[#FAF9F6] rounded-xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff] flex flex-col gap-1">
                <span className="text-[10px] font-black text-orange-500 uppercase">
                  Teléfono de Contacto
                </span>
                <span className="text-sm font-bold text-gray-700 select-all">
                  +57 311 630 0848
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Database className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                2. Categoría de Datos recolectados
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              A través de nuestras plataformas digitales y procesos de
              consultoría, recolectamos y tratamos las siguientes categorías de
              datos:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Datos de Identificación",
                  desc: "Nombres, apellidos, número de identificación y enlaces a perfiles corporativos.",
                },
                {
                  title: "Datos de Contacto",
                  desc: "Direcciones de correo electrónico corporativo y personal, números telefónicos y dirección física.",
                },
                {
                  title: "Información Operativa",
                  desc: "Datos sobre el sector económico, número de empleados, niveles de riesgo ARL y estado de sistemas de gestión.",
                },
                {
                  title: "Información Técnica",
                  desc: "Dirección IP, tipo de dispositivo y datos de navegación mediante cookies para mejorar la experiencia.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-5 bg-[#FAF9F6] rounded-2xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff]"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                  <div>
                    <h4 className="text-xs font-black text-black uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <FileText className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                3. Finalidad Extendida del Tratamiento
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              Bajo la Ley 1581 de 2012, sus datos serán utilizados con las
              siguientes finalidades comerciales y técnicas:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Desarrollo de auditorías internas y diagnósticos de cumplimiento normativo.",
                "Personalización de planes de capacitación en Seguridad y Salud en el Trabajo.",
                "Envío de boletines informativos sobre cambios en la legislación HSEQ y ambiental.",
                "Gestión de cobro y facturación de servicios de consultoría.",
                "Verificación de antecedentes ante proveedores y entidades de control.",
                "Soporte técnico y mantenimiento preventivo de sistemas implementados.",
                "Análisis de Big Data para tendencias de riesgos laborales en el sector.",
                "Gestión de procesos de selección y vinculación de consultores externos.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-[#FAF9F6] p-4 rounded-xl shadow-[inset_4px_4px_8px_#d1cfcc,inset_-4px_-4px_8px_#ffffff]"
                >
                  <CheckCircle2 className="size-4 text-orange-500 mt-1 shrink-0" />
                  <span className="text-[10px] font-bold text-gray-700 uppercase leading-tight tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Eye className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                4. Uso de Cookies y Tecnologías de Rastreo
              </h2>
            </div>
            <div className="p-6 bg-[#FAF9F6] rounded-2xl shadow-[inset_6px_6px_12px_#d1cfcc,inset_-6px_-6px_12px_#ffffff]">
              <p className="text-gray-600 font-medium leading-relaxed mb-4">
                Nuestro sitio web utiliza cookies para optimizar la velocidad de
                carga y analizar de forma anónima el comportamiento de los
                usuarios. Estas tecnologías nos permiten:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm font-bold text-gray-500 uppercase list-disc ml-6 tracking-wide">
                  Recordar sus preferencias de navegación.
                </li>
                <li className="text-sm font-bold text-gray-500 uppercase list-disc ml-6 tracking-wide">
                  Medir la efectividad de nuestras campañas de marketing.
                </li>
                <li className="text-sm font-bold text-gray-500 uppercase list-disc ml-6 tracking-wide">
                  Detectar accesos fraudulentos o ataques de denegación de
                  servicio.
                </li>
              </ul>
              <p className="text-xs text-orange-600/70 font-black uppercase italic">
                Usted puede desactivar las cookies desde los ajustes de su
                navegador en cualquier momento.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Globe className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                5. Transferencia y Transmisión Internacional de Datos
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              SIPRAC podrá realizar transferencia de datos a terceros países con
              el fin de utilizar servicios de computación en la nube (ej. Google
              Cloud, AWS) o herramientas de marketing automation, asegurando
              siempre que los receptores cuenten con niveles adecuados de
              protección de datos según los estándares de la Superintendencia de
              Industria y Comercio.
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <UserCheck className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                6. Procedimiento para el Ejercicio de sus Derechos (Habeas Data)
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              Para ejercer sus derechos de consulta, reclamo o supresión, SIPRAC
              ha dispuesto el siguiente procedimiento:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#FAF9F6] rounded-2xl text-center shadow-[6px_6px_12px_#d1cfcc,-6px_-6px_12px_#ffffff]">
                <h5 className="text-[10px] font-black text-orange-500 uppercase mb-3 tracking-widest">
                  Paso 1: Solicitud
                </h5>
                <p className="text-[11px] text-gray-500 font-bold uppercase">
                  Envío de correo a sipracsiprac@gmail.com con asunto "Derecho
                  de Hábeas Data".
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] rounded-2xl text-center shadow-[6px_6_12px_#d1cfcc,-6px_-6px_12px_#ffffff]">
                <h5 className="text-[10px] font-black text-orange-500 uppercase mb-3 tracking-widest">
                  Paso 2: Análisis
                </h5>
                <p className="text-[11px] text-gray-500 font-bold uppercase">
                  Verificación de identidad y análisis de la procedencia de la
                  solicitud en un plazo de 10 días hábiles.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] rounded-2xl text-center shadow-[6px_6px_12px_#d1cfcc,-6px_-6px_12px_#ffffff]">
                <h5 className="text-[10px] font-black text-orange-500 uppercase mb-3 tracking-widest">
                  Paso 3: Respuesta
                </h5>
                <p className="text-[11px] text-gray-500 font-bold uppercase">
                  Notificación formal al titular sobre las acciones tomadas
                  respecto a sus datos.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
              <Info className="size-5 text-orange-500" />
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                7. Vigencia de la Información
              </h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed font-italic">
              Los datos personales suministrados se conservarán mientras se
              mantenga la relación comercial o contractual y por el tiempo
              necesario para cumplir con las obligaciones legales de
              conservación documental comercial (mínimo 10 años en Colombia).
            </p>
          </section>

          {/* Final Note */}
          <div className="pt-10 border-t border-gray-200/50 text-center">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">
              Esta política rige a partir del 31 de Enero de 2026. <br />
              SIPRAC - Expertos en excelencia operacional y seguridad integral.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
