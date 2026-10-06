import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Please fill in all fields." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}

                Message:
                ${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New message from CCP website</h2>

                    <p>
                        <strong>Name:</strong> ${name}
                    </p>

                    <p>
                        <strong>Email:</strong> ${email}
                    </p>

                    <p>
                        <strong>Message:</strong>
                    </p>

                    <p style="white-space: pre-line;">
                        ${message}
                    </p>
                </div>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully.",
        });
    } catch (error) {
        console.error("CONTACT_FORM_ERROR:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
