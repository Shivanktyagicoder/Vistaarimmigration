/**
 * mailer.js — Email utilities for Vistaar Immigration
 *
 * Two emails are sent on every contact submission:
 *  1. sendEnquiryNotification  → internal alert to info@vistaarimmigration.com
 *  2. sendConfirmationEmail    → professional auto-reply to the applicant
 *
 * Both use table-based HTML for maximum email client compatibility.
 * The Vistaar logo is loaded from the live website (stable Namecheap URL).
 */

const nodemailer = require('nodemailer')

// ── Logo URL: served from frontend (Namecheap, always up) ────────────────────
const LOGO_URL = 'https://vistaarimmigration.com/logo.png'

// ── HTML entity escaper (prevent XSS in email body) ──────────────────────────
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// ── Shared brand header HTML ─────────────────────────────────────────────────
// Used in both email templates for consistent visual identity.
function brandHeader() {
  return `
  <tr>
    <td align="center" style="padding-bottom:28px;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="background:#0B1929;border-radius:14px;padding:18px 36px;">
            <img
              src="${LOGO_URL}"
              alt="Vistaar Immigration"
              width="64"
              style="display:block;width:64px;height:auto;margin:0 auto 10px;"
            />
            <div style="text-align:center;line-height:1;">
              <span style="font-family:Arial,sans-serif;font-size:20px;font-weight:900;color:#FFFFFF;letter-spacing:-0.5px;">VISTAAR</span><!--
              --><span style="font-family:Arial,sans-serif;font-size:9px;font-weight:700;color:#14B8A6;letter-spacing:3.5px;text-transform:uppercase;margin-left:10px;vertical-align:4px;">IMMIGRATION</span>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

// ── SMTP transporter ──────────────────────────────────────────────────────────
// Uses Gmail SMTP (smtp.gmail.com:587 with STARTTLS).
// Render free tier blocks most third-party SMTP but allows Gmail reliably.
// Requires a Gmail App Password — NOT your normal Gmail password:
//   Gmail → Google Account → Security → 2-Step Verification → App Passwords
const transporter = nodemailer.createTransport({
  host:   'smtp.gmail.com',
  port:   465,
  secure: true,         // SSL on 465
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

transporter.verify((err) => {
  if (err) console.warn('⚠️  Mailer verification failed:', err.message)
  else     console.log('✅  Mailer transporter is ready')
})

// ── Helper: detail row in a table ────────────────────────────────────────────
function row(label, value) {
  return `
    <tr>
      <td style="width:130px;padding:13px 16px 13px 0;vertical-align:top;border-bottom:1px solid #F1F5F9;">
        <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94A3B8;">${label}</span>
      </td>
      <td style="padding:13px 0;vertical-align:top;border-bottom:1px solid #F1F5F9;">
        ${value}
      </td>
    </tr>`
}

// ════════════════════════════════════════════════════════════════════════════
// 1. INTERNAL NOTIFICATION — sent to info@vistaarimmigration.com
// ════════════════════════════════════════════════════════════════════════════
async function sendEnquiryNotification(data) {
  const { fullName, email, countryCode, phone, service, country, message, ipAddress } = data

  const firstName = esc(fullName.split(' ')[0])

  const date = new Date().toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    weekday:  'long',
    day:      'numeric',
    month:    'long',
    year:     'numeric',
    hour:     '2-digit',
    minute:   '2-digit',
  })

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>New Enquiry — Vistaar Immigration</title>
</head>
<body style="margin:0;padding:0;background:#EEF2F7;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2F7;padding:48px 0;">
<tr><td align="center" style="padding:0 16px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

  ${brandHeader()}

  <!-- CARD -->
  <tr>
    <td style="background:#FFFFFF;border-radius:16px;overflow:hidden;">

      <!-- TEAL TOP STRIPE -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="height:3px;background:linear-gradient(90deg,#0D9488,#14B8A6 50%,#38BDF8);font-size:0;">&nbsp;</td></tr>
      </table>

      <!-- HEADER -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:30px 36px 22px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#14B8A6;">New Enquiry</span>
                </td>
                <td align="right">
                  <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#0D9488;background:#F0FDFA;border:1px solid #5EEAD4;border-radius:20px;padding:4px 12px;white-space:nowrap;">&#9679;&nbsp;Action Required</span>
                </td>
              </tr>
            </table>
            <p style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:24px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Consultation Request</p>
            <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#94A3B8;">${date} &middot; GMT</p>
          </td>
        </tr>
      </table>

      <!-- DIVIDER -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:0 36px;"><div style="height:1px;background:#F1F5F9;">&nbsp;</div></td></tr>
      </table>

      <!-- DETAIL ROWS -->
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:0 36px 8px;">
        ${row('Full Name',  `<span style="font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#0F172A;">${esc(fullName)}</span>`)}
        ${row('Email',      `<a href="mailto:${esc(email)}" style="font-family:Arial,sans-serif;font-size:14px;color:#0D9488;text-decoration:none;font-weight:500;">${esc(email)}</a>`)}
        ${row('Phone',      `<span style="font-family:Arial,sans-serif;font-size:14px;color:#334155;">${countryCode ? esc(countryCode) + '&nbsp;' : ''}${esc(phone)}</span>`)}
        ${row('Service',    `<span style="font-family:Arial,sans-serif;font-size:12px;font-weight:700;color:#0D9488;background:#F0FDFA;border:1px solid #99F6E4;border-radius:20px;padding:3px 12px;">${esc(service)}</span>`)}
        ${row('Destination',`<span style="font-family:Arial,sans-serif;font-size:14px;color:#334155;">${esc(country)}</span>`)}
        <tr>
          <td style="width:130px;padding:16px 16px 16px 0;vertical-align:top;">
            <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94A3B8;">Message</span>
          </td>
          <td style="padding:16px 0;vertical-align:top;">
            <div style="background:#F8FAFC;border-left:3px solid #14B8A6;border-radius:0 8px 8px 0;padding:12px 16px;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.8;color:#475569;">${esc(message).replace(/\n/g, '<br/>')}</p>
            </div>
          </td>
        </tr>
      </table>

      <!-- CTA BUTTONS -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:20px 36px 32px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:10px;">
                  <a href="mailto:${esc(email)}?subject=Re%3A%20Your%20Vistaar%20Immigration%20Enquiry&body=Dear%20${firstName}%2C%0A%0AThank%20you%20for%20contacting%20Vistaar%20Immigration.%20"
                     style="display:inline-block;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#FFFFFF;background:#0D9488;text-decoration:none;padding:12px 24px;border-radius:8px;">
                    Reply to ${firstName} &rarr;
                  </a>
                </td>
                <td>
                  <a href="https://wa.me/447344896264"
                     style="display:inline-block;font-family:Arial,sans-serif;font-size:13px;font-weight:600;color:#16A34A;background:#F0FDF4;border:1px solid #86EFAC;text-decoration:none;padding:11px 20px;border-radius:8px;">
                    WhatsApp
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="padding:18px 4px 0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#94A3B8;line-height:1.7;">
              IP: ${esc(ipAddress || 'Unknown')}&nbsp;&middot;&nbsp;Internal notification only
            </p>
          </td>
          <td align="right">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#CBD5E1;white-space:nowrap;">
              &copy; ${new Date().getFullYear()} Vistaar Immigration
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`

  await transporter.sendMail({
    from:    `"Vistaar Immigration" <${process.env.GMAIL_USER}>`,
    to:      process.env.NOTIFY_EMAIL,
    replyTo: `"${esc(fullName)}" <${email}>`,
    subject: `New Enquiry — ${esc(service)} | ${esc(fullName)}`,
    html,
  })
}

