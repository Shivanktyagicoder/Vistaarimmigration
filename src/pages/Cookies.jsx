import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'

const cookieTypes = [
  {
    name: 'Essential Cookies',
    required: true,
    color: '#14B8A6',
    desc: 'These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take such as navigating between pages.',
    examples: ['Session routing (React Router)', 'Security tokens'],
  },
  {
    name: 'Analytics Cookies',
    required: false,
    color: '#38BDF8',
    desc: 'These cookies help us understand how visitors interact with our website. All data is anonymised and aggregated. We do not currently use analytics cookies without your explicit consent.',
    examples: ['Page views', 'Traffic source', 'Device type'],
  },
  {
    name: 'Marketing Cookies',
    required: false,
    color: '#A78BFA',
    desc: 'We do not use marketing or advertising tracking cookies on this website. We do not run retargeting campaigns or share browsing data with advertisers.',
    examples: ['None currently in use'],
  },
]

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — Vistaar Immigration</title>
        <meta name="description" content="Cookie Policy for Vistaar Immigration. Learn about the cookies we use and how to manage your preferences." />
        <link rel="canonical" href="https://vistaarimmigration.com/cookies" />
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
              <Cookie size={14} />
              Legal
            </div>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Cookie Policy
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
              This Cookie Policy explains what cookies are, how Vistaar Immigration uses them on our website,
              and what choices you have regarding their use. We are committed to using only the minimum
              cookies necessary to operate our site.
            </p>

            {/* What are cookies */}
            <div className="mb-10">
              <h2 className="font-bold mb-3 text-[17px]" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                What Are Cookies?
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                Cookies are small text files that are placed on your device by websites you visit. They are
                widely used to make websites work efficiently, remember your preferences and provide
                information to website owners. Cookies cannot harm your device or access any other
                information on it.
              </p>
            </div>

            {/* Cookie types */}
            <div className="mb-10">
              <h2 className="font-bold mb-6 text-[17px]" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                Cookies We Use
              </h2>
              <div className="space-y-5">
                {cookieTypes.map(ct => (
                  <div
                    key={ct.name}
                    className="p-5 rounded-xl"
                    style={{ border: `1px solid ${ct.color}25`, background: `${ct.color}06` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-[15px]" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                        {ct.name}
                      </h3>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                          background: ct.required ? `${ct.color}18` : 'rgba(100,116,139,0.1)',
                          color: ct.required ? ct.color : '#64748B',
                          border: `1px solid ${ct.required ? ct.color + '30' : 'rgba(100,116,139,0.2)'}`,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {ct.required ? 'Always Active' : 'Consent Required'}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                      {ct.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ct.examples.map(ex => (
                        <span
                          key={ex}
                          className="text-[11px] px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(0,0,0,0.04)', color: '#64748B', fontFamily: 'Inter, sans-serif', border: '1px solid rgba(0,0,0,0.07)' }}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Managing cookies */}
            <div className="mb-10">
              <h2 className="font-bold mb-3 text-[17px]" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                How to Manage Cookies
              </h2>
              <p className="text-[14px] leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                You can control and/or delete cookies through your browser settings. Instructions for common browsers:
              </p>
              <ul className="space-y-1.5">
                {[
                  'Chrome: Settings → Privacy and Security → Cookies',
                  'Firefox: Options → Privacy & Security → Cookies',
                  'Safari: Preferences → Privacy → Manage Website Data',
                  'Edge: Settings → Privacy, Search and Services → Cookies',
                ].map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13.5px]"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}
                  >
                    <span style={{ color: '#14B8A6', marginTop: '2px', flexShrink: 0 }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] mt-3 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#94A3B8' }}>
                Note: Disabling essential cookies may affect the functionality of this website.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-bold mb-3 text-[17px]" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                Questions?
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                If you have any questions about our use of cookies, contact us at{' '}
                <a href="mailto:info@vistaarimmigration.com" style={{ color: '#0D9488' }}>
                  info@vistaarimmigration.com
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
