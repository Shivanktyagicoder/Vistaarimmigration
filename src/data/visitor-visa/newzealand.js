export const newzealandVisitorVisa = {
    id: 'newzealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Tourism, Family Visits & Short-Term Stay',
    overview: 'The New Zealand Visitor Visa allows foreign nationals to visit New Zealand for tourism, family visits, business meetings or medical treatment. Stay up to 9 months depending on your passport. Visa-waiver country nationals only need a NZeTA — full visitor visa required for non-waiver countries.',
    heroColor: '#00247D',
    accentColor: '#3B82F6',
    fee: 'NZD $211–$246',
    maxStay: '6–9 Months',
    processing: '8–36 Days',
    successRate: '92%',
    status: 'active',

    visaTypes: [
        { type: 'Visitor Visa (Non-Waiver Countries)', validity: 'Single/Multiple', stay: 'Up to 9 Months', fee: 'NZD $246' },
        { type: 'NZeTA (Visa-Waiver Countries)', validity: '2 Years', stay: 'Up to 90 Days', fee: 'NZD $17–23' },
        { type: 'IVL — International Visitor Levy', validity: 'Per trip', stay: 'All visitors', fee: 'NZD $35' },
        { type: 'VAC Offline Application', validity: 'Single/Multiple', stay: 'Up to 9 Months', fee: '+VAC service fee' },
    ],

    highlights: [
        { icon: '🎯', text: '92% Success Rate' },
        { icon: '📅', text: 'Stay Up to 9 Months' },
        { icon: '⚡', text: '90% Processed in 36 Days' },
        { icon: '🖥️', text: 'Fully Online via ADEPT Portal' },
        { icon: '🌿', text: 'NZeTA for 60+ Waiver Countries' },
        { icon: '💰', text: 'NZD $35 Tourism Levy (IVL)' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for 3+ months beyond intended departure date' },
        { item: 'Online Application via ADEPT', detail: 'Mandatory from Aug 2025 — all applications through ADEPT portal' },
        { item: 'Proof of Funds', detail: 'NZD $1,000/month or NZD $400/month if accommodation pre-paid' },
        { item: 'Return or Onward Ticket', detail: 'Confirmed outward travel from New Zealand' },
        { item: 'Employment / Business Proof', detail: 'Employment letter, leave approval or business registration' },
        { item: 'Bank Statements', detail: '3–6 months — stable income, sufficient for entire stay' },
        { item: 'Travel / Health Insurance', detail: 'Strongly recommended — not mandatory but helps approval' },
        { item: 'Accommodation Proof', detail: 'Hotel bookings or invitation letter from host in NZ' },
        { item: 'Genuine Visitor Intent', detail: 'Must demonstrate intent to leave NZ after visit' },
        { item: 'Character & Health', detail: 'No serious criminal history — medical exam if required' },
    ],

    fees: [
        { label: 'Visitor Visa Application Fee', amount: 'NZD $211–$246', note: 'Confirmed at application via ADEPT' },
        { label: 'International Visitor Levy (IVL)', amount: 'NZD $35', note: 'Conservation & tourism levy — all visitors' },
        { label: 'NZeTA (Visa-Waiver Countries)', amount: 'NZD $17–23', note: 'USA, UK, Canada, EU, Japan etc.' },
        { label: 'VAC Service Fee (Offline)', amount: 'Varies', note: 'Increased from Jan 1, 2026' },
        { label: 'Medical Examination', amount: 'Varies', note: 'If required by Immigration NZ' },
    ],

    processingTime: '8–36 Days',
    successRate: '92%',

    processingOptions: [
        { type: 'Average Processing', time: '~8 Days', fee: 'Included', note: 'For most straightforward applications' },
        { type: '90% of Applications', time: '36 Days', fee: 'Included', note: 'Allow 4 weeks minimum — peak season longer' },
        { type: 'Summer Peak (Oct–Mar)', time: 'Longer', fee: 'Included', note: 'INZ processes 130,000+ apps in peak season' },
        { type: 'NZeTA (Waiver Countries)', time: 'Instant', fee: 'NZD $23', note: 'Approved instantly for most applicants' },
    ],

    nzetaInfo: {
        title: 'Do You Need a Visa or NZeTA?',
        desc: 'New Zealand has two entry systems — check which applies to you:',
        items: [
            { type: 'Australian Citizens', requirement: 'No visa needed', note: 'Can live and work freely in NZ' },
            { type: 'Visa-Waiver Countries', requirement: 'NZeTA only', note: 'USA, UK, Canada, EU, Japan, Singapore — NZD $23' },
            { type: 'Non-Waiver Countries', requirement: 'Visitor Visa', note: 'India, Pakistan, China, Philippines etc.' },
            { type: 'All Visitors (non-AU/NZ)', requirement: 'IVL + NZeTA/Visa', note: 'NZD $35 International Visitor Levy applies' },
        ],
    },

    permitted: [
        'Tourism & sightseeing',
        'Visiting family & friends',
        'Business meetings & conferences',
        'Short-term study (up to 3 months)',
        'Medical treatment',
        'Transit through New Zealand',
    ],

    notPermitted: [
        'Paid employment or work',
        'Long-term study enrollment',
        'Claiming social benefits',
        'Permanent residence application',
        'Overstaying authorised period',
    ],

    importantUpdates: [
        { update: 'VAC service fees increased from January 1, 2026 — due to rising costs and inflation', type: 'fee' },
        { update: 'All visa applications mandatory via ADEPT online portal from August 2025', type: 'policy' },
        { update: 'Summer peak Oct–Mar: INZ processed 130,000+ apps since Sep 2024 — apply 4+ weeks early', type: 'warning' },
        { update: 'IVL (International Visitor Levy) NZD $35 applies to all visitors — included in NZeTA fee', type: 'policy' },
        { update: 'Missing documents or untranslated files = likely decline — submit complete application only', type: 'warning' },
        { update: 'Funds requirement: NZD $1,000/month OR NZD $400/month if accommodation is pre-paid', type: 'policy' },
        { update: 'New quality assurance framework for education providers introduced 2026 — affects student visas', type: 'policy' },
    ],

    refusalReasons: [
        'Missing or incomplete supporting documents',
        'Untranslated documents (English required)',
        'Insufficient proof of funds',
        'No confirmed return or onward travel',
        'Weak genuine visitor intent',
        'Previous NZ immigration violations',
        'Character or health requirements not met',
        'Applied too close to travel date',
    ],

    approvalTips: [
        { tip: 'Submit Complete Application', desc: 'INZ explicitly warns — missing documents or untranslated files are likely declined' },
        { tip: 'Apply 4+ Weeks Early', desc: 'Peak season Oct–Mar is INZ\'s busiest — apply at least 4 weeks before travel' },
        { tip: 'Show Funds Clearly', desc: 'NZD $1,000/month needed — or $400/month if accommodation is fully pre-paid' },
        { tip: 'Translate All Documents', desc: 'All non-English documents must be professionally translated — no exceptions' },
        { tip: 'Confirm Return Travel', desc: 'Onward or return ticket is required — shows genuine temporary stay intent' },
    ],

    steps: [
        { step: 1, title: 'Check Visa or NZeTA', desc: 'Confirm if you need full Visitor Visa or NZeTA based on your passport' },
        { step: 2, title: 'Create ADEPT Account', desc: 'All applications via ADEPT portal from Aug 2025 — mandatory' },
        { step: 3, title: 'Complete Online Application', desc: 'Fill accurately — errors or missing info cause delays or refusal' },
        { step: 4, title: 'Upload All Documents', desc: 'Passport, funds, employment, accommodation, return ticket — all translated' },
        { step: 5, title: 'Pay Fees Online', desc: 'NZD $211–$246 application + NZD $35 IVL + VAC fee if applicable' },
        { step: 6, title: 'Attend Biometrics (if needed)', desc: 'Some nationalities required — check INZ guidance for your country' },
        { step: 7, title: 'Await Decision', desc: 'Average 8 days — allow 4 weeks. Track via ADEPT portal' },
        { step: 8, title: 'Receive Visa & Travel', desc: 'Electronic visa linked to passport — entry confirmed at NZ border' },
    ],

    faqs: [
        { q: 'Do I need a visa or NZeTA?', a: 'It depends on your passport. Citizens of 60+ visa-waiver countries (USA, UK, Canada, EU, Japan, Singapore) only need an NZeTA (NZD $17–23, approved instantly). All other nationalities require a full Visitor Visa (NZD $246). Australian citizens need neither.' },
        { q: 'What is the IVL?', a: 'The International Visitor Levy (IVL) is a NZD $35 conservation and tourism levy applied to all international visitors to New Zealand (except Australians and Pacific Island citizens). It is included in the NZeTA fee or added to your visitor visa fee.' },
        { q: 'How much money must I show?', a: 'Immigration NZ requires NZD $1,000 per month of your intended stay. If your accommodation is fully pre-paid, this reduces to NZD $400 per month. Show 3–6 months of clean bank statements.' },
        { q: 'How long can I stay?', a: 'The NZ Visitor Visa allows stays of up to 6 months or 9 months depending on your passport nationality and circumstances. The border officer confirms your authorised stay period on arrival.' },
        { q: 'What is ADEPT?', a: 'ADEPT (Advanced Digital Experience Platform for Transactions) is Immigration New Zealand\'s mandatory online application portal from August 2025. All visitor visa applications must be submitted through ADEPT — paper applications are no longer accepted.' },
        { q: 'Can I work on a visitor visa?', a: 'No. The NZ Visitor Visa does not permit paid employment. If you wish to work in New Zealand, you need a separate work visa. Working without authorisation results in deportation and future visa bans.' },
        { q: 'Why is my application likely to be declined?', a: 'The two main INZ-cited reasons are: (1) missing supporting documents, and (2) documents not translated into English. Always submit a complete, fully translated application.' },
        { q: 'How early should I apply?', a: 'Apply at least 4 weeks before travel — longer during peak season (October to March) when INZ processes over 130,000 applications. Average processing is 8 days but 90% of applications take up to 36 days.' },
    ],

    whyVistaar: [
        'Expert NZ Visitor Visa Guidance',
        'ADEPT Application Support',
        'Document Translation Checklist',
        'Funds Calculation Assistance',
        'NZeTA vs Visa Assessment',
        'High Approval Rate',
    ],
}