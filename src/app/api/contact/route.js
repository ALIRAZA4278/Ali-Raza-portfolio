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
    
    console.log('Environment variables check:');
    console.log('NM_EMAIL_USER:', process.env.NM_EMAIL_USER ? 'Set' : 'Not set');
    console.log('NM_EMAIL_PW:', process.env.NM_EMAIL_PW ? 'Set' : 'Not set');
    console.log(process.env.NM_EMAIL_USER, process.env.NM_EMAIL_PW);

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

    console.log('Transporter created successfully');

    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Email to you (receiving the contact form)
    const mailToYou = {
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER, // Your email
      subject: `📧 New Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
              🎯 New Contact Form Submission
            </h1>
            <p style="color: #e5e7eb; margin: 10px 0 0 0; font-size: 16px;">
              Someone reached out through your portfolio
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px; background-color: #ffffff;">
            <!-- Contact Details -->
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid #3b82f6;">
              <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 Contact Information</h3>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center;">
                  <span style="color: #6b7280; font-weight: 600; min-width: 80px;">👤 Name:</span>
                  <span style="color: #111827; font-weight: 500;">${name}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="color: #6b7280; font-weight: 600; min-width: 80px;">📧 Email:</span>
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${email}</a>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="color: #6b7280; font-weight: 600; min-width: 80px;">📝 Subject:</span>
                  <span style="color: #111827; font-weight: 500;">${subject}</span>
                </div>
              </div>
            </div>
            
            <!-- Message -->
            <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #e5e7eb; margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                💬 Message
              </h3>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="line-height: 1.7; color: #374151; margin: 0; font-size: 16px;">${message}</p>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 10px;">
                📧 Reply Now
              </a>
              <a href="https://wa.me/+923212865058" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 10px;">
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              📅 Received: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
              This email was sent from your portfolio contact form • <a href="https://aliraza-portfolio.vercel.app" style="color: #3b82f6; text-decoration: none;">View Portfolio</a>
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the user
    const autoReplyToUser = {
      from: process.env.NM_EMAIL_USER,
      to: email, // User's email
      subject: `✅ Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
              🎉 Thank You for Reaching Out!
            </h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">
              Your message has been received successfully
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px; background-color: #ffffff;">
            <!-- Greeting -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 24px;">Hi ${name}! 👋</h2>
              <p style="color: #6b7280; font-size: 18px; margin: 0; line-height: 1.6;">
                Thank you for contacting me through my portfolio! I've received your message and will get back to you as soon as possible.
              </p>
            </div>
            
            <!-- Message Summary -->
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #0ea5e9;">
              <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                📋 Your Message Summary
              </h3>
              <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #6b7280;">${subject}</span></p>
                <p style="margin: 0;"><strong style="color: #374151;">Message:</strong></p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #0ea5e9;">
                  <p style="color: #4b5563; margin: 0; line-height: 1.6; font-style: italic;">"${message}"</p>
                </div>
              </div>
            </div>
            
            <!-- Response Time -->
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #f59e0b;">
              <p style="color: #92400e; margin: 0; font-weight: 500; display: flex; align-items: center;">
                ⏱️ <strong style="margin-left: 8px;">Expected Response Time:</strong>
              </p>
              <p style="color: #b45309; margin: 10px 0 0 0; line-height: 1.6;">
                I typically respond within <strong>24-48 hours</strong>. For urgent matters, feel free to reach out via WhatsApp or LinkedIn!
              </p>
            </div>
            
            <!-- Connect Section -->
            <div style="text-align: center; margin: 30px 0;">
              <h3 style="color: #374151; margin-bottom: 20px; font-size: 20px;">🔗 Let's Connect!</h3>
              <p style="color: #6b7280; margin-bottom: 25px; line-height: 1.6;">
                In the meantime, feel free to connect with me on social media:
              </p>
              <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                <a href="https://linkedin.com/in/ali-raza-4a5762282/" style="display: inline-block; background: linear-gradient(135deg, #0077b5 0%, #005885 100%); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/ALIRAZA4278" style="display: inline-block; background: linear-gradient(135deg, #333333 0%, #1a1a1a 100%); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  🔧 GitHub
                </a>
                <a href="https://wa.me/+923212865058" style="display: inline-block; background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            
            <!-- Signature -->
            <div style="background-color: #f9fafb; padding: 25px; border-radius: 10px; margin-top: 30px; text-align: center;">
              <p style="color: #374151; font-size: 18px; margin: 0 0 10px 0; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1f2937; font-size: 20px;">Ali Raza</strong>
              </p>
              <p style="color: #6b7280; margin: 5px 0; font-style: italic; font-size: 16px;">
                Full-Stack Developer & Tech Enthusiast
              </p>
              <p style="color: #9ca3af; margin: 15px 0 0 0; font-size: 14px;">
                🚀 Building digital solutions that make a difference
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #374151; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #d1d5db; font-size: 13px; margin: 0 0 8px 0;">
              This is an automated response. Please do not reply to this email.
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              📧 Email sent from Ali Raza's Portfolio • <a href="https://aliraza-portfolio.vercel.app" style="color: #60a5fa; text-decoration: none;">Visit Portfolio</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    console.log('Sending email to you (portfolio owner)...');
    await transporter.sendMail(mailToYou);
    console.log('Email to you sent successfully');
    
    console.log('Sending auto-reply to user...');
    await transporter.sendMail(autoReplyToUser);
    console.log('Auto-reply to user sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
