import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const sections = [
  {
    title: '1. Who We Are',
    content: `Vistaar Immigration ("we", "us", "our") is an immigration consultancy registered and operating in the United Kingdom, regulated by the Office of the Immigration Services Commissioner (OISC). We operate the website vistaarimmigration.com.

Contact: info@vistaarimmigration.com | +44 7344 896 264`,
  },
  {
    title: '2. What Information We Collect',
    content: `When you submit a consultation request through our website, we collect:

• Full name, email address and phone number
• Your immigration service of interest and preferred destination country
• A description of your immigration goals (your message)
• Your IP address (for security and fraud prevention only)

We do not collect payment card details, passport numbers or any government identification numbers through our website.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information you provide solely to:

• Respond to your enquiry and provide immigration advice
• Contact you about your case via email, phone or WhatsApp
• Keep a record of your consultation for regulatory compliance (OISC requirement)

We do not use your information for automated decision-making, profiling, or marketing without your explicit consent.`,
  },
  {
    title: '4. Legal Basis for Processing (UK GDPR)',
    content: `We process your personal data under the following lawful bases:

• Legitimate Interests: To respond to your consultation request
• Legal Obligation: OISC regulations require us to maintain client records
• Consent: Where you have explicitly opted in to receive updates`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for a maximum of 6 years after your last interaction with us, as required by OISC regulations and UK tax law. After this period, your data is securely deleted.`,
  },
  {
    title: '6. Who We Share Your Data With',
    content: `We do not sell, rent or trade your personal information to any third party. We may share your data with:

• Our secure cloud database provider (for storage)
• Our email service provider (solely to send consultation replies)
• OISC or other regulatory bodies if legally required to do so

All third-party providers are GDPR-compliant and subject to data processing agreements.`,
  },
  {
    title: '7. Your Rights Under UK GDPR',
    content: `You have the right to:

• Access the personal data we hold about you
• Correct inaccurate data
• Request deletion of your data ("right to be forgotten")
• Restrict or object to processing
• Data portability
• Withdraw consent at any time

To exercise any of these rights, email us at info@vistaarimmigration.com. We will respond within 30 days.`,
  },
  {
    title: '8. Cookies',
    content: `Our website uses only essential cookies required for the site to function (e.g. routing). We do not use tracking, advertising or analytics cookies without your consent. See our Cookie Policy for full details.`,
  },
  {
    title: '9. Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information, including HTTPS encryption, secure database access controls and limited staff access on a need-to-know basis.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. The "last updated" date at the bottom of this page will reflect any changes. Continued use of our website after a change constitutes acceptance of the updated policy.`,
  },
  {
    title: '11. Contact & Complaints',
    content: `For any privacy-related queries, contact us at info@vistaarimmigration.com.

If you believe we have not handled your data correctly, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
]

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Vistaar Immigration</title>
        <meta name="description" content="Privacy Policy for Vistaar Immigration. Learn how we collect, use and protect your personal information in accordance with UK GDPR." />
        <link rel="canonical" href="https://vistaarimmigration.com/privacy" />
      </Helmet>

      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          paddingTop: '144px',
          paddingBottom: '64px',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(13,148,136,0.12)',
                border: '1px solid rgba(13,148,136,0.3)',
                color: '#5EEAD4',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              <Shield size={14} />
              Legal
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.025em',
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.4)' }}>
              Last updated: January 2025 · Vistaar Immigration, London, UK
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: '#F8FAFC' }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 sm:p-12"
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
          >
            <p
              className="text-[15px] leading-relaxed mb-10 pb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#475569',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              Your privacy matters to us. This policy explains what personal information Vistaar Immigration
              collects when you use our website or services, how we use it, and your rights under UK GDPR and
              the Data Protection Act 2018.
            </p>

            {sections.map((s, i) => (
              <div key={i} className="mb-10">
                <h2
                  className="font-bold mb-3 text-[17px]"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}
                >
                  {s.title}
                </h2>
                <div
                  className="text-[14px] leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}
                >
                  {s.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
