// HTML emails sent by the contact form, in the site's black-and-lime style.
// Email clients ignore most CSS, so the layout uses tables and inline styles only.

const SITE_URL = 'https://ali--raza.vercel.app';
const WHATSAPP = 'https://wa.me/923212865058';
const LINKEDIN = 'https://www.linkedin.com/in/ali-raza-4a5762282/';
const GITHUB = 'https://github.com/ALIRAZA4278';

const C = {
  page: '#0b0b0c',
  card: '#161618',
  inset: '#0f0f11',
  line: '#26262a',
  ink: '#f3f3f1',
  muted: '#8f8e89',
  lime: '#c6f432',
  limeInk: '#0b0b0c',
};
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Escaped, with the sender's line breaks kept
const asParagraphs = (str) => escapeHtml(str).replace(/\r?\n/g, '<br>');

const karachiTime = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date()) + ' (PKT)';

function button(href, label) {
  return `<a href="${href}" style="display:inline-block;padding:13px 26px;border-radius:999px;background:${C.lime};color:${C.limeInk};font-family:${FONT};font-size:15px;font-weight:bold;text-decoration:none;">${label} &rarr;</a>`;
}

function ghostLink(href, label) {
  return `<a href="${href}" style="display:inline-block;margin:0 6px 8px 0;padding:9px 16px;border-radius:999px;border:1px solid ${C.line};color:${C.ink};font-family:${FONT};font-size:13px;text-decoration:none;">${label}</a>`;
}

// The shared frame: preheader, wordmark header, card, footer note
function layout({ preheader, body, footnote }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Ali Raza</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.page};">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.page}" style="background:${C.page};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
        <tr>
          <td style="padding:0 4px 20px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:${FONT};font-size:22px;font-weight:bold;letter-spacing:1px;color:${C.ink};">
                  ALI RAZA<span style="color:${C.lime};">.</span>
                </td>
                <td align="right" style="font-family:${FONT};font-size:13px;color:${C.muted};">
                  Software Engineer
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="${C.card}" style="background:${C.card};border:1px solid ${C.line};border-radius:20px;padding:36px 32px;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:22px 8px 0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted};text-align:center;">
            ${footnote}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function pill(label) {
  return `<span style="display:inline-block;padding:6px 14px;border-radius:999px;border:1px solid #3d4a14;background:#1b2008;color:${C.lime};font-family:${FONT};font-size:12px;">&#9679;&nbsp; ${label}</span>`;
}

function detailRow(label, valueHtml) {
  return `<tr>
    <td style="padding:12px 0;border-bottom:1px solid ${C.line};font-family:${FONT};font-size:13px;color:${C.muted};width:110px;vertical-align:top;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid ${C.line};font-family:${FONT};font-size:15px;color:${C.ink};vertical-align:top;">${valueHtml}</td>
  </tr>`;
}

function messageBlock(message) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td bgcolor="${C.inset}" style="background:${C.inset};border-left:3px solid ${C.lime};border-radius:12px;padding:20px 22px;font-family:${FONT};font-size:15px;line-height:1.7;color:${C.ink};">
        ${asParagraphs(message)}
      </td>
    </tr>
  </table>`;
}

/** The notification Ali receives for each form submission. */
export function ownerNotification({ name, email, subject, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;

  const body = `
    ${pill('New message from your portfolio')}
    <h1 style="margin:20px 0 6px;font-family:${FONT};font-size:26px;line-height:1.25;color:${C.ink};">${escapeHtml(subject)}</h1>
    <p style="margin:0 0 24px;font-family:${FONT};font-size:15px;color:${C.muted};">from ${safeName}</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 26px;">
      ${detailRow('Name', safeName)}
      ${detailRow('Email', `<a href="mailto:${safeEmail}" style="color:${C.lime};text-decoration:none;">${safeEmail}</a>`)}
      ${detailRow('Received', escapeHtml(karachiTime()))}
    </table>

    <p style="margin:0 0 10px;font-family:${FONT};font-size:13px;color:${C.muted};">Message</p>
    ${messageBlock(message)}

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 0;">
      <tr><td>${button(replyHref, `Reply to ${safeName}`)}</td></tr>
    </table>
    <p style="margin:14px 0 0;font-family:${FONT};font-size:13px;color:${C.muted};">Or just press Reply: it goes straight to ${safeName}.</p>
  `;

  return {
    subject: `New enquiry: ${subject}`,
    html: layout({
      preheader: `${name} wrote: ${message.slice(0, 90)}`,
      body,
      footnote: `Sent from the contact form on <a href="${SITE_URL}" style="color:${C.muted};">your portfolio</a>.`,
    }),
    text: [
      'New message from your portfolio',
      '',
      `Subject: ${subject}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Received: ${karachiTime()}`,
      '',
      message,
      '',
      'Press Reply to answer them directly.',
    ].join('\n'),
  };
}

/** The confirmation the visitor receives. Replies go to Ali. */
export function visitorAutoReply({ name, subject, message }) {
  const safeName = escapeHtml(name);
  const firstName = escapeHtml(name.trim().split(/\s+/)[0] || name);

  const body = `
    ${pill('Message received')}
    <h1 style="margin:20px 0 14px;font-family:${FONT};font-size:28px;line-height:1.25;color:${C.ink};">Thanks, ${firstName}.</h1>
    <p style="margin:0 0 14px;font-family:${FONT};font-size:16px;line-height:1.7;color:#cfceca;">
      Your message reached me, and I&rsquo;ll get back to you within <strong style="color:${C.ink};">24 hours</strong>.
      If it&rsquo;s about a project, it helps to know your timeline and budget, so feel free to reply with them.
    </p>

    <p style="margin:26px 0 10px;font-family:${FONT};font-size:13px;color:${C.muted};">What you sent &middot; ${escapeHtml(subject)}</p>
    ${messageBlock(message)}

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:30px 0 0;">
      <tr><td>${button(`${SITE_URL}/projects`, 'See my work')}</td></tr>
    </table>

    <p style="margin:30px 0 10px;font-family:${FONT};font-size:13px;color:${C.muted};">Prefer to chat?</p>
    <div>
      ${ghostLink(WHATSAPP, 'WhatsApp')}
      ${ghostLink(LINKEDIN, 'LinkedIn')}
      ${ghostLink(GITHUB, 'GitHub')}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:30px 0 0;border-top:1px solid ${C.line};">
      <tr>
        <td style="padding-top:22px;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.ink};">
          <strong>Ali Raza</strong><br>
          <span style="color:${C.muted};">Software Engineer at MS Capital Soft &middot; Karachi, Pakistan</span>
        </td>
      </tr>
    </table>
  `;

  return {
    subject: `Thanks for reaching out, ${name.trim().split(/\s+/)[0] || name}`,
    html: layout({
      preheader: 'Your message reached me. I will reply within 24 hours.',
      body,
      footnote: `You&rsquo;re getting this because you used the contact form at <a href="${SITE_URL}" style="color:${C.muted};">ali--raza.vercel.app</a>, ${safeName}. Reply to this email to reach me directly.`,
    }),
    text: [
      `Thanks, ${name}.`,
      '',
      'Your message reached me, and I will get back to you within 24 hours.',
      'If it is about a project, feel free to reply with your timeline and budget.',
      '',
      `What you sent (${subject}):`,
      message,
      '',
      `See my work: ${SITE_URL}/projects`,
      `WhatsApp: ${WHATSAPP}`,
      `LinkedIn: ${LINKEDIN}`,
      '',
      'Ali Raza',
      'Software Engineer at MS Capital Soft, Karachi, Pakistan',
    ].join('\n'),
  };
}
