'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDiagnosticEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const employees = formData.get('employees') as string;
    const risk = formData.get('risk') as string;
    const sector = formData.get('sector') as string;
    const progress = formData.get('progress') as string;
    const accidents = formData.get('accidents') as string;
    const currentSystems = formData.get('current-systems') as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'SIPRAC Diagnóstico <onboarding@resend.dev>',
            to: ['santivalencia2311@gmail.com'],
            replyTo: email,
            subject: `Nuevo Diagnóstico Preliminar: ${company}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #f97316; text-transform: uppercase;">Nuevo Diagnóstico Preliminar Recibido</h2>
                    <p>Has recibido un nuevo lead cualificado desde el formulario de diagnóstico del sitio web.</p>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    
                    <h3 style="color: #333;">1. Datos de Identificación</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Nombre/Cargo:</strong> ${name}</li>
                        <li><strong>Razón Social:</strong> ${company}</li>
                        <li><strong>Email:</strong> ${email}</li>
                        <li><strong>Teléfono:</strong> ${phone}</li>
                    </ul>
                    
                    <h3 style="color: #333;">2. Perfil Operativo</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Empleados:</strong> ${employees}</li>
                        <li><strong>Nivel Riesgo ARL:</strong> Clase ${risk}</li>
                        <li><strong>Sector:</strong> ${sector}</li>
                    </ul>
                    
                    <h3 style="color: #333;">3. Estado Actual</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Avance SG-SST:</strong> ${progress}</li>
                        <li><strong>Accidentalidad:</strong> ${accidents}</li>
                        <li><strong>Sistemas Actuales:</strong> ${currentSystems || 'No especificado'}</li>
                    </ul>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    
                    <p style="font-size: 12px; color: #999;">Este correo fue enviado automáticamente desde el sistema de captación de SIPRAC.</p>
                </div>
            `,
        });

        if (error) {
            console.error('Error enviando email:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Error inesperado:', err);
        return { success: false, error: 'Ocurrió un error inesperado al enviar el diagnóstico.' };
    }
}
