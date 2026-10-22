import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { contact, socialLinks } from '../data/site';

const footerLinks = [
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'All projects', href: '/projects' },
  { name: 'Contact', href: '/#contact' }
];

const socialIcons = { GitHub: FaGithub, LinkedIn: FaLinkedinIn, X: FaXTwitter, Instagram: FaInstagram };
const footerSocials = [
  ...socialLinks.map(({ label, href }) => ({ label, href, Icon: socialIcons[label] })),
  { label: 'WhatsApp', href: contact.whatsappChat, Icon: FaWhatsapp }
].filter(({ Icon }) => Icon);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <p className="footer__name display">Ali Raza</p>
          <p className="footer__tag">
            Software Engineer at MS Capital Soft. Building web apps and AI tools from Karachi.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {footerLinks.map(({ name, href }) => (
            <Link key={name} href={href}>{name}</Link>
          ))}
        </nav>

        <div className="footer__reach">
          <a className="footer__mail" href={`mailto:${contact.email}`}>{contact.email}</a>
          <ul className="footer__socials" aria-label="Find me online">
            {footerSocials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Ali Raza. All rights reserved.</p>
        <a href="#main-content" className="footer__top-link">
          Back to top <FaArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
