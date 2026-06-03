import melbourne  from '../../assets/Australia/university of melbourne.jpg'
import sydney      from '../../assets/Australia/sydney university (2).jpg'
import victoria    from '../../assets/Australia/victoria university.jpg'

export const australia = {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    tagline: 'Study, Work & Settle in Australia',
    overview: 'The Australia Student Visa (Subclass 500) allows international students to study at recognized Australian universities and colleges. Known for world-class education, exceptional lifestyle, strong work rights and clear PR pathways after graduation.',
    heroColor: '#00843D',
    accentColor: '#22C55E',
    bgGradient: 'linear-gradient(135deg, #F8FAFC 0%, #F0FDF4 100%)',
    cardGradient: 'linear-gradient(135deg, rgba(0,132,61,0.08), rgba(0,132,61,0.03))',
    cardBorder: 'rgba(0,132,61,0.2)',

    heroImages: [
        { src: melbourne, caption: 'University of Melbourne', badge: '#1 in Australia'  },
        { src: sydney,    caption: 'University of Sydney',    badge: 'Top 20 Global'    },
        { src: victoria,  caption: 'Victoria University',     badge: 'Melbourne Campus' },
    ],

    highlights: [
        { icon: '🎯', text: '97% Success Rate' },
        { icon: '💼', text: '48hrs/Fortnight Work Rights' },
        { icon: '🎓', text: 'Post-Study Work Visa (485)' },
        { icon: '🌏', text: 'Globally Ranked Universities' },
        { icon: '🏡', text: 'High Quality of Life' },
        { icon: '💰', text: 'Scholarships Available' },
        { icon: '🛂', text: 'PR Pathways Available' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for full duration of course' },
        { item: 'Confirmation of Enrolment (CoE)', detail: 'Mandatory from Jan 2025 — issued after paying tuition deposit' },
        { item: 'Academic Documents', detail: 'Transcripts, certificates and prior qualifications' },
        { item: 'IELTS / PTE / TOEFL Score', detail: 'Tests taken after Aug 7, 2025 must meet new score requirements' },
        { item: 'Genuine Student (GS) Statement', detail: 'Replaced old GTE — proves genuine intent to study' },
        { item: 'Proof of Funds', detail: 'AUD $29,710 living costs + tuition + travel (3 month history)' },
        { item: 'OSHC Insurance', detail: 'Mandatory Overseas Student Health Cover for full stay' },
        { item: 'SOP / GTE Statement', detail: 'Strong personal statement of purpose required' },
        { item: 'Medical Examination', detail: 'From DIBP approved panel physician' },
        { item: 'Biometrics', detail: 'Required for selected nationalities' },
    ],

    financialRequirements: [
        { label: 'Living Expenses (Annual)', amount: 'AUD $29,710', note: 'Updated 2025 — up from $24,505' },
        { label: 'Fund History Required', amount: '3 Months', note: 'Bank statements manually verified' },
        { label: 'Per Partner (if applicable)', amount: '+AUD $10,345', note: 'Additional funds required' },
        { label: 'Per Child (if applicable)', amount: '+AUD $3,870', note: 'Per dependent child' },
    ],

    processingTime: '4–10 Weeks',
    successRate: '97%',

    intakes: [
        { season: 'February Intake', icon: '☀️', note: 'Main intake — widest course selection' },
        { season: 'July Intake', icon: '❄️', note: 'Second major intake' },
        { season: 'November Intake', icon: '🌸', note: 'Selected institutions only' },
    ],

    topCourses: [
        'Nursing & Healthcare',
        'Information Technology',
        'Engineering',
        'Business & Management',
        'Data Science',
        'Hospitality Management',
        'Cybersecurity',
        'Accounting & Finance',
    ],

    topUniversities: [
        { name: 'University of Melbourne', rank: '#1 Australia' },
        { name: 'University of Sydney', rank: 'Top 20 Global' },
        { name: 'Australian National University', rank: 'Top 30 Global' },
        { name: 'Monash University', rank: 'Top 50 Global' },
        { name: 'University of Queensland', rank: 'Top 50 Global' },
        { name: 'UNSW Sydney', rank: 'Top 20 Global' },
    ],

    workRights: {
        duringStudies: [
            'Up to 48 hours per fortnight during study terms',
            'Unlimited hours during scheduled course breaks',
            'No hour limits for Masters (Research) or PhD students',
        ],
        afterGraduation: [
            'Temporary Graduate Visa (Subclass 485) — 18 months to 3 years',
            'Note: Subclass 485 application fee now AUD $4,600 (from Mar 2026)',
            'Skilled migration pathways available post-graduation',
        ],
    },

    prPathways: [
        { pathway: 'Skilled Independent Visa', desc: 'Points-based migration for eligible graduates' },
        { pathway: 'State Nomination Programs (PNP)', desc: 'Nominated by an Australian state or territory' },
        { pathway: 'Employer Sponsored Pathways', desc: 'Sponsored by an Australian employer after graduation' },
    ],

    fees: {
        government: [
            { label: 'Student Visa Fee (Subclass 500)', amount: 'AUD $2,000' },
            { label: 'Temporary Graduate Visa (485)', amount: 'AUD $4,600' },
        ],
        additional: [
            'OSHC Health Insurance (mandatory)',
            'IELTS / PTE / TOEFL Exam Fee',
            'Medical Examination Fee',
            'Biometrics (if required)',
            'Tuition Deposit to Institution',
        ],
        consultation: 'Free Initial Consultation',
        note: 'Visa fee increased from AUD $1,600 to $2,000 from July 2025',
    },

    importantUpdates: [
        { update: 'Student visa fee increased to AUD $2,000 (from July 2025)', type: 'fee' },
        { update: 'Living cost requirement raised to AUD $29,710/year (2025)', type: 'finance' },
        { update: 'CoE now mandatory at application — Letter of Offer no longer accepted (Jan 2025)', type: 'policy' },
        { update: 'Genuine Student (GS) test replaced old GTE requirement (2025)', type: 'policy' },
        { update: 'IELTS/PTE tests taken after Aug 7, 2025 must meet new score requirements', type: 'warning' },
        { update: 'Subclass 485 post-study work visa fee doubled to AUD $4,600 (Mar 2026)', type: 'warning' },
        { update: 'International student cap of 295,000 introduced for 2025–2026', type: 'warning' },
    ],

    refusalReasons: [
        'Insufficient Financial Proof or Funds',
        'Weak Genuine Student (GS) Statement',
        'Incomplete or Incorrect Documentation',
        'Poor Academic Background',
        'CoE not obtained before application',
        'English Test Scores Below Requirements',
    ],

    steps: [
        { step: 1, title: 'Free Consultation & Profile Assessment', desc: 'Evaluate eligibility, course options and financial readiness' },
        { step: 2, title: 'Course & University Selection', desc: 'Choose CRICOS-registered institution and right program' },
        { step: 3, title: 'Admission Application', desc: 'Apply to universities and secure conditional/unconditional offer' },
        { step: 4, title: 'Receive Offer Letter & CoE', desc: 'Pay tuition deposit and receive CoE — mandatory for visa' },
        { step: 5, title: 'Financial Preparation & OSHC', desc: 'Arrange AUD $29,710 funds and purchase mandatory OSHC insurance' },
        { step: 6, title: 'Visa Documentation', desc: 'Prepare full checklist including GS statement with our experts' },
        { step: 7, title: 'Visa Filing & Medicals', desc: 'Submit Subclass 500 application online and complete medical exam' },
        { step: 8, title: 'Visa Decision & Pre-Departure', desc: 'Receive visa grant and get pre-departure guidance from our team' },
    ],

    faqs: [
        { q: 'What is CoE?', a: 'CoE (Confirmation of Enrolment) is a mandatory document issued by your Australian institution after you pay your tuition deposit. From January 2025, this is required at the time of application — a Letter of Offer is no longer accepted.' },
        { q: 'Can I work while studying?', a: 'Yes — eligible students can work up to 48 hours per fortnight during study terms and unlimited hours during scheduled course breaks. Masters (Research) and PhD students have no work hour limits.' },
        { q: 'What is OSHC?', a: 'OSHC (Overseas Student Health Cover) is mandatory health insurance for all international students in Australia. It must be purchased from an approved provider and cover your entire stay. Note: Premium increasing by 4.4% in April 2026.' },
        { q: 'What is the Genuine Student test?', a: 'The Genuine Student (GS) requirement replaced the old GTE test in 2025. It requires you to demonstrate your genuine intention to study in Australia and succeed academically, rather than using the visa primarily for work or immigration.' },
        { q: 'Can I stay after graduation?', a: 'Yes. Eligible graduates may apply for the Temporary Graduate Visa (Subclass 485) which allows 18 months to 3 years of work rights. Note: The application fee has increased to AUD $4,600 from March 2026.' },
        { q: 'Can my spouse accompany me?', a: 'Yes, eligible students may include a spouse/partner and dependent children in their application. Additional funds of AUD $10,345 per partner and $3,870 per child must be demonstrated.' },
        { q: 'How much funds do I need?', a: 'You must show AUD $29,710 for 12 months of living expenses (updated 2025), plus full tuition fees and travel costs. Funds must show a 3-month history and you must prove genuine access through income or loan documents.' },
        { q: 'Can I get PR after study?', a: 'Yes. Australia offers Skilled Independent Visa, State Nomination Programs, and Employer Sponsored Pathways for eligible graduates looking for permanent residency.' },
        { q: 'How long does processing take?', a: 'Usually 4–10 weeks depending on application completeness and country. Apply early — stricter checks introduced in 2025 may lead to longer processing timelines.' },
    ],

    whyVistaar: [
        'Expert Australia Visa Guidance',
        'High Approval Rate',
        'University Admission Assistance',
        'Genuine Student Statement Support',
        'Complete Documentation Assistance',
        'Transparent & Professional Process',
        'End-to-End Student Visa Support',
    ],
}