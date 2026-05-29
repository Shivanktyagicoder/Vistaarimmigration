import tum from '../../assets/Germany/University of Munich.png'

export const germany = {
    id: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    tagline: 'World-Class Education. Low Fees. Strong Career.',
    overview: 'Germany is one of the most popular study destinations for international students, offering world-class education at low or no tuition fees, a thriving job market, and excellent post-study work and PR pathways through the EU Blue Card.',

    heroColor: '#DD0000',
    accentColor: '#EF4444',
    bgGradient: 'linear-gradient(135deg, #F8FAFC 0%, #FFF1F2 100%)',
    cardGradient: 'linear-gradient(135deg, rgba(221,0,0,0.08), rgba(221,0,0,0.03))',
    cardBorder: 'rgba(221,0,0,0.18)',

    // One image — add src once you confirm filename
    // Replace null with your import e.g: germanyImg1
    heroImages: [
        { src: tum, caption: 'Technical University of Munich', badge: '#1 in Germany' },
    ],

    // Animated gradient used when no images available
    heroGradient: 'linear-gradient(135deg, #0F172A 0%, #1a0a0a 40%, #2d0505 70%, #1a0505 100%)',
    heroAccentColor: '#DD0000',

    highlights: [
        { icon: '🎯', text: '95% Success Rate' },
        { icon: '🆓', text: 'Low / No Tuition Fees' },
        { icon: '💼', text: '140 Days Work Per Year' },
        { icon: '🎓', text: '18-Month Job Search Visa' },
        { icon: '🇪🇺', text: 'EU Blue Card Pathway' },
        { icon: '🚗', text: 'Automotive & Engineering Hub' },
        { icon: '🤖', text: 'AI & Robotics Leader' },
        { icon: '💰', text: 'Affordable Living vs UK/US' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for full duration of course + 3 months' },
        { item: 'University Admission Letter', detail: 'From a recognised German institution (Zulassung)' },
        { item: 'APS Certificate', detail: 'Mandatory for India, China & Vietnam — academic verification' },
        { item: 'Academic Documents', detail: 'Transcripts, certificates, degree equivalency proof' },
        { item: 'IELTS / TOEFL (if required)', detail: 'For English-taught programs — German proof for German programs' },
        { item: 'SOP / Motivation Letter', detail: 'Strong statement of study intent and career goals' },
        { item: 'Blocked Account Confirmation', detail: '€11,904 deposited — Fintiba, Expatrio or Coracle' },
        { item: 'Health Insurance', detail: 'Valid German public/private health insurance (TK, AOK, Barmer)' },
        { item: 'Visa Application Forms', detail: 'Completed national visa application form' },
        { item: 'Resume / CV', detail: 'Recommended especially for postgraduate applicants' },
        { item: 'Proof of Accommodation', detail: 'Sometimes requested — student dormitory confirmation' },
        { item: 'Passport Size Photos', detail: 'Biometric passport photographs' },
    ],

    financialRequirements: [
        { label: 'Blocked Account (Annual)', amount: '€11,904', note: 'Updated Jan 2025 — BAföG rate (€992/month)' },
        { label: 'Monthly Withdrawal Limit', amount: '€992/month', note: 'Released monthly after arrival in Germany' },
        { label: 'Visa Fee', amount: '€75', note: 'German National Visa (non-refundable)' },
        { label: 'Semester Contribution', amount: '€150–350', note: 'Even at tuition-free universities' },
    ],

    blockedAccountProviders: [
        { name: 'Fintiba', note: 'Most popular — fast setup' },
        { name: 'Expatrio', note: 'Includes health insurance bundle' },
        { name: 'Coracle', note: 'Cashback available on activation' },
    ],

    processingTime: '4–12 Weeks',
    successRate: '95%',

    intakes: [
        { season: 'Winter Intake', icon: '❄️', note: 'Sep/Oct — Main intake, widest course selection' },
        { season: 'Summer Intake', icon: '🌸', note: 'March/April — Second intake, fewer courses' },
    ],

    topCourses: [
        'Mechanical Engineering',
        'Automotive Engineering',
        'Artificial Intelligence',
        'Data Science',
        'Computer Science',
        'Robotics',
        'Renewable Energy',
        'Business Management',
        'Biotechnology',
    ],

    topUniversities: [
        { name: 'Technical University of Munich (TUM)', rank: '#1 Germany / Top 30 World' },
        { name: 'RWTH Aachen University', rank: 'Top Engineering School' },
        { name: 'Heidelberg University', rank: 'Oldest German University' },
        { name: 'LMU Munich', rank: 'Top Research University' },
        { name: 'University of Stuttgart', rank: 'Top Engineering School' },
        { name: 'Karlsruhe Institute of Technology', rank: 'KIT — Top STEM School' },
    ],

    workRights: {
        duringStudies: [
            '140 full days OR 280 half days per year',
            'On-campus student jobs widely available',
            'Working student (Werkstudent) contracts popular',
            'Additional restrictions may apply based on visa status',
        ],
        afterGraduation: [
            '18-Month Job Search Residence Permit after graduation',
            'Work full-time while searching for skilled employment',
            'Transition to EU Blue Card with qualifying job offer',
            'EU Blue Card: €45,300 minimum salary (2025) for most fields',
        ],
    },

    prPathways: [
        { pathway: 'EU Blue Card', desc: 'Fast-track PR for skilled graduates with qualifying job offer' },
        { pathway: 'Skilled Worker Residence', desc: 'Permanent settlement after 4 years skilled employment' },
        { pathway: 'Opportunity Card', desc: 'Points-based card to search for work in Germany' },
    ],

    fees: {
        government: [
            { label: 'National Student Visa Fee', amount: '€75' },
            { label: 'Residence Permit (on arrival)', amount: '€100–110' },
        ],
        additional: [
            'APS Certificate Fee (India/China/Vietnam)',
            'Blocked Account Setup Fee (Fintiba/Expatrio)',
            'Health Insurance (mandatory)',
            'IELTS / TOEFL / German Language Exam',
            'Tuition Deposit (private universities only)',
        ],
        consultation: 'Free Initial Consultation',
        note: 'Most public universities charge €0 tuition — only semester contribution of €150–350 applies',
    },

    importantUpdates: [
        { update: 'Blocked account confirmed at €11,904/year — €992/month (updated Jan 2025)', type: 'finance' },
        { update: 'APS Certificate mandatory for India, China & Vietnam — no exceptions', type: 'policy' },
        { update: 'EU Blue Card minimum salary updated to €45,300 for most fields (2025)', type: 'policy' },
        { update: 'Digital visa processing — stricter document scrutiny, apply early', type: 'warning' },
        { update: 'Private university admissions face stronger embassy scrutiny from 2025', type: 'warning' },
        { update: 'Over 42,000 Indian students in Germany as of 2025-26 — strong demand', type: 'positive' },
        { update: 'Opportunity Card (Chancenkarte) launched — new points-based work search route', type: 'positive' },
    ],

    refusalReasons: [
        'Missing APS Certificate (India/China/Vietnam)',
        'Weak SOP / Motivation Letter',
        'Insufficient or Unverifiable Financial Proof',
        'Incomplete Documentation',
        'Academic Gap Issues Without Explanation',
        'Admission from Unrecognised Institution',
        'Unclear Study Intent',
        'Blocked Account Not from Approved Provider',
    ],

    steps: [
        { step: 1, title: 'Free Consultation & Eligibility', desc: 'Assess profile, course suitability and language requirements' },
        { step: 2, title: 'University & Course Selection', desc: 'Choose recognised German institution — public (free) or private' },
        { step: 3, title: 'Apply for Admission', desc: 'Direct application or via uni-assist portal' },
        { step: 4, title: 'Receive Admission Letter (Zulassung)', desc: 'Official admission confirmation from German university' },
        { step: 5, title: 'Open Blocked Account', desc: 'Deposit €11,904 with Fintiba, Expatrio or Coracle' },
        { step: 6, title: 'APS Certificate (if applicable)', desc: 'Apply for academic verification — India, China, Vietnam mandatory' },
        { step: 7, title: 'Prepare Visa Documentation', desc: 'Full checklist with SOP, health insurance, accommodation proof' },
        { step: 8, title: 'Book Visa Appointment', desc: 'Book early — embassy slots fill up fast, especially Oct–Mar' },
        { step: 9, title: 'Attend Biometrics & Interview', desc: 'Attend German Embassy with complete original documents' },
        { step: 10, title: 'Visa Decision & Pre-Departure', desc: 'Receive visa and apply for residence permit within 90 days of arrival' },
    ],

    faqs: [
        { q: 'What is a Blocked Account?', a: 'A blocked account (Sperrkonto) is a special bank account where you deposit €11,904 upfront as proof of living funds. After arriving in Germany, €992 is released to you monthly. Use Fintiba, Expatrio, or Coracle — Deutsche Bank no longer offers this service.' },
        { q: 'Is APS mandatory?', a: 'Yes — APS (Academic Evaluation Centre) certificate is mandatory for students from India, China, and Vietnam. It verifies your academic documents. Applications without APS from these countries will be rejected.' },
        { q: 'Is tuition free in Germany?', a: 'Most German public universities charge zero tuition fees for international students. However, a semester contribution of approximately €150–350 still applies for admin, transport and student services.' },
        { q: 'Can I study without IELTS?', a: 'For English-taught programs, IELTS or TOEFL is typically required. For German-taught programs, proof of German language proficiency (TestDaF or DSH) is needed. Some universities accept Medium of Instruction (MOI) certificates as an alternative.' },
        { q: 'Can I work while studying?', a: 'Yes — international students can work 140 full days or 280 half days per year. Werkstudent (working student) contracts are common and provide good part-time income alongside studies.' },
        { q: 'What is the 18-Month Job Search Visa?', a: 'After graduation, eligible students receive an 18-month residence permit to search for skilled employment in Germany. You can work full-time during this period and transition to an EU Blue Card once you secure a qualifying job offer.' },
        { q: 'What is the EU Blue Card?', a: 'The EU Blue Card is a premium work and residency permit for highly qualified non-EU graduates. It requires a qualifying job offer with a minimum salary of €45,300 (2025) and leads to permanent settlement faster than standard routes.' },
        { q: 'What is the Opportunity Card?', a: 'The Chancenkarte (Opportunity Card) is a new points-based visa launched in 2024 allowing skilled international graduates to enter Germany and search for work without a pre-arranged job offer. A great option for qualified graduates.' },
        { q: 'How long does processing take?', a: 'Usually 4–12 weeks, sometimes up to 16 weeks during peak periods. Book your embassy appointment as soon as you receive your admission letter — slots fill up fast.' },
        { q: 'Can I get PR in Germany?', a: 'Yes. After 4 years of skilled employment, you can apply for a permanent settlement permit. EU Blue Card holders may qualify in just 21–27 months with German language proof.' },
    ],

    whyVistaar: [
        'Expert Germany Visa Guidance',
        'APS & SOP Assistance',
        'University Admission Support',
        'Blocked Account Guidance',
        'High Approval Rate',
        'Transparent Process',
        'End-to-End Student Visa Assistance',
    ],
}