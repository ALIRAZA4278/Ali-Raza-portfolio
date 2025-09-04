import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    console.log('=== EMAIL TEST API ===');
    console.log('Form data received:', { name, email, subject, message });
    console.log('Environment variables:');
    console.log('NM_EMAIL_USER:', process.env.NM_EMAIL_USER);
    console.log('NM_EMAIL_PW exists:', !!process.env.NM_EMAIL_PW);
    console.log('NM_EMAIL_PW length:', process.env.NM_EMAIL_PW?.length);

    // Test nodemailer import
    try {
      const nodemailer = require('nodemailer');
      console.log('Nodemailer imported successfully');
      
      const transporter = nodemailer.createTransporter({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.NM_EMAIL_USER,
          pass: process.env.NM_EMAIL_PW,
        },
      });
      
      console.log('Transporter created successfully');
      
      // Test connection
      await transporter.verify();
      console.log('SMTP connection verified successfully');
      
      return NextResponse.json({ message: 'Email configuration test passed!' });
      
    } catch (error) {
      console.error('Nodemailer error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
