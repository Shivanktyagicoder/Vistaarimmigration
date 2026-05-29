const nodemailer = require('nodemailer')

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

transporter.verify((err) => {
  if (err) console.warn('⚠️  Mailer verification failed:', err.message)
  else     console.log('✅  Mailer transporter is ready')
})

/**
 * Send enquiry notification to info@vistaarimmigration.com only.
 * No email is ever sent to the applicant.
 */
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

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>New Enquiry</title>
</head>
<body style="margin:0;padding:0;background:#EEF2F7;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2F7;padding:48px 0;">
<tr><td align="center" style="padding:0 16px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

  <!-- BRAND BAR -->
  <tr>
    <td align="center" style="padding-bottom:24px;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="background:#0B1929;border-radius:12px;padding:14px 32px;">
            <span style="font-family:Arial,sans-serif;font-size:19px;font-weight:900;color:#FFFFFF;letter-spacing:-0.5px;">VISTAAR</span><!--
            --><span style="font-family:Arial,sans-serif;font-size:8.5px;font-weight:700;color:#14B8A6;letter-spacing:3.5px;text-transform:uppercase;margin-left:9px;vertical-align:3px;">IMMIGRATION</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

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

            <!-- Label + Badge row -->
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

            <!-- Title -->
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

        ${row('Full Name',
          `<span style="font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#0F172A;">${esc(fullName)}</span>`
        )}

        ${row('Email',
          `<a href="mailto:${esc(email)}" style="font-family:Arial,sans-serif;font-size:14px;color:#0D9488;text-decoration:none;font-weight:500;">${esc(email)}</a>`
        )}

        ${row('Phone',
          `<span style="font-family:Arial,sans-serif;font-size:14px;color:#334155;">${countryCode ? esc(countryCode) + '&nbsp;' : ''}${esc(phone)}</span>`
        )}

        ${row('Service',
          `<span style="font-family:Arial,sans-serif;font-size:12px;font-weight:700;color:#0D9488;background:#F0FDFA;border:1px solid #99F6E4;border-radius:20px;padding:3px 12px;">${esc(service)}</span>`
        )}

        ${row('Destination',
          `<span style="font-family:Arial,sans-serif;font-size:14px;color:#334155;">${esc(country)}</span>`
        )}

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

      <!-- CTA -->
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
    from:    '"Vistaar Immigration" <' + process.env.SMTP_USER + '>',
    to:      process.env.NOTIFY_EMAIL,
    replyTo: '"' + esc(fullName) + '" <' + email + '>',
    subject: `New Enquiry — ${esc(service)} | ${esc(fullName)}`,
    html,
  })
}

module.exports = { sendEnquiryNotification }
