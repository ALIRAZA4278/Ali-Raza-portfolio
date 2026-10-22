import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ownerNotification, visitorAutoReply } from '../../../lib/emailTemplates';

// Header values (subject, display name) must stay on one line
const oneLine = (str) => str.replace(/[\r\n]+/g, ' ').trim();

// Spam protection: at most RATE_LIMIT messages per visitor per window.
// Kept in memory, so it resets when the server instance restarts; it still
// stops a single bot from flooding the inbox (and the auto-reply).
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    recentByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentByIp.set(ip, recent);
  return false;
}

const MAX_LENGTHS = { name: 100, email: 200, subject: 200, message: 5000 };

export async function POST(request) {
  try {
    const { name, email, subject, message, website } = await request.json();

    // Honeypot: the "website" field is hidden from people, so only bots fill it.
    // Answer as if it worked and send nothing.
    if (website) {
      return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });
    }

    const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many messages. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const fields = { name, email, subject, message };
    const tooLong = Object.entries(fields).some(
      ([key, value]) => typeof value !== 'string' || value.length > MAX_LENGTHS[key]
    );
    if (tooLong) {
      return NextResponse.json(
        { error: 'Please keep each field within its length limit.' },
        { status: 400 }
      );
    }

    // Validate input
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // The templates escape everything they put into HTML
    const clean = {
      name: oneLine(name),
      email: oneLine(email),
      subject: oneLine(subject),
      message: message.trim(),
    };

    // Create transporter
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
    try {
      await transporter.verify();
    } catch (verifyError) {
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please try again later.' },
        { status: 500 }
      );
    }

    const owner = process.env.NM_EMAIL_USER;
    const from = { name: 'Ali Raza', address: owner };

    // Email to you: pressing Reply answers the visitor
    const notification = ownerNotification(clean);
    const mailToYou = {
      from: { name: 'Portfolio contact form', address: owner },
      to: owner,
      replyTo: { name: clean.name, address: clean.email },
      ...notification,
    };

    // Confirmation to the visitor: pressing Reply reaches you
    const autoReplyToUser = {
      from,
      to: { name: clean.name, address: clean.email },
      replyTo: from,
      ...visitorAutoReply(clean),
    };

    // Send emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(autoReplyToUser);

    return NextResponse.json(
      { message: 'Emails sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
