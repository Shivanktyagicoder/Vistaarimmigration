export const ukVisitorVisa = {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Tourism, Family Visits & Business',
    overview: 'The UK Standard Visitor Visa allows you to visit the United Kingdom for tourism, family visits, business meetings, conferences, short-term study and medical treatment. Stay up to 6 months per visit with long-term multi-entry options available.',
    heroColor: '#012169',
    accentColor: '#4169E1',
    status: 'active',

    visaTypes: [
        { type: 'Standard Visitor', validity: '6 Months', stay: 'Up to 6 Months', fee: '£135' },
        { type: 'Long-Term (2 Year)', validity: '2 Years', stay: 'Max 6 Months/Visit', fee: '£506' },
        { type: 'Long-Term (5 Year)', validity: '5 Years', stay: 'Max 6 Months/Visit', fee: '£903' },
        { type: 'Long-Term (10 Year)', validity: '10 Years', stay: 'Max 6 Months/Visit', fee: '£1,128' },
        { type: 'Medical Visitor', validity: '11 Months', stay: 'Medical Treatment', fee: '£234' },
        { type: 'Academic Visitor', validity: '12 Months', stay: 'Academic Research', fee: '£234' },
    ],

    highlights: [
        { icon: '🗓️', text: 'Up to 6 Months Per Visit' },
        { icon: '🔄', text: 'Multi-Entry Long-Term Options' },
        { icon: '💼', text: 'Business & Tourism Allowed' },
        { icon: '⚡', text: 'Priority — 5 Working Days' },
        { icon: '📱', text: 'Digital eVisa System (2026)' },
        { icon: '🏥', text: 'Medical & Academic Visa Available' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for full duration of your intended stay' },
        { item: 'Online Visa Application', detail: 'Completed via official UKVI portal' },
        { item: 'Bank Statements', detail: '3–6 months preferred — stable income, no large sudden deposits' },
        { item: 'Employment/Business Proof', detail: 'Employment letter, leave approval or business registration' },
        { item: 'Salary Slips / Income Proof', detail: 'Recent payslips or tax returns' },
        { item: 'Hotel & Flight Bookings', detail: 'Confirmed itinerary — dummy booking acceptable at apply stage' },
        { item: 'Cover Letter', detail: 'Explaining travel purpose, duration and return plans' },
        { item: 'Invitation Letter', detail: 'If visiting family or friends — with sponsor documents' },
        { item: 'Ties to Home Country', detail: 'Property, family, employment — proof you will return' },
        { item: 'Biometrics', detail: 'Fingerprints + photograph at VFS Global centre' },
    ],

    fees: [
        { label: 'Standard Visitor (6 Months)', amount: '£135', note: 'Updated April 8, 2026' },
        { label: 'Long-Term Visa (2 Years)', amount: '£506', note: 'Best value for 2+ visits' },
        { label: 'Long-Term Visa (5 Years)', amount: '£903', note: 'Frequent travellers' },
        { label: 'Long-Term Visa (10 Years)', amount: '£1,128', note: 'Max validity option' },
        { label: 'Priority Service', amount: '+£500', note: '5 working days decision' },
        { label: 'Super Priority Service', amount: '+£1,000', note: 'Next working day decision' },
        { label: 'Medical / Academic Visa', amount: '£234', note: 'Up to 11–12 months stay' },
    ],

    processingTime: '3 Weeks',
    successRate: '94%',

    processingOptions: [
        { type: 'Standard Processing', time: '3 Weeks', fee: 'Included', note: '15 working days from biometrics' },
        { type: 'Priority Service', time: '5 Working Days', fee: '+£500', note: 'Available in most countries' },
        { type: 'Super Priority', time: 'Next Working Day', fee: '+£1,000', note: 'Selected countries only' },
    ],

    permitted: [
        'Tourism & holidays',
        'Visiting family & friends',
        'Business meetings & conferences',
        'Short-term study (up to 6 months)',
        'Medical treatment',
        'Academic research visits',
    ],

    notPermitted: [
        'Paid employment or work',
        'Claiming public funds',
        'Permanent residence',
        'Marriage (separate visa required)',
        'Long-term study',
    ],

    importantUpdates: [
        { update: 'Visa fee increased to £135 for 6-month visa — effective April 8, 2026', type: 'fee' },
        { update: 'Long-term visas now £506 (2yr), £903 (5yr), £1,128 (10yr) from April 2026', type: 'fee' },
        { update: 'ETA (Electronic Travel Authorisation) expanded — £20 for visa-exempt nationals', type: 'policy' },
        { update: 'Digital eVisa system rolling out — passport sticker phasing out gradually', type: 'positive' },
        { update: 'Priority service fee remains £500 — not changed in April 2026 updates', type: 'policy' },
        { update: 'Over 2 million visitor visa applications processed annually — apply early', type: 'warning' },
    ],

    refusalReasons: [
        'Weak bank statements or large sudden deposits',
        'No clear ties to home country',
        'Incomplete or inconsistent documentation',
        'Unclear travel purpose or weak cover letter',
        'Previous overstays or visa violations',
        'Suspicious travel plans or itinerary',
    ],

    approvalTips: [
        { tip: 'Strong Financials', desc: '3–6 months clean bank history, stable income, no suspicious deposits' },
        { tip: 'Clear Cover Letter', desc: 'Explain purpose, funding, duration and strong intention to return' },
        { tip: 'Travel History', desc: 'Previous Schengen, Canada, USA, Australia visas significantly help' },
        { tip: 'Home Country Ties', desc: 'Show property, employment, family — proof you will return home' },
        { tip: 'Genuine Documents', desc: 'Never submit fake or edited bank statements or employment letters' },
    ],

    steps: [
        { step: 1, title: 'Free Consultation', desc: 'Assess profile, visa type and documentation needs' },
        { step: 2, title: 'Complete Online Application', desc: 'Apply on official UKVI portal — fill accurately' },
        { step: 3, title: 'Pay Visa Fee', desc: 'Pay £135+ online — non-refundable even if refused' },
        { step: 4, title: 'Book Biometrics Appointment', desc: 'Schedule at VFS Global centre in your country' },
        { step: 5, title: 'Upload Supporting Documents', desc: 'Financial proof, employment, travel itinerary, cover letter' },
        { step: 6, title: 'Attend Biometrics', desc: 'Provide fingerprints and photograph at VFS centre' },
        { step: 7, title: 'Await Decision', desc: '~3 weeks standard or 5 days priority or next day super priority' },
        { step: 8, title: 'Receive Visa / eVisa', desc: 'Passport returned with visa sticker or digital eVisa confirmation' },
    ],

    faqs: [
        { q: 'Can I work on a UK visitor visa?', a: 'No. Paid employment is strictly prohibited. Any work activity can lead to deportation and future visa bans.' },
        { q: 'Is travel insurance required?', a: 'Not mandatory but highly recommended. Some embassies may ask for proof of coverage during peak periods.' },
        { q: 'Can I extend my visitor visa?', a: 'Extensions are generally not permitted except in medical emergencies or exceptional circumstances. You must leave and reapply.' },
        { q: 'Can I switch to a work visa inside UK?', a: 'No. You cannot switch from a visitor visa to a work or study visa from inside the UK. You must return home and apply for the correct visa.' },
        { q: 'Is a flight ticket needed before applying?', a: 'No. A dummy/temporary flight reservation is safer — do not buy non-refundable tickets before visa approval.' },
        { q: 'Which long-term visa is best value?', a: 'If you plan 2+ visits: the 2-year visa at £506 works out cheaper than multiple 6-month applications. For frequent travellers, the 10-year at £1,128 is best value.' },
        { q: 'What is ETA?', a: 'ETA (Electronic Travel Authorisation) is a new £20 pre-travel requirement for visa-EXEMPT nationalities (e.g. US, EU). If you need a visitor visa, ETA does not apply to you.' },
        { q: 'What is the approval rate?', a: 'Approximately 77–94% for well-prepared genuine applications. Refusals are most common due to weak financials, unclear purpose or missing documents.' },
    ],

    whyVistaar: [
        'Expert UK Visitor Visa Guidance',
        'Cover Letter Writing Support',
        'Document Checklist & Review',
        'Profile Assessment & Strategy',
        'High Approval Rate',
        'End-to-End Application Support',
    ],
}