'use client';

import { useState } from 'react';
import Image from 'next/image';
import KarachiTime from './KarachiTime';
import Magnetic from './Magnetic';
import { contact, socialLinks } from '../data/site';

// `website` is a honeypot: hidden from people, filled in only by bots
const emptyForm = { name: '', email: '', subject: '', message: '', website: '' };
const [emailUser, emailDomain] = contact.email.split('@');

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(emptyForm);
      } else {
        setSubmitStatus(response.status === 429 ? 'limited' : 'error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="contact wrap">
      <div className="contact__top" data-reveal-group>
        <div className="contact__ask">
          <h2 id="contact-title" className="section-title" data-reveal>Let&apos;s work together</h2>
          <p className="lead" data-reveal>
            A web app, an AI-powered chatbot or a complete full-stack build: tell me about it and
            I&apos;ll get back to you within 24 hours.
          </p>
          <div className="contact__person" data-reveal>
            <Image
              src="/Images/ali-raza-headshot.webp"
              alt=""
              width={56}
              height={56}
              className="contact__avatar"
            />
            <p>
              <strong>Ali Raza</strong>
              <span><KarachiTime /></span>
            </p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} data-reveal>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" required maxLength={100}
              value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required maxLength={200}
              value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="field field--wide">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required maxLength={200}
              placeholder="Project inquiry, collaboration, or just saying hi"
              value={formData.subject} onChange={handleInputChange} />
          </div>
          <div className="field field--wide">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required maxLength={5000}
              placeholder="Your project, timeline and budget"
              value={formData.message} onChange={handleInputChange} />
          </div>
          <div className="field--trap" aria-hidden="true">
            <label htmlFor="website">Leave this empty</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off"
              value={formData.website} onChange={handleInputChange} />
          </div>
          <div className="contact__send">
            <Magnetic>
              <button type="submit" className="btn btn--arrow" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </Magnetic>
            <p className="contact__status" role="status" aria-live="polite">
              {submitStatus === 'success' && 'Thank you, your message has been sent. I\'ll reply within 24 hours.'}
              {submitStatus === 'error' && 'Sorry, the message didn\'t send. Please try again or email me directly.'}
              {submitStatus === 'limited' && 'You\'ve sent a few messages already. Please wait a few minutes, or email me directly.'}
            </p>
          </div>
        </form>
      </div>

      <a href={`mailto:${contact.email}`} className="contact__address display">
        <span>{emailUser}@</span><span>{emailDomain}</span>
      </a>

      <div className="contact__base">
        <ul>
          <li><a href={contact.phoneHref}>{contact.phone}</a></li>
          <li><a href={contact.whatsappChat} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li>{contact.city}</li>
        </ul>
        <ul>
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
