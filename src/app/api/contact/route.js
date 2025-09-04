import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    

    // Create transporter (correct Nodemailer API)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NM_EMAIL_USER,
        pass: process.env.NM_EMAIL_PW,
      },
    });


    // Verify transporter configuration
    await transporter.verify();

    // Email to you (receiving the contact form)
    const mailToYou = {
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER, // Your email
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Reply Now</a>
            <a href="https://wa.me/+923212865058" style="display: inline-block; background-color: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">WhatsApp</a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the user
    const autoReplyToUser = {
      from: process.env.NM_EMAIL_USER,
      to: email, // User's email - THIS IS CRITICAL
      replyTo: process.env.NM_EMAIL_USER,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">

        // Actually send the emails
        try {
          const sendResult1 = await transporter.sendMail(mailToYou);
          console.log('mailToYou send result:', sendResult1);

          const sendResult2 = await transporter.sendMail(autoReplyToUser);
          console.log('autoReplyToUser send result:', sendResult2);
        } catch (sendErr) {
          console.error('Error during transporter.sendMail:', sendErr);
          return NextResponse.json(
            { error: 'Failed to send email(s).', details: String(sendErr) },
            { status: 500 }
          );
        }

        return NextResponse.json(
          { message: 'Email(s) sent successfully!' },
          { status: 200 }
        );
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> "${message}"</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0;">
              <strong>Expected Response Time:</strong> I typically respond within 24-48 hours.
            </p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            In the meantime, feel free to connect with me on:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://linkedin.com/in/ali-raza-4a5762282/" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 5px;">LinkedIn</a>
            <a href="https://github.com/ALIRAZA4278" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #333; color: white; text-decoration: none; border-radius: 5px;">GitHub</a>
            <a href="https://wa.me/+923212865058" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #25d366; color: white; text-decoration: none; border-radius: 5px;">WhatsApp</a>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Best regards,<br>
            <strong>Ali Raza</strong><br>
            <em>Full-Stack Developer</em>
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
