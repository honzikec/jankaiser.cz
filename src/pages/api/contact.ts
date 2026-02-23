import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { message } = body;

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtppro.zoho.eu",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: import.meta.env.SMTP_USER,
                pass: import.meta.env.SMTP_PASS,
            },
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: `"Portfolio Contact Form" <${import.meta.env.SMTP_USER}>`,
            to: "mailto@jankaiser.cz",
            subject: "New Message from Portfolio Website",
            text: message,
            html: `<p><strong>New message from your portfolio:</strong></p><p>${message}</p>`,
        });

        return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
