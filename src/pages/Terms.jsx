import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const sections = [
  {
    title: '1. About These Terms',
    content: `These Terms of Service govern your use of the Vistaar Immigration website (vistaarimmigration.com) and our immigration consultancy services. By using our website or engaging our services, you agree to these terms in full.

If you do not agree with any part of these terms, please do not use our website or services.`,
  },
  {
    title: '2. Our Services',
    content: `Vistaar Immigration provides immigration advice and application assistance services, including but not limited to:

• Study visa applications (UK, Canada, Australia, USA, Schengen)
• Work visa and skilled worker applications
• Visitor visa applications
• Schengen visa applications
• Permanent residency and settlement advice
• Dependent and family visa applications

We are regulated by the Office of the Immigration Services Commissioner (OISC) and provide advice within the scope of our OISC accreditation.`,
  },
  {
    title: '3. No Legal Advice Disclaimer',
    content: `The information provided on this website is for general informational purposes only and does not constitute legal advice. Immigration law is complex and changes frequently. We strongly recommend you engage our consultancy directly for advice specific to your circumstances.

Our consultants are OISC regulated advisors, not solicitors. For matters requiring legal representation before tribunals or courts, we will refer you to a qualified immigration solicitor.`,
  },
  {
    title: '4. Client Obligations',
    content: `When engaging our services, you agree to:

• Provide accurate, complete and truthful information at all times
• Disclose any previous visa refusals, immigration history or criminal convictions
• Submit all required documents within agreed timelines
• Inform us promptly of any changes to your circumstances
• Pay agreed fees in accordance with our fee schedule

Providing false or misleading information may result in visa refusal and may constitute a criminal offence. Vistaar Immigration accepts no liability for outcomes resulting from inaccurate information provided by clients.`,
  },
  {
    title: '5. Fees and Payment',
    content: `Our fees are agreed in writing before any work commences. Fees are payable as outlined in your engagement letter. All fees are non-refundable once work has commenced unless otherwise stated in writing.

We do not guarantee visa approval. Immigration decisions rest entirely with the relevant government authority. Failure to obtain a visa does not entitle a refund of consultancy fees unless we have materially failed in our agreed obligations.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `To the maximum extent permitted by law, Vistaar Immigration shall not be liable for:

• Visa refusal decisions made by government authorities
• Losses arising from changes in immigration law or policy
• Delays caused by government processing times
• Any indirect, consequential or special losses

Our total liability to you for any claim arising from our services shall not exceed the total fees paid to us for the specific matter in question.`,
  },
  {
    title: '7. Intellectual Property',
    content: `All content on this website — including text, graphics, logos, images and software — is the property of Vistaar Immigration and is protected by UK and international copyright law. You may not reproduce, distribute or create derivative works without our written consent.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites (e.g. government visa portals). These links are provided for convenience only. We are not responsible for the content, privacy practices or availability of third-party sites.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: '10. Changes to These Terms',
    content: `We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: '11. Contact Us',
    content: `For any questions about these terms, contact us at:

Email: info@vistaarimmigration.com
Phone: +44 7344 896 264
Location: London, United Kingdom`,
  },
]

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Vistaar Immigration</title>
        <meta name="description" content="Terms of Service for Vistaar Immigration. Read our terms governing use of our website and immigration consultancy services." />
        <link rel="canonical" href="https://vistaarimmigration.com/terms" />
      </Helmet>

      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          paddingTop: '144px',
          paddingBottom: '64px',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.3)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600 }}
            >
              <FileText size={14} />
              Legal
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Terms of Service
            </h1>
            <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.4)' }}>
              Last updated: January 2025 · Vistaar Immigration, London, UK
            </p>
          </motion.div>
        </div>
      </div>

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
              style={{ fontFamily: 'Inter, sans-serif', color: '#475569', borderBottom: '1px solid #F1F5F9' }}
            >
              Please read these Terms of Service carefully before using our website or engaging our services.
              These terms form a legally binding agreement between you and Vistaar Immigration.
            </p>
            {sections.map((s, i) => (
              <div key={i} className="mb-10">
                <h2 className="font-bold mb-3 text-[17px]" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                  {s.title}
                </h2>
                <div className="text-[14px] leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
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
