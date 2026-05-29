export const workVisaData = {

    skilledWorker: {
        id: 'skilled-worker',
        title: 'UK Skilled Worker Visa',
        subtitle: 'Live & Work in the UK with a Sponsoring Employer',
        tag: 'Skilled Worker',
        tagColor: '#0D9488',
        successRate: '97%',
        processingTime: '3–8 Weeks',

        highlights: [
            { icon: '🎯', text: '97% Approval Rate' },
            { icon: '💷', text: '£38,700 Min Salary (2024)' },
            { icon: '👨‍👩‍👧', text: 'Bring Dependants' },
            { icon: '🏠', text: 'PR After 5 Years' },
            { icon: '🔄', text: 'Switch Visas In-Country' },
            { icon: '🌍', text: 'Work in Any Sector' },
            { icon: '📋', text: 'Points-Based System' },
            { icon: '⚡', text: 'Fast Processing Available' },
        ],

        requirements: [
            { item: 'Valid Passport', detail: 'Valid for full duration of intended stay' },
            { item: 'Certificate of Sponsorship (CoS)', detail: 'From UK-licensed Tier 2 sponsor employer' },
            { item: 'Salary Proof', detail: 'Meeting £38,700 minimum or going rate for occupation' },
            { item: 'English Language Proof', detail: 'B1 CEFR level — IELTS, degree in English, or exemption' },
            { item: 'Maintenance Funds', detail: '£1,270 in account for 28 days (if employer cannot certify)' },
            { item: 'Tuberculosis Test', detail: 'From approved clinic if coming from listed country' },
            { item: 'Academic Qualifications', detail: 'Degree or professional qualification relevant to role' },
            { item: 'Police Clearance', detail: 'Required from certain countries' },
            { item: 'Biometrics (BRP)', detail: 'Enrolled on arrival in UK' },
        ],

        salaryThresholds: [
            { category: 'Standard General Threshold', amount: '£38,700', note: 'Updated April 2024 — up from £26,200' },
            { category: 'Health & Care Shortage Roles', amount: '£23,200+', note: 'NHS and adult social care roles' },
            { category: 'New Entrant Rate', amount: '£30,960', note: '80% of general threshold for new entrants' },
            { category: 'Going Rate for SOC Code', amount: 'Varies', note: 'Must meet whichever is higher' },
        ],

        steps: [
            { step: 1, title: 'Free Eligibility Assessment', desc: 'Review job offer, SOC code, salary and sponsor status' },
            { step: 2, title: 'Confirm Sponsor Licence', desc: 'Employer must hold a valid UK Sponsor Licence' },
            { step: 3, title: 'Receive Certificate of Sponsorship', desc: 'Employer assigns CoS reference number to you' },
            { step: 4, title: 'Gather Documents', desc: 'Passport, English proof, funds, qualifications, TB test if needed' },
            { step: 5, title: 'Submit Online Application', desc: 'Apply on UK Visas and Immigration (UKVI) portal' },
            { step: 6, title: 'Pay IHS & Visa Fee', desc: 'Immigration Health Surcharge + visa application fee' },
            { step: 7, title: 'Biometrics Appointment', desc: 'Visit UKVCAS service point for biometrics' },
            { step: 8, title: 'Visa Decision', desc: 'Usually 3–8 weeks. Priority service available for faster outcome' },
        ],

        fees: {
            visaFee: [
                { label: 'Visa Application Fee (up to 3yr)', amount: '£719', note: 'Per applicant' },
                { label: 'Visa Application Fee (over 3yr)', amount: '£1,420', note: 'Per applicant' },
                { label: 'Immigration Health Surcharge', amount: '£1,035/yr', note: 'Per year of visa — paid upfront' },
                { label: 'Priority Service (optional)', amount: '£500', note: '5 working day decision' },
            ],
            consultation: 'Free Initial Consultation',
        },

        importantUpdates: [
            { update: 'Minimum salary raised to £38,700 from April 4, 2024 (up from £26,200)', type: 'warning' },
            { update: 'Shortage Occupation List replaced by Immigration Salary List — lower discount removed', type: 'warning' },
            { update: 'IHS fee increased to £1,035 per year — must be paid upfront for full visa duration', type: 'fee' },
            { update: 'Dependant visa rules tightened — fewer occupation exemptions for family', type: 'warning' },
            { update: 'Priority and Super Priority services available for faster decisions', type: 'positive' },
        ],

        faqs: [
            { q: 'What is the minimum salary for a Skilled Worker Visa?', a: 'From April 2024, the minimum salary is £38,700/year or the going rate for your SOC code — whichever is higher. New entrants and shortage roles have lower thresholds. Health & care workers may qualify at £23,200+.' },
            { q: 'Can I bring my family?', a: 'Yes — your spouse/partner and children under 18 can apply as dependants. They can also work freely in the UK on a dependant visa.' },
            { q: 'How long is the visa?', a: 'Usually granted for up to 5 years (or the CoS duration + 14 days). You can extend it and after 5 years apply for Indefinite Leave to Remain (ILR).' },
            { q: 'Can I change employer?', a: 'You must apply for a new Skilled Worker Visa with the new employer\'s CoS before switching jobs. Your visa is tied to your sponsoring employer.' },
            { q: 'What is IHS?', a: 'The Immigration Health Surcharge (IHS) gives you access to the NHS. From 2024 it is £1,035 per year and must be paid upfront for your entire visa duration when you apply.' },
        ],

        whyVistaar: [
            'Expert UK Work Visa Guidance',
            'Salary & SOC Code Assessment',
            'CoS Verification Support',
            'IHS & Fee Calculation',
            '97% Approval Rate',
            'End-to-End Application Support',
        ],
    },

    psw: {
        id: 'psw',
        title: 'UK Graduate Route (PSW)',
        subtitle: 'Work in the UK After Your UK Degree',
        tag: 'Graduate Route',
        tagColor: '#7C3AED',
        successRate: '96%',
        processingTime: '2–8 Weeks',

        highlights: [
            { icon: '🎓', text: 'For UK Degree Holders Only' },
            { icon: '🆓', text: 'No Job Offer Required' },
            { icon: '💼', text: 'Work in Any Job, Any Sector' },
            { icon: '⏱️', text: '2 Years (3 for PhD)' },
            { icon: '🔄', text: 'Switch to Skilled Worker Later' },
            { icon: '💻', text: '100% Online Application' },
            { icon: '🌍', text: 'Open Work Rights' },
            { icon: '💰', text: 'No Salary Minimum' },
        ],

        requirements: [
            { item: 'Valid Passport', detail: 'Used for your Student Visa' },
            { item: 'UK Degree Certificate', detail: 'Eligible Bachelor\'s, Master\'s or PhD from a licensed sponsor' },
            { item: 'UKVI Confirmation', detail: 'Student visa must have been valid for required period' },
            { item: 'Tuberculosis Test Result', detail: 'If required for your nationality' },
            { item: 'Proof of Maintenance Funds', detail: '£1,270 in bank for 28+ consecutive days' },
        ],

        duration: [
            { icon: '🎓', level: "Bachelor's / Master's Graduate", duration: '2 Years' },
            { icon: '🔬', level: 'PhD / Doctoral Graduate', duration: '3 Years' },
        ],

        steps: [
            { step: 1, title: 'Confirm Eligibility', desc: 'Degree must be from UKVI-approved sponsor — verify before applying' },
            { step: 2, title: 'Gather Documents', desc: 'Degree certificate, passport, bank statements, TB test if required' },
            { step: 3, title: 'Submit Online Application', desc: 'Apply via UKVI portal — fully digital' },
            { step: 4, title: 'Pay Visa Fee & IHS', desc: 'Visa fee + £1,035/year Immigration Health Surcharge' },
            { step: 5, title: 'Biometrics', desc: 'Attend UKVCAS appointment for biometric enrolment' },
            { step: 6, title: 'Receive PSW Visa', desc: 'Typically 2–8 weeks — begin working immediately on approval' },
        ],

        fees: {
            visaFee: [
                { label: 'Graduate Route Visa Fee', amount: '£822', note: 'Per applicant' },
                { label: 'Immigration Health Surcharge (2yr)', amount: '£2,070', note: '£1,035/yr × 2 years' },
                { label: 'Immigration Health Surcharge (3yr)', amount: '£3,105', note: '£1,035/yr × 3 years (PhD)' },
            ],
            consultation: 'Free Initial Consultation',
        },

        importantUpdates: [
            { update: 'Graduate Route (PSW) remains open in 2025 — no closure announced', type: 'positive' },
            { update: 'IHS increased to £1,035/year from Jan 2024 — must be paid upfront', type: 'fee' },
            { update: 'Must have studied at a licensed UK Higher Education Provider — verify status', type: 'policy' },
            { update: 'No salary threshold — can work in any job including part-time and self-employed', type: 'positive' },
        ],

        faqs: [
            { q: 'Do I need a job offer for PSW?', a: 'No — the Graduate Route (PSW) requires no job offer. You can look for work, work for any employer in any sector, or be self-employed after graduating from a UK university.' },
            { q: 'How long is the PSW visa?', a: 'Bachelor\'s and Master\'s graduates get 2 years. PhD graduates get 3 years. The Graduate Route can only be used once — it cannot be extended.' },
            { q: 'Can I switch to a Skilled Worker Visa?', a: 'Yes — if you secure a qualifying job with a licensed sponsor during your PSW period, you can switch to a Skilled Worker Visa from inside the UK.' },
            { q: 'Is there a salary minimum on PSW?', a: 'No — you can work at any salary. However, if you later wish to switch to a Skilled Worker Visa, that employer-sponsored route requires meeting the salary thresholds.' },
            { q: 'Can I bring dependants on PSW?', a: 'Yes — dependants who were on your Student Visa can switch to your PSW as dependants. New dependants from overseas can also apply.' },
        ],

        whyVistaar: [
            'Expert Graduate Route Guidance',
            'Eligibility & University Check',
            'Fast Application Support',
            'IHS & Fee Calculation',
            'Switch-to-Skilled-Worker Planning',
            'End-to-End Support',
        ],
    },

    canada: {
        id: 'canada',
        title: 'Canada Work Permit',
        subtitle: 'Work Temporarily or Permanently in Canada',
        tag: 'PR Pathway',
        tagColor: '#D81920',
        successRate: '94%',
        processingTime: '4–16 Weeks',

        highlights: [
            { icon: '🎯', text: '94% Success Rate (Skilled)' },
            { icon: '🍁', text: 'PR Pathway via Express Entry' },
            { icon: '💼', text: 'LMIA & LMIA-Exempt Routes' },
            { icon: '🎓', text: 'PGWP Up to 3 Years' },
            { icon: '👨‍👩‍👧', text: 'Spouse Open Work Permit' },
            { icon: '🔄', text: '180 Days Implied Status (2025)' },
            { icon: '🏥', text: 'Healthcare & STEM Priority' },
            { icon: '🌐', text: 'Fully Digital Processing 2025' },
        ],

        permitTypes: [
            { name: 'LMIA-Based Work Permit', icon: '🏢', desc: 'Employer proves no Canadian available — common in healthcare, trades, trucking, construction', tag: 'Employer Specific', tagColor: '#D97706' },
            { name: 'LMIA-Exempt (IMP)', icon: '⚡', desc: 'No LMIA needed — intra-company transfers, free trade agreements, Global Talent Stream', tag: 'Fast Track', tagColor: '#0D9488' },
            { name: 'Post-Graduation Work Permit (PGWP)', icon: '🎓', desc: 'Up to 3 years open work permit after completing eligible Canadian study program', tag: 'Open Permit', tagColor: '#7C3AED' },
            { name: 'Spousal Open Work Permit (SOWP)', icon: '👫', desc: 'For spouses of skilled workers, students or PR applicants — eligibility tightened Jan 2025', tag: 'Open Permit', tagColor: '#3B82F6' },
        ],

        requirements: [
            { item: 'Valid Passport', detail: 'Valid for full duration of work permit' },
            { item: 'Job Offer Letter', detail: 'From Canadian employer (for employer-specific permit)' },
            { item: 'LMIA Approval Number', detail: 'If LMIA-based — employer must obtain from ESDC' },
            { item: 'Educational Credentials', detail: 'Degree/diploma/trade certificates with ECA if required' },
            { item: 'Work Experience Proof', detail: 'Reference letters, employment records, pay stubs' },
            { item: 'Biometrics', detail: 'Required for most nationalities' },
            { item: 'Medical Exam', detail: 'Required for some occupations and countries' },
            { item: 'Police Clearance', detail: 'From countries lived in 6+ months after age 18' },
            { item: 'Proof of Funds', detail: 'To show financial stability on arrival' },
        ],

        fees: {
            visaFee: [
                { label: 'Work Permit Application Fee', amount: 'CAD $155', note: 'Per applicant' },
                { label: 'Open Work Permit Holder Fee', amount: 'CAD $100', note: 'Additional for open permits' },
                { label: 'Biometrics Fee', amount: 'CAD $85', note: 'Per person' },
                { label: 'LMIA Fee (Employer)', amount: 'CAD $1,000', note: 'Per position — employer pays, NOT worker' },
            ],
            consultation: 'Free Initial Consultation',
        },

        processingTime: '4–16 Weeks',
        successRate: '94%',

        prPathways: [
            { pathway: 'Express Entry — Canadian Experience Class', desc: 'After 1 year Canadian work experience' },
            { pathway: 'Express Entry — Federal Skilled Worker', desc: 'Points-based PR for skilled professionals' },
            { pathway: 'Provincial Nominee Program (PNP)', desc: 'Province nominates based on labour needs' },
            { pathway: 'Atlantic Immigration Program', desc: 'For workers in Atlantic provinces' },
        ],

        steps: [
            { step: 1, title: 'Free Consultation & Eligibility', desc: 'Assess permit type — LMIA, IMP, PGWP or Open Work Permit' },
            { step: 2, title: 'Secure Canadian Job Offer', desc: 'Employer gets LMIA from ESDC (if required) — CAD $1,000 fee' },
            { step: 3, title: 'Gather Documents', desc: 'Passport, job offer, LMIA, education proof, experience letters' },
            { step: 4, title: 'Submit Online Application', desc: 'Apply via IRCC portal — fully digital from 2025' },
            { step: 5, title: 'Biometrics & Medical', desc: 'Attend VAC appointment if required' },
            { step: 6, title: 'Receive Approval & Port of Entry Letter', desc: 'Get approval letter and visa stamp if applicable' },
            { step: 7, title: 'Enter Canada & Activate Permit', desc: 'Receive work permit at border — begin employment' },
        ],

        importantUpdates: [
            { update: 'Implied status extended to 180 days (from 120 days) for extensions — Jan 2025', type: 'positive' },
            { update: 'SOWP eligibility tightened — family member rules changed from Jan 21, 2025', type: 'warning' },
            { update: 'PGWP eligible program list frozen for 2026 — stability for current students', type: 'policy' },
            { update: 'Low-wage LMIA restrictions tightened — regions with 6%+ unemployment face limits', type: 'warning' },
            { update: 'Fully digital processing — stricter completeness checks, incomplete apps refused', type: 'policy' },
            { update: 'Canada targeting 32,000 skilled workers for Foreign Credential Recognition 2026-27', type: 'positive' },
        ],

        faqs: [
            { q: 'What is LMIA?', a: 'A Labour Market Impact Assessment (LMIA) is a document an employer needs before hiring a foreign worker. It proves no Canadian citizen or PR is available for the role. The employer pays CAD $1,000 per position — it is illegal for this to be passed to the worker.' },
            { q: 'What is LMIA-exempt?', a: 'LMIA-exempt work permits do not require the employer to get LMIA approval. Examples include intra-company transfers, free trade agreement workers, Global Talent Stream, PGWP holders, and spousal open work permits.' },
            { q: 'Can I change employer?', a: 'If you have an employer-specific permit, you need a new permit for the new employer. If you have an open work permit (PGWP, SOWP), you can change employers freely.' },
            { q: 'Can work permit lead to PR?', a: 'Yes. After 1 year of Canadian work experience, you may qualify for Express Entry (Canadian Experience Class), Provincial Nominee Program, or Atlantic Immigration Program — all leading to permanent residency.' },
            { q: 'What is implied status?', a: 'If you apply to extend your work permit before it expires, you can continue working legally while IRCC processes your application. From 2025 this period was extended to 180 days (previously 120 days).' },
            { q: 'What is PGWP?', a: 'The Post-Graduation Work Permit allows eligible international graduates from Canadian institutions to work in Canada for up to 3 years. It is an open permit — you can work for any employer.' },
        ],

        whyVistaar: [
            'Expert Canada Work Permit Guidance',
            'LMIA vs IMP Route Assessment',
            'Employer Document Verification',
            'PGWP & Open Permit Specialists',
            'PR Pathway Planning',
            'End-to-End Application Support',
        ],
    },
}

