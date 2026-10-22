import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../data/site';

// Floating chat button, bottom-right on every page
export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappChat}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
      <span className="wa-float__label">Chat on WhatsApp</span>
    </a>
  );
}
