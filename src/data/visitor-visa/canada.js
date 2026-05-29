export const canadaVisitorVisa = {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    tagline: 'Tourism, Family Visits & Business',
    overview: 'The Canada Visitor Visa (Temporary Resident Visa / TRV) allows foreign nationals to visit Canada for tourism, family visits, business meetings or transit. Most applicants receive a multiple-entry visa valid up to 10 years — actual stay per visit is typically 6 months as determined by CBSA at entry.',
    heroColor: '#D81920',
    accentColor: '#EF4444',
    fee: 'CAD $100',
    maxStay: '6 Months',
    processing: '2–3 Months',
    successRate: '91%',
    status: 'active',

    visaTypes: [
        { type: 'Single-Entry TRV', validity: 'Per trip', stay: 'Up to 6 Months', fee: 'CAD $100' },
        { type: 'Multiple-Entry TRV', validity: 'Up to 10 Years', stay: 'Up to 6 Months/Visit', fee: 'CAD $100' },
        { type: 'Family Application', validity: 'Up to 10 Years', stay: 'Up to 6 Months/Visit', fee: 'CAD $500 (5+ people)' },
        { type: 'Super Visa', validity: 'Up to 10 Years', stay: 'Up to 5 Years/Visit', fee: 'CAD $100' },
    ],

    highlights: [
        { icon: '🎯', text: '65–72% Approval (Global Avg)' },
        { icon: '🔄', text: 'Multi-Entry Up to 10 Years' },
        { icon: '📅', text: '6 Months Per Visit' },
        { icon: '👨‍👩‍👧', text: 'Super Visa for Parents (5yr)' },
        { icon: '💻', text: 'Fully Online Application' },
        { icon: '🍁', text: 'Tourism, Family & Business' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for full duration of intended stay + buffer' },
        { item: 'IRCC Online Application', detail: 'Applied via IRCC portal — most applications fully online' },
        { item: 'Bank Statements', detail: '3–6 months — stable income, sufficient funds for stay' },
        { item: 'Employment / Business Proof', detail: 'Employment letter, leave approval or business documents' },
        { item: 'Travel Itinerary', detail: 'Hotel bookings, flight plans — shows clear travel purpose' },
        { item: 'Ties to Home Country', detail: 'Job, family, property — proves you will return home' },
        { item: 'Invitation Letter', detail: 'If visiting family or friends in Canada — with host documents' },
        { item: 'Biometrics', detail: 'CAD $85/person or $170/family — at VAC centre' },
        { item: 'Cover Letter', detail: 'Explaining visit purpose, duration and return intention' },
        { item: 'Travel History', detail: 'Previous visas to UK, USA, Schengen, Australia help' },
    ],

    fees: [
        { label: 'Visitor Visa (TRV) — Per Person', amount: 'CAD $100', note: 'Single or multiple-entry' },
        { label: 'Family Application (5+ people)', amount: 'CAD $500', note: 'All family members together' },
        { label: 'Biometrics — Per Person', amount: 'CAD $85', note: 'Required for most nationalities' },
        { label: 'Biometrics — Family', amount: 'CAD $170', note: 'All family members applying together' },
        { label: 'Visitor Record Extension', amount: 'CAD $100', note: 'Extend stay from inside Canada' },
    ],

    processingTime: '2–3 Months',
    successRate: '91%',

    processingOptions: [
        { type: 'Inside Canada (within)', time: '~18 Days', fee: 'Included', note: 'As of March 2026' },
        { type: 'From India', time: '~57–88 Days', fee: 'Included', note: 'High volume — apply 3+ months early' },
        { type: 'From Pakistan', time: '~49 Days', fee: 'Included', note: 'As of March 2026' },
        { type: 'From USA', time: '~17 Days', fee: 'Included', note: 'Fastest processing globally' },
    ],

    permitted: [
        'Tourism & sightseeing',
        'Visiting family & friends',
        'Business meetings & conferences',
        'Short-term study (up to 6 months)',
        'Medical treatment',
        'Transit through Canada',
    ],

    notPermitted: [
        'Paid employment or work',
        'Long-term study (6+ months)',
        'Claiming social benefits',
        'Permanent residence',
        'Overstaying authorised period',
    ],

    importantUpdates: [
        { update: 'Global TRV approval rate 65–72% — country-specific variation is significant', type: 'warning' },
        { update: 'India processing time stretched to 57–88 days in 2026 — apply at least 3 months early', type: 'warning' },
        { update: 'Canada reducing temporary resident targets — stricter assessment of dual intent', type: 'warning' },
        { update: 'Super Visa now allows up to 5 years per stay — major upgrade for parents/grandparents', type: 'positive' },
        { update: 'Family of 5+ can apply together for flat CAD $500 total fee', type: 'positive' },
        { update: 'eTA (Electronic Travel Authorization) required for visa-exempt nationals — not TRV', type: 'policy' },
        { update: 'Extension of stay (Visitor Record) inside Canada takes 30–120 days — apply early', type: 'warning' },
    ],

    refusalReasons: [
        'Weak ties to home country (top reason)',
        'Insufficient or unstable financial proof',
        'Unclear or vague travel purpose',
        'Incomplete documentation',
        'Previous Canadian visa refusals',
        'Suspected immigration intent',
        'Poor travel history',
    ],

    approvalTips: [
        { tip: 'Show Strong Home Ties', desc: 'Stable employment, property, family — prove genuine intent to return' },
        { tip: 'Clear Travel Purpose', desc: 'Detailed itinerary, specific travel dates, genuine reason to visit' },
        { tip: 'Solid Financials', desc: '3–6 months clean bank history, stable income, adequate funds for stay' },
        { tip: 'Good Travel History', desc: 'Previous UK, USA, Schengen, Australia visas significantly strengthen case' },
        { tip: 'Complete Documentation', desc: 'Missing even one document can cause delays or refusal — double-check all' },
    ],

    steps: [
        { step: 1, title: 'Eligibility Check', desc: 'Confirm you need TRV — visa-exempt nationals need eTA instead' },
        { step: 2, title: 'Create IRCC Account', desc: 'Register on IRCC portal — most applications 100% online' },
        { step: 3, title: 'Complete Application Forms', desc: 'IMM 5257 visitor visa form + IMM 5645 family information form' },
        { step: 4, title: 'Gather & Upload Documents', desc: 'Bank statements, employment letter, travel plan, passport copy' },
        { step: 5, title: 'Pay Fees Online', desc: 'CAD $100 application + CAD $85 biometrics per person' },
        { step: 6, title: 'Submit Application', desc: 'Submit online — receive Acknowledgement of Receipt (AOR)' },
        { step: 7, title: 'Provide Biometrics', desc: 'Attend VAC centre for fingerprints + photo — within 30 days of request' },
        { step: 8, title: 'Await Decision', desc: 'Track on IRCC portal — times vary 17 days (USA) to 88 days (India)' },
        { step: 9, title: 'Receive Visa & Travel', desc: 'TRV sticker in passport — CBSA officer determines actual stay at entry' },
    ],

    faqs: [
        { q: 'What is a TRV vs eTA?', a: 'A TRV (Temporary Resident Visa) is a physical sticker required for nationals of visa-required countries. An eTA (Electronic Travel Authorization) is for visa-exempt nationals flying to Canada. US citizens need neither.' },
        { q: 'Single vs multiple-entry — which?', a: 'Multiple-entry TRV is strongly recommended — it allows unlimited trips to Canada for up to 10 years or passport expiry. Single-entry is rare and less practical. Both cost the same CAD $100.' },
        { q: 'What is a Super Visa?', a: 'A Super Visa is a special multi-entry visitor visa for parents and grandparents of Canadian citizens or PRs. From 2022, it allows stays of up to 5 years per visit (upgraded from 2 years) and is valid for 10 years.' },
        { q: 'Can I extend my stay in Canada?', a: 'Yes — apply for a Visitor Record from inside Canada before your stay expires. Processing takes 30–120 days. Apply early and use implied status while waiting. Do not overstay your authorised period.' },
        { q: 'Why is the approval rate only 65–72%?', a: 'Canada\'s TRV approval rate varies significantly by nationality. South Korea (92%), Mexico (88%), UAE (84%) see high approvals. Nigeria (40–50%), Pakistan (50–60%) see more refusals. Strong documentation and home ties are critical.' },
        { q: 'Is biometrics mandatory?', a: 'Yes for most nationalities aged 14–79. Biometrics cost CAD $85 per person or CAD $170 for families applying together. You attend a VAC centre within 30 days of the IRCC biometrics request.' },
        { q: 'Can I work on a visitor visa?', a: 'No. A Canadian TRV does not permit paid employment. If you wish to work in Canada, you need a separate work permit. Working without authorisation can result in deportation and future visa bans.' },
        { q: 'How early should I apply?', a: 'Apply at least 3 months before travel — longer for India (apply 4+ months early due to 57–88 day processing times in 2026). Biometrics must also be completed after application submission, adding to timeline.' },
    ],

    whyVistaar: [
        'Expert Canada TRV Guidance',
        'Document Checklist & Review',
        'Cover Letter Writing Support',
        'Profile Strength Assessment',
        'Super Visa Specialists',
        'High Approval Rate',
    ],
}