// ════════════════════════════════════════════════════════════════════════════
// 2. APPLICANT CONFIRMATION — sent to the person who submitted the form
// ════════════════════════════════════════════════════════════════════════════
async function sendConfirmationEmail(data) {
  const { fullName, email, service, country } = data

  const firstName = esc(fullName.split(' ')[0])

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Enquiry Received — Vistaar Immigration</title>
</head>
<body style="margin:0;padding:0;background:#EEF2F7;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2F7;padding:48px 0;">
<tr><td align="center" style="padding:0 16px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

  ${brandHeader()}

  <!-- CARD -->
  <tr>
    <td style="background:#FFFFFF;border-radius:16px;overflow:hidden;">

      <!-- TEAL TOP STRIPE -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="height:3px;background:linear-gradient(90deg,#0D9488,#14B8A6 50%,#38BDF8);font-size:0;">&nbsp;</td></tr>
      </table>

      <!-- GREETING -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:32px 36px 20px;">
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#14B8A6;">Enquiry Received</p>
            <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:22px;font-weight:800;color:#0F172A;letter-spacing:-0.5px;">Thank You, ${firstName}!</p>
            <p style="margin:10px 0 0;font-family:Arial,sans-serif;font-size:14px;line-height:1.75;color:#475569;">
              We've received your enquiry for <strong style="color:#0D9488;">${esc(service)}</strong> — ${esc(country)}.
              Our OISC-regulated immigration specialists will review your profile and
              get back to you <strong>within 2 business hours</strong>.
            </p>
          </td>
        </tr>
      </table>

      <!-- DIVIDER -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:0 36px;"><div style="height:1px;background:#F1F5F9;">&nbsp;</div></td></tr>
      </table>

      <!-- WHAT HAPPENS NEXT -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:24px 36px 28px;">
            <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94A3B8;">What happens next</p>

            <!-- Step 1 -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
              <tr>
                <td style="vertical-align:top;padding-right:14px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#0D9488,#14B8A6);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:12px;font-weight:800;color:#fff;text-align:center;line-height:28px;">1</div>
                </td>
                <td>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#0F172A;">Profile Review</p>
                  <p style="margin:3px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.6;">Our specialist reviews your details and identifies the strongest visa route for your profile.</p>
                </td>
              </tr>
            </table>

            <!-- Step 2 -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
              <tr>
                <td style="vertical-align:top;padding-right:14px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#0D9488,#14B8A6);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:12px;font-weight:800;color:#fff;text-align:center;line-height:28px;">2</div>
                </td>
                <td>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#0F172A;">We Contact You</p>
                  <p style="margin:3px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.6;">Expect a reply to this email or a WhatsApp message within 2 hours (Mon–Sat, 9 AM–6 PM GMT).</p>
                </td>
              </tr>
            </table>

            <!-- Step 3 -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align:top;padding-right:14px;">
                  <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#0D9488,#14B8A6);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:12px;font-weight:800;color:#fff;text-align:center;line-height:28px;">3</div>
                </td>
                <td>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#0F172A;">Free Consultation</p>
                  <p style="margin:3px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.6;">We schedule your free consultation and walk you through next steps, costs, and timelines.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- DIVIDER -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:0 36px;"><div style="height:1px;background:#F1F5F9;">&nbsp;</div></td></tr>
      </table>

      <!-- CONTACT SECTION -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:24px 36px 32px;">
            <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.6;">
              Need to reach us urgently? We're available on WhatsApp or by phone:
            </p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:10px;">
                  <a href="https://wa.me/447344896264"
                     style="display:inline-block;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#FFFFFF;background:#25D366;text-decoration:none;padding:11px 22px;border-radius:8px;">
                    WhatsApp Us
                  </a>
                </td>
                <td>
                  <a href="tel:+447344896264"
                     style="display:inline-block;font-family:Arial,sans-serif;font-size:13px;font-weight:600;color:#0D9488;background:#F0FDFA;border:1px solid #99F6E4;text-decoration:none;padding:10px 20px;border-radius:8px;">
                    +44 7344 896 264
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="padding:20px 4px 0;">
      <p style="margin:0;text-align:center;font-family:Arial,sans-serif;font-size:11px;color:#94A3B8;line-height:1.8;">
        Vistaar Immigration · London, United Kingdom<br/>
        <a href="https://vistaarimmigration.com" style="color:#14B8A6;text-decoration:none;">vistaarimmigration.com</a>
        &nbsp;&middot;&nbsp;
        <a href="mailto:info@vistaarimmigration.com" style="color:#94A3B8;text-decoration:none;">info@vistaarimmigration.com</a><br/>
        &copy; ${new Date().getFullYear()} Vistaar Immigration. All rights reserved.
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`

  await transporter.sendMail({
    from:    `"Vistaar Immigration" <${process.env.GMAIL_USER}>`,
    to:      email,
    replyTo: `"Vistaar Immigration" <${process.env.GMAIL_USER}>`,
    subject: `Your Enquiry Received — Vistaar Immigration`,
    html,
  })
}

module.exports = { sendEnquiryNotification, sendConfirmationEmail }
