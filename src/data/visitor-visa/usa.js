export const usaVisitorVisa = {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    tagline: 'Tourism, Business & Family Visits',
    overview: 'The US B1/B2 Visitor Visa is a combined non-immigrant visa for tourism, business meetings, family visits and medical treatment. Most applicants receive a multiple-entry visa valid up to 10 years — though actual stay per visit is determined by CBP at entry, usually up to 6 months.',
    heroColor: '#3C3B6E',
    accentColor: '#6366F1',
    fee: '$185',
    maxStay: '6 Months',
    processing: '2–3 Months',
    successRate: '89%',
    status: 'active',

    visaTypes: [
        { type: 'B1 — Business Visitor', validity: 'Up to 10 Years', stay: 'Up to 6 Months/Entry', fee: '$185 + $250' },
        { type: 'B2 — Tourism & Family', validity: 'Up to 10 Years', stay: 'Up to 6 Months/Entry', fee: '$185 + $250' },
        { type: 'B1/B2 — Combined (Most Common)', validity: 'Up to 10 Years', stay: 'Up to 6 Months/Entry', fee: '$185 + $250' },
    ],

    highlights: [
        { icon: '🎯', text: '89% Approval (Strong Profile)' },
        { icon: '🔄', text: 'Up to 10 Years Multi-Entry' },
        { icon: '📅', text: '6 Months Per Visit' },
        { icon: '💼', text: 'Business + Tourism Combined' },
        { icon: '⚡', text: 'Interview Waiver (Renewals)' },
        { icon: '🌐', text: 'Social Media Check Applied' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for at least 6 months beyond intended stay' },
        { item: 'DS-160 Confirmation Page', detail: 'Mandatory online application form — print barcode page' },
        { item: 'Visa Fee Receipt', detail: '$185 MRV fee + $250 Visa Integrity Fee — total ~$435' },
        { item: 'Appointment Confirmation', detail: 'Biometrics + embassy interview booking confirmation' },
        { item: 'Bank Statements', detail: '4–6 months — stable income, no suspicious deposits' },
        { item: 'Employment / Business Proof', detail: 'Employment letter, leave approval or business registration' },
        { item: 'Travel Itinerary', detail: 'Tentative hotel and flight plan — not mandatory to book first' },
        { item: 'Ties to Home Country', detail: 'Job, property, family — proves intent to return' },
        { item: 'Travel History', detail: 'Previous Schengen, UK, Canada visas strengthen application' },
    ],

    fees: [
        { label: 'MRV Application Fee', amount: '$185', note: 'Non-refundable — valid 365 days from payment' },
        { label: 'Visa Integrity Fee', amount: '$250', note: 'New from Oct 2025 — non-refundable if compliant' },
        { label: 'Total Fees', amount: '~$435', note: 'Plus reciprocity fees for some nationalities' },
        { label: 'Visa Bond (30+ countries)', amount: '$5k–$15k', note: 'Refundable bond — high overstay-risk nationalities' },
    ],

    processingTime: '2–3 Months',
    successRate: '89%',

    processingOptions: [
        { type: 'Standard Processing', time: '2–3 Months', fee: 'Included', note: 'Interview wait + 3–10 days after' },
        { type: 'Interview Waiver (Dropbox)', time: 'Faster', fee: 'Included', note: 'Eligible renewals only' },
        { type: 'After Interview Decision', time: '3–10 Days', fee: 'Included', note: 'Administrative processing may apply' },
    ],

    permitted: [
        'Tourism & holidays',
        'Visiting family & friends',
        'Business meetings & conferences',
        'Medical treatment',
        'Short recreational courses',
        'Contract negotiations',
    ],

    notPermitted: [
        'Paid employment',
        'Full-time study',
        'Permanent residence',
        'Overstaying allowed duration',
        'Unauthorised work',
    ],

    importantUpdates: [
        { update: 'New $250 Visa Integrity Fee added — total cost now ~$435 (from Oct 2025)', type: 'fee' },
        { update: 'MRV fee rising to $205 from May 30, 2026 — total ~$455', type: 'fee' },
        { update: 'Visa bond $5,000–$15,000 now required for 30+ high overstay-risk nationalities', type: 'warning' },
        { update: 'Social media history, LinkedIn profiles reviewed at border entry (from Sep 2025)', type: 'warning' },
        { update: 'Consular backlogs in some countries stretch into 2027 — apply at least 6 months early', type: 'warning' },
        { update: 'Interview Waiver (Dropbox) expanded for eligible renewals — no interview needed', type: 'positive' },
        { update: 'CBP officers now reviewing LinkedIn and social media at ports of entry', type: 'warning' },
    ],

    refusalReasons: [
        'Section 214(b) — Weak ties to home country',
        'Insufficient or unstable financial proof',
        'Poor or inconsistent interview answers',
        'No international travel history',
        'Previous US visa violations or overstays',
        'Suspicious social media content',
        'Incomplete or fake documentation',
    ],

    approvalTips: [
        { tip: 'Strong Home Ties', desc: 'Stable job, property, family — prove you will return home after visit' },
        { tip: 'Confident Interview', desc: 'Be honest, direct and clear — most interviews last only 2–5 minutes' },
        { tip: 'Clean Finances', desc: '4–6 months stable bank history, genuine income, no suspicious transfers' },
        { tip: 'Travel History', desc: 'Previous UK, Schengen, Canada, Australia visas significantly strengthen profile' },
        { tip: 'Social Media Hygiene', desc: 'Review your social media — US officers check profiles at border entry' },
    ],

    steps: [
        { step: 1, title: 'Complete DS-160 Form', desc: 'Fill online at ceac.state.gov — print confirmation barcode page' },
        { step: 2, title: 'Pay Visa Fees', desc: 'Pay $185 MRV + $250 Integrity Fee (~$435 total) — keep receipt' },
        { step: 3, title: 'Create Visa Profile', desc: 'Register on US visa scheduling portal for your country' },
        { step: 4, title: 'Book Appointments', desc: 'Schedule biometrics + embassy interview — apply 6 months early' },
        { step: 5, title: 'Attend Biometrics', desc: 'Provide fingerprints and photograph at visa application centre' },
        { step: 6, title: 'Attend Embassy Interview', desc: 'Answer officer questions — honest, clear, confident answers' },
        { step: 7, title: 'Await Visa Decision', desc: 'Approved / Refused / Administrative Processing (3–10 working days)' },
        { step: 8, title: 'Collect Passport with Visa', desc: 'Receive passport with B1/B2 visa stamp — check all details' },
    ],

    faqs: [
        { q: 'What is Section 214(b) refusal?', a: 'The most common US visa refusal reason. The officer believes you may not return home — due to weak ties, poor finances or unclear travel purpose. It can be overcome by strengthening your profile and reapplying.' },
        { q: 'What is the Visa Integrity Fee?', a: 'A new $250 non-refundable fee added from October 2025 on top of the $185 application fee — total ~$435. It aims to reduce overstays and is separate from country-specific reciprocity fees.' },
        { q: 'What is the Visa Bond?', a: 'From 2026, applicants from 30+ high overstay-risk countries must pay a refundable $5,000–$15,000 bond. It is returned if you comply with visa conditions and leave the US on time.' },
        { q: 'Can I work on a B1/B2 visa?', a: 'No. Paid work is strictly prohibited. Business activities like meetings, conferences and negotiations are allowed on B1. Any employment can result in deportation and permanent visa ban.' },
        { q: 'How long is visa validity vs stay?', a: 'These are different. Visa validity (up to 10 years) is how long you can use the visa to enter. Actual stay per visit is decided by CBP at the US border — usually up to 6 months.' },
        { q: 'Is interview mandatory?', a: 'Yes for most first-time applicants. Eligible renewals may qualify for Interview Waiver (Dropbox processing) — no in-person interview needed. Check eligibility on the US embassy website in your country.' },
        { q: 'How early should I apply?', a: 'Apply at least 3–6 months before travel. Some countries face appointment backlogs stretching into 2027. The MRV fee receipt is valid for 365 days so you can pay early and schedule later.' },
        { q: 'Can I extend my stay in the US?', a: 'Possible in limited situations by filing Form I-539 with USCIS before your authorized stay expires. It is not guaranteed and processing can be slow. Overstaying has serious consequences.' },
    ],

    whyVistaar: [
        'Expert B1/B2 Visa Guidance',
        'DS-160 Form Assistance',
        'Interview Preparation & Coaching',
        'Document Review & Strategy',
        'Profile Strength Assessment',
        'High Approval Rate',
    ],
}