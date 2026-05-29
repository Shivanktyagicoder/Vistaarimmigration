export const australiaVisitorVisa = {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    tagline: 'Tourism, Family Visits & Business',
    overview: 'The Australia Visitor Visa (Subclass 600) allows foreign nationals to visit Australia temporarily for tourism, family visits, business activities or short-term study. Available in multiple streams — Tourist, Business, Sponsored Family and Frequent Traveller — each with different processing times and requirements.',
    heroColor: '#00843D',
    accentColor: '#22C55E',
    fee: 'AUD $190+',
    maxStay: '3–12 Months',
    processing: '1 Day – 5 Weeks',
    successRate: '90%',
    status: 'active',

    visaTypes: [
        { type: 'Tourist Stream', validity: 'Up to 12 Months', stay: '3–12 Months', fee: 'AUD $190+' },
        { type: 'Business Visitor Stream', validity: 'Up to 12 Months', stay: 'Short-term', fee: 'AUD $190+' },
        { type: 'Sponsored Family Stream', validity: 'Up to 12 Months', stay: '3–12 Months', fee: 'AUD $190+' },
        { type: 'Frequent Traveller Stream', validity: 'Up to 3 Years', stay: 'Multi-entry', fee: 'AUD $190+' },
        { type: 'Priority Business (48hr)', validity: 'Up to 12 Months', stay: 'Short-term', fee: '+AUD $1,000' },
    ],

    highlights: [
        { icon: '🎯', text: '90% Approval (Strong Profile)' },
        { icon: '⚡', text: 'Tourist: 50% Decided Same Day' },
        { icon: '💼', text: 'Business: 75% Done in 9 Days' },
        { icon: '🔄', text: 'Frequent Traveller — 3 Years' },
        { icon: '👨‍👩‍👧', text: 'Sponsored Family Stream' },
        { icon: '🚫', text: 'No Visa Hop to Study (Jul 2024)' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for full duration of intended stay' },
        { item: 'ImmiAccount Application', detail: 'Online application via Australian ImmiAccount portal' },
        { item: 'Bank Statements', detail: '3–6 months — showing sufficient funds for entire stay' },
        { item: 'Employment / Business Proof', detail: 'Employment letter, payslips or business registration' },
        { item: 'Travel Itinerary', detail: 'Planned accommodation and flight details' },
        { item: 'Health Insurance', detail: 'Strongly recommended — not mandatory for tourist stream' },
        { item: 'Genuine Temporary Intent', detail: 'Must demonstrate intent to leave Australia after visit' },
        { item: 'Character & Health Requirements', detail: 'No serious criminal history — medical exam if required' },
        { item: 'Sponsorship Documents', detail: 'If applying under Sponsored Family Stream — sponsor details' },
        { item: 'Biometrics', detail: 'Required for additional nationalities from February 2026' },
    ],

    fees: [
        { label: 'Base Application Fee (Offshore)', amount: 'AUD $190+', note: 'Exact amount confirmed at application' },
        { label: 'Priority Business Processing', amount: '+AUD $1,000', note: '48-hour turnaround — India, UAE, China' },
        { label: 'Biometrics (if required)', amount: 'AUD $55–70', note: 'Expanded to more nationalities Feb 2026' },
        { label: 'Health Examination (if required)', amount: 'Varies', note: 'From DIBP approved panel physician' },
    ],

    processingTime: '1 Day – 5 Weeks',
    successRate: '90%',

    processingOptions: [
        { type: 'Tourist Stream', time: '1 Day – 5 Weeks', fee: 'Included', note: '50% decided quickly, 90% within 33+ days' },
        { type: 'Business Visitor Stream', time: '9–20 Days', fee: 'Included', note: '75% in 9 days, 90% within 20 days' },
        { type: 'Priority Business (48hr)', time: '48 Hours', fee: '+AUD $1,000', note: 'India, UAE, China applicants only' },
        { type: 'Sponsored Family Stream', time: 'Longer', fee: 'Included', note: 'Varies — sponsor documents add time' },
    ],

    permitted: [
        'Tourism & sightseeing',
        'Visiting family & friends',
        'Business meetings & conferences',
        'Short-term study (up to 3 months)',
        'Medical treatment',
        'Transit through Australia',
    ],

    notPermitted: [
        'Paid employment or work',
        'Long-term study enrollment',
        'Switching to student visa from inside Australia',
        'Claiming social benefits',
        'Permanent residence',
    ],

    importantUpdates: [
        { update: 'Visa hopping banned July 2024 — visitor visa holders CANNOT switch to student visa from inside Australia', type: 'warning' },
        { update: 'Straightforward tourist applications now decided in 1 day — major 2026 improvement', type: 'positive' },
        { update: 'Biometric requirements expanded to additional nationalities from February 2026', type: 'policy' },
        { update: 'General Fast-Track discontinued — Priority Processing (AUD $1,000, 48hrs) available for business only', type: 'policy' },
        { update: '$18.3 million government investment in processing capacity — improving overall times', type: 'positive' },
        { update: 'Sponsored Family Stream may require security bond — check at application time', type: 'warning' },
    ],

    refusalReasons: [
        'Lack of genuine temporary intent',
        'Insufficient financial proof',
        'Poor or no travel history',
        'Incomplete documentation',
        'Character or health requirements not met',
        'Previous Australian visa violations',
        'Weak ties to home country',
    ],

    approvalTips: [
        { tip: 'Genuine Temporary Intent', desc: 'Clearly demonstrate you will leave Australia — employment, family, property ties' },
        { tip: 'Strong Financials', desc: '3–6 months clean bank history showing sufficient funds for your entire stay' },
        { tip: 'Right Stream Selection', desc: 'Choose the correct stream — Tourist, Business, Sponsored or Frequent Traveller' },
        { tip: 'Complete Documentation', desc: 'A complete, well-organised application is the single best way to avoid delays' },
        { tip: 'Apply Early', desc: 'Tourist stream can vary widely — apply 4–6 weeks early minimum for peace of mind' },
    ],

    steps: [
        { step: 1, title: 'Choose Correct Visa Stream', desc: 'Tourist, Business, Sponsored Family or Frequent Traveller — matters for processing time' },
        { step: 2, title: 'Create ImmiAccount', desc: 'Register on the Department of Home Affairs ImmiAccount portal' },
        { step: 3, title: 'Complete Online Application', desc: 'Fill application accurately — errors cause delays or refusal' },
        { step: 4, title: 'Upload Supporting Documents', desc: 'Passport, bank statements, employment proof, travel itinerary' },
        { step: 5, title: 'Pay Application Fee', desc: 'AUD $190+ online — fee confirmed at application stage' },
        { step: 6, title: 'Provide Biometrics (if required)', desc: 'Attend VAC if biometrics requested — expanded nationalities from Feb 2026' },
        { step: 7, title: 'Await Decision', desc: 'Tourist: 1 day to 5 weeks | Business: 9–20 days | Priority: 48 hours' },
        { step: 8, title: 'Receive Visa Grant', desc: 'Visa granted digitally — linked to passport, no sticker required' },
    ],

    faqs: [
        { q: 'What is Subclass 600?', a: 'The Visitor Visa Subclass 600 is Australia\'s main temporary visitor visa covering tourism, family visits, business activities and short-term study. It has multiple streams — Tourist, Business, Sponsored Family and Frequent Traveller.' },
        { q: 'Can I switch to student visa inside Australia?', a: 'No. From July 2024, visitor visa holders cannot switch to a student visa from within Australia. You must depart and apply for a student visa from your home country.' },
        { q: 'How long can I stay?', a: 'Duration depends on the stream and what the visa grant letter specifies — typically 3 months for most applicants. Some tourist visas allow up to 12 months. The Frequent Traveller stream offers multi-entry for up to 3 years.' },
        { q: 'Is the visa digital or a sticker?', a: 'Australia\'s visitor visa is granted digitally and linked to your passport number — no physical sticker. Carry your grant letter when travelling.' },
        { q: 'What is the Sponsored Family Stream?', a: 'This stream requires an eligible Australian citizen, PR or approved sponsor to formally sponsor your visit. A security bond may be required. It has longer processing times than the Tourist Stream.' },
        { q: 'Is Priority Processing available?', a: 'General fast-track has been discontinued. A Priority Consideration Service (AUD $1,000 extra, 48-hour target) is available specifically for business visitors from India, UAE and China.' },
        { q: 'Can I work on a visitor visa?', a: 'No. The Subclass 600 does not permit paid employment. Business visitors can attend meetings and conferences but cannot receive payment from an Australian source.' },
        { q: 'How early should I apply?', a: 'Apply at least 4–6 weeks before travel for tourist applications. Business visitors should apply 3–4 weeks early. Note that 90% of tourist applications take 33+ days despite some being decided in 1 day.' },
    ],

    whyVistaar: [
        'Expert Australia Visitor Visa Guidance',
        'Correct Stream Selection',
        'Document Checklist & Review',
        'Genuine Temporary Intent Statement',
        'High Approval Rate',
        'End-to-End Application Support',
    ],
}