import oxford    from '../../assets/uk/university of oxford.jpg'
import cambridge  from '../../assets/uk/university of cambridge.jpg'
import imperial   from '../../assets/uk/imperial.jpg'
import manchester from '../../assets/uk/university of manchester.jpg'

export const uk = {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'World-Class Education & Career Pathways',
    overview: 'The UK Student Visa allows international students to study at approved universities across the UK — home to globally ranked institutions, shorter course durations, and strong post-study work opportunities.',
    heroColor: '#012169',
    accentColor: '#4169E1',
    bgGradient: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
    cardGradient: 'linear-gradient(135deg, rgba(1,33,105,0.08), rgba(1,33,105,0.03))',
    cardBorder: 'rgba(1,33,105,0.18)',

    heroImages: [
        { src: oxford,    caption: 'University of Oxford',    badge: '#1 in the World'  },
        { src: cambridge, caption: 'University of Cambridge', badge: '#2 in the World'  },
        { src: imperial,  caption: 'Imperial College London', badge: '#8 in the World'  },
        { src: manchester,caption: 'University of Manchester',badge: 'Top 50 Global'    },
    ],

    highlights: [
        { icon: '🎯', text: '96% Success Rate' },
        { icon: '💼', text: 'Work 20hrs/Week During Term' },
        { icon: '🎓', text: '2-Year Post Study Work Visa' },
        { icon: '🏆', text: 'Top Ranked Universities' },
        { icon: '⚡', text: 'Fast Visa Processing' },
        { icon: '💰', text: 'Scholarships Available' },
        { icon: '🌍', text: 'Globally Recognized Degrees' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Must be valid for full course duration' },
        { item: 'CAS Letter', detail: 'Confirmation of Acceptance for Studies from UK institution' },
        { item: 'Academic Documents', detail: 'Transcripts, certificates and prior qualifications' },
        { item: 'IELTS / PTE Score', detail: 'Degree level: CEFR B2 minimum (IELTS 5.5–6.5+)' },
        { item: 'Proof of Funds', detail: '28 consecutive days bank statement before applying' },
        { item: 'SOP / Personal Statement', detail: 'Strong statement of purpose required' },
        { item: 'TB Test', detail: 'Required from selected countries — valid 6 months' },
        { item: 'Biometrics', detail: 'Enrolled at visa application centre' },
        { item: 'Passport Photos', detail: 'Recent passport-sized photographs' },
        { item: 'Visa Application Form', detail: 'Completed online via UKVI portal' },
    ],

    financialRequirements: [
        { label: 'London Living Cost', amount: '£1,529/month', note: 'Up to 9 months (updated Nov 2025)' },
        { label: 'Outside London', amount: '£1,171/month', note: 'Up to 9 months (updated Nov 2025)' },
        { label: 'Fund Maintenance Period', amount: '28 Days', note: 'Must be held continuously' },
        { label: 'Per Dependent (if eligible)', amount: '+£680/month', note: 'PhD/Research programs only' },
    ],

    processingTime: '3–8 Weeks',
    successRate: '96%',

    intakes: [
        { season: 'September Intake', icon: '🍂', note: 'Main intake — widest course selection' },
        { season: 'January Intake', icon: '❄️', note: 'Second major intake' },
        { season: 'May Intake', icon: '🌸', note: 'Limited courses available' },
    ],

    topCourses: [
        'Business Management', 'Artificial Intelligence', 'Cybersecurity',
        'Engineering', 'Healthcare & Nursing', 'Finance', 'Law', 'Hospitality Management',
    ],

    topUniversities: [
        { name: 'University of Oxford', rank: '#1 World' },
        { name: 'University of Cambridge', rank: '#2 World' },
        { name: 'Imperial College London', rank: '#8 World' },
        { name: 'University College London', rank: '#9 World' },
        { name: 'University of Manchester', rank: 'Top 50' },
        { name: "King's College London", rank: 'Russell Group' },
    ],

    workRights: {
        duringStudies: [
            'Up to 20 hours/week during term time',
            'Full-time during official holidays',
        ],
        afterGraduation: [
            '2-Year Graduate Route Visa (Bachelor/Masters)',
            '3-Year Graduate Route for PhD students',
            'Note: From Jan 2027 — reduced to 18 months for Bachelor/Masters',
        ],
    },

    fees: {
        government: [
            { label: 'Student Visa Fee', amount: '£524' },
            { label: 'Immigration Health Surcharge', amount: '£776/year' },
        ],
        additional: [
            'IELTS / PTE Exam Fee',
            'TB Test (if applicable)',
            'Biometrics Fee',
            'Tuition Deposit to University',
        ],
        consultation: 'Free Initial Consultation',
    },

    refusalReasons: [
        'Insufficient Funds or Weak Bank Statements',
        'Weak or Generic SOP',
        'Incomplete Documentation',
        'Incorrect or Inconsistent Information',
        'Poor Credibility Interview Performance',
        'CAS Details Mismatch',
    ],

    steps: [
        { step: 1, title: 'Free Consultation & Profile Assessment', desc: 'Evaluate eligibility, course, and university options' },
        { step: 2, title: 'University & Course Selection', desc: 'Choose UKVI-licensed institution and right program' },
        { step: 3, title: 'Admission Application', desc: 'Apply to universities and secure conditional/unconditional offer' },
        { step: 4, title: 'Receive Offer Letter & CAS', desc: 'University issues CAS number — key for visa application' },
        { step: 5, title: 'Financial Preparation', desc: 'Arrange and maintain funds for 28 consecutive days' },
        { step: 6, title: 'Visa Documentation', desc: 'Prepare full document checklist with our expert team' },
        { step: 7, title: 'Visa Filing & Biometrics', desc: 'Submit online application and attend biometrics appointment' },
        { step: 8, title: 'Visa Decision & Pre-Departure', desc: 'Receive visa and get pre-departure guidance from our team' },
    ],

    faqs: [
        { q: 'What is CAS?', a: 'CAS (Confirmation of Acceptance for Studies) is an official reference number issued by your UK institution, required for your visa application. Universities now send CAS details electronically to UKVI.' },
        { q: 'Can I work while studying?', a: 'Yes — most students can work up to 20 hours per week during term time and full-time during official holidays.' },
        { q: 'Can I stay after graduation?', a: 'Yes. The Graduate Route (PSW) allows 2 years for Bachelor/Masters graduates and 3 years for PhD graduates. Note: From January 2027 this may reduce to 18 months for Bachelor/Masters.' },
        { q: 'Is IELTS mandatory?', a: 'Most universities require IELTS, PTE or equivalent. Degree-level courses need CEFR B2 minimum. Some universities accept their own English tests.' },
        { q: 'Can my spouse accompany me?', a: 'From January 2025, dependants are only permitted for PhD and research-based postgraduate students. Taught masters and undergraduate students cannot bring dependants.' },
        { q: 'How long does processing take?', a: 'Typically 3–8 weeks. Priority processing services are available in some countries. Apply at least 8 weeks before your course start date.' },
        { q: 'Is an interview required?', a: 'Some applicants may be called for a credibility interview by UKVI. Our team prepares you fully for this.' },
        { q: 'How much funds do I need?', a: 'From November 2025: £1,529/month in London or £1,171/month outside London, held for 28 consecutive days before applying, plus full tuition fees.' },
    ],

    importantUpdates: [
        { update: 'Visa fee increased to £524 (June 2025)', type: 'fee' },
        { update: 'Living costs outside London: £1,171/month (from Nov 2025)', type: 'finance' },
        { update: 'Dependants only for PhD/Research students (from Jan 2025)', type: 'policy' },
        { update: 'Graduate Route may reduce to 18 months from Jan 2027', type: 'warning' },
        { update: 'Apply 8 weeks before course start (previously 6 weeks)', type: 'process' },
    ],

    whyVistaar: [
        'Expert Student Visa Guidance',
        'High Approval Rate',
        'University Admission Assistance',
        'Complete Documentation Support',
        'Transparent Process',
        'End-to-End Visa Assistance',
    ],
}