export const schengenVisitorVisa = {
    id: 'schengen',
    country: 'Schengen Zone',
    flag: '🇪🇺',
    tagline: '29 Countries — One Visa — 90 Days',
    overview: 'The Schengen Tourist Visa (Type C) grants access to 29 European countries with a single application and fee. Stay up to 90 days within any 180-day period for tourism, family visits or leisure. Country-specific approval rates vary significantly — choosing the right embassy to apply through is a strategic decision.',
    heroColor: '#003399',
    accentColor: '#3B82F6',
    fee: '€90',
    maxStay: '90 Days / 180 Days',
    processing: '15–45 Days',
    successRate: '85–97%',
    status: 'active',

    visaTypes: [
        { type: 'Single-Entry Tourist', validity: 'Per trip', stay: 'Up to 90 Days', fee: '€90 adults / €45 children' },
        { type: 'Double-Entry Tourist', validity: 'Per trip', stay: 'Up to 90 Days', fee: '€90 adults / €45 children' },
        { type: 'Multiple-Entry Tourist', validity: '1–5 Years', stay: '90/180 days rule', fee: '€90 adults / €45 children' },
        { type: 'Children Under 6', validity: 'Per trip', stay: 'Up to 90 Days', fee: 'FREE' },
    ],

    highlights: [
        { icon: '🗺️', text: '29 Countries — One Application' },
        { icon: '📅', text: '90 Days Within Any 180-Day Period' },
        { icon: '💶', text: '€90 Fee — Same All 29 Countries' },
        { icon: '📈', text: 'Lithuania 97% vs Malta 80% Rates' },
        { icon: '🔄', text: 'Multi-Entry After Good History' },
        { icon: '⚠️', text: 'EES Biometric Borders — Oct 2025' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid 3+ months beyond stay — issued within last 10 years' },
        { item: 'Schengen Application Form', detail: 'Signed visa application form for your chosen embassy' },
        { item: 'Passport-Size Photos', detail: '2 recent photos meeting Schengen biometric photo standards' },
        { item: 'Travel Insurance', detail: 'MANDATORY — minimum €30,000 covering all 29 countries + repatriation' },
        { item: 'Flight Reservations', detail: 'Entry & exit flights — refundable bookings acceptable' },
        { item: 'Hotel / Accommodation Proof', detail: 'Confirmed bookings or host invitation letter' },
        { item: 'Bank Statements', detail: '3–6 months — France requires approx. €65/day for tourists' },
        { item: 'Employment or Business Proof', detail: 'Employment letter, NOC, business registration, leave approval' },
        { item: 'Cover Letter', detail: 'Explaining itinerary, purpose, funding and return plans' },
        { item: 'Home Country Ties', detail: 'Property, job, family — shows genuine intent to return' },
    ],

    fees: [
        { label: 'Adults (18+)', amount: '€90', note: 'Same fee across all 29 Schengen countries' },
        { label: 'Children (6–12 years)', amount: '€45', note: 'Half price for children' },
        { label: 'Children Under 6', amount: 'FREE', note: 'Completely exempt from visa fee' },
        { label: 'VFS Global Service Fee', amount: '~€22', note: 'Varies by country — check VFS website' },
        { label: 'Travel Insurance', amount: '€30–50', note: 'Mandatory — minimum €30,000 coverage' },
        { label: 'Optional Services', amount: 'Varies', note: 'SMS alerts, prime time, lounge — not recommended' },
    ],

    processingTime: '15–45 Days',
    successRate: '85–97%',

    processingOptions: [
        { type: 'Standard Processing', time: '15 Days', fee: 'Included', note: 'Official minimum — real times longer in peak' },
        { type: 'Maximum Legal Timeline', time: '45 Days', fee: 'Included', note: 'Extended cases or complex applications' },
        { type: 'Peak Season (Jun–Aug)', time: 'Longer', fee: 'Included', note: 'Apply 6 weeks early during summer peak' },
        { type: 'Off-Peak', time: '2–3 Weeks', fee: 'Included', note: 'Apply 3 weeks early during off-peak periods' },
    ],

    approvalRatesByCountry: [
        { country: 'Lithuania 🇱🇹', rate: '97.2%', note: 'Highest approval rate' },
        { country: 'Germany 🇩🇪', rate: '95%+', note: 'Strong, consistent' },
        { country: 'Netherlands 🇳🇱', rate: '93%+', note: 'High approval' },
        { country: 'France 🇫🇷', rate: '88%+', note: 'Popular, higher volume' },
        { country: 'Spain 🇪🇸', rate: '87%+', note: 'High application volume' },
        { country: 'Italy 🇮🇹', rate: '86%+', note: 'Strong for tourism' },
        { country: 'Belgium 🇧🇪', rate: '85%+', note: 'Moderate refusal rate' },
        { country: 'Malta 🇲🇹', rate: '79.8%', note: 'Highest refusal rate' },
    ],

    permitted: [
        'Tourism & sightseeing across 29 countries',
        'Visiting family & friends',
        'Cultural, sports & religious events',
        'Short business meetings & conferences',
        'Short-term study (up to 90 days)',
        'Medical visits',
    ],

    notPermitted: [
        'Paid employment in any Schengen country',
        'Long-term residence',
        'Overstaying 90/180-day rule',
        'Claiming social benefits',
        'Switching to work visa inside Schengen',
    ],

    importantUpdates: [
        { update: 'EES (Entry/Exit System) launched Oct 2025 — biometric fingerprint + photo at all Schengen borders', type: 'policy' },
        { update: 'ETIAS pre-travel authorisation delayed to late 2026 — €7 fee for visa-exempt nationals (not visa holders)', type: 'policy' },
        { update: 'Digital Schengen visa pilot underway — physical stickers being phased out by 2027–28', type: 'positive' },
        { update: 'Overall refusal rate 14.8% in 2024 — temporary +1–2% increase expected in 2025 due to EES transition', type: 'warning' },
        { update: 'Country approval rates vary widely: Lithuania 97.2% vs Malta 79.8% — choose embassy strategically', type: 'warning' },
        { update: 'You can appeal a Schengen refusal — unlike UK/US — must file within 1–4 weeks of refusal', type: 'positive' },
        { update: 'France requires approx. €65/day proof of funds for tourists — higher than some other countries', type: 'policy' },
    ],

    refusalReasons: [
        'Insufficient or unclear proof of funds',
        'Missing or inadequate travel insurance',
        'No strong ties to home country',
        'Inconsistent travel documents or itinerary',
        'Previous Schengen overstays or violations',
        'Weak or missing cover letter',
        'Wrong embassy chosen for application',
        'Applying too close to travel date',
    ],

    approvalTips: [
        { tip: 'Choose Embassy Strategically', desc: 'Lithuania (97%), Germany (95%), Netherlands (93%) have highest approval rates — apply through main destination' },
        { tip: 'Travel Insurance First', desc: 'Get minimum €30,000 coverage before applying — officers check this carefully' },
        { tip: 'Apply 6 Weeks Early', desc: 'Peak season (Jun–Aug): apply 6 weeks early. Off-peak: 3 weeks. Never apply less than 2 weeks before travel' },
        { tip: 'Strong Cover Letter', desc: 'Detail your itinerary day-by-day, explain funding, and clearly state return intention' },
        { tip: 'Show Financial Proof', desc: 'France requires €65/day — show sufficient daily funds for your entire planned stay across all countries' },
        { tip: 'Appeal if Refused', desc: 'Unlike UK/US, Schengen refusals can be appealed — file within 1–4 weeks with new evidence' },
    ],

    steps: [
        { step: 1, title: 'Choose Main Destination Embassy', desc: 'Apply through embassy of country where you spend most time — or first entry if equal split' },
        { step: 2, title: 'Get Travel Insurance', desc: 'Purchase €30,000+ coverage valid for all 29 countries — mandatory before application' },
        { step: 3, title: 'Book Appointment', desc: 'Book at embassy or VFS Global centre — allow 2–4 weeks wait for appointment slots in peak season' },
        { step: 4, title: 'Prepare Documents', desc: 'Passport, photos, insurance, bank statements, employment proof, hotel & flight bookings' },
        { step: 5, title: 'Attend Appointment', desc: 'Submit application, provide biometrics (fingerprints + photo) via EES system from Oct 2025' },
        { step: 6, title: 'Pay Visa Fee', desc: '€90 adults, €45 children (6–12), free under 6 — plus VFS service charge ~€22' },
        { step: 7, title: 'Await Decision', desc: '15 days standard — up to 45 days complex cases. Track via VFS or embassy portal' },
        { step: 8, title: 'Receive Visa & Travel', desc: 'Visa sticker in passport (or digital via pilot programme) — enter any of the 29 Schengen countries' },
    ],

    faqs: [
        { q: 'Which embassy should I apply through?', a: 'Apply through the embassy of the country where you spend the most days. If equal time, apply through first entry country. Strategically, Lithuania (97.2% approval), Germany (95%+) and Netherlands (93%+) have the highest approval rates.' },
        { q: 'What is the 90/180-day rule?', a: 'You can stay a maximum of 90 days within any rolling 180-day period across all 29 Schengen countries combined. Overstaying — even by 1 day — can result in a ban and serious consequences for future applications.' },
        { q: 'Can I appeal a Schengen refusal?', a: 'Yes — unlike UK or US visas, Schengen refusals can be appealed. File your appeal with the consulate that refused you within 1–4 weeks (deadline varies by country). Appeals simply restating the original application almost always fail — submit new evidence.' },
        { q: 'What is EES?', a: 'The Entry/Exit System launched October 2025. All non-EU travellers now provide biometric fingerprints and a photo at Schengen borders electronically. This replaces manual passport stamping and tracks 90/180-day stays automatically.' },
        { q: 'What is ETIAS — does it affect me?', a: 'ETIAS (expected late 2026, €7 fee) applies ONLY to visa-EXEMPT nationals like US, UK, Canadian passport holders. If you need a Schengen visa, ETIAS does not affect you at all.' },
        { q: 'Is travel insurance really mandatory?', a: 'Yes — it is a hard requirement. Your insurance must cover minimum €30,000, be valid across all 29 Schengen countries, and cover medical emergencies and repatriation. Officers verify this at application stage.' },
        { q: 'How much money must I show?', a: 'No single amount applies — each country sets its own standard. France requires approx. €65/day. Show 3–6 months of stable bank statements with sufficient daily funds for your entire planned stay.' },
        { q: 'Can I get a multi-entry Schengen visa?', a: 'Yes — after 2–3 successful trips with clean history you become eligible for multi-entry visas valid 1, 2, 3 or 5 years. First-time applicants typically receive single or double-entry visas.' },
    ],

    whyVistaar: [
        'Strategic Embassy Selection Advice',
        'Travel Insurance Guidance',
        'Cover Letter Writing Support',
        'Document Checklist & Review',
        'Refusal Appeal Assistance',
        'High Approval Rate',
    ],
}