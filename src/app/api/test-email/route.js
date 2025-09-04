import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Create transporter using environment vars
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NM_EMAIL_USER,
        pass: process.env.NM_EMAIL_PW,
      },
    });

    // Verify connection
    await transporter.verify();

    // send a tiny test message to owner
    const info = await transporter.sendMail({
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER,
      subject: 'Portfolio SMTP test',
      text: 'This is a test email sent from /api/test-email to verify SMTP config.'
    });

    return NextResponse.json({ message: 'Test email sent', info }, { status: 200 });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
