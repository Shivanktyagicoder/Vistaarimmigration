import auckland    from '../../assets/NZ/aucland.png'
import canterbury  from '../../assets/NZ/canterbury.jpg'
import otago       from '../../assets/NZ/otago.png'

export const newzealand = {
    id: 'newzealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Safe, Affordable & World-Class Education',
    overview: 'The New Zealand Student Visa allows international students to study full-time at approved universities and institutions across New Zealand — known for high-quality education, safe environment, strong work rights, and clear PR pathways after graduation.',
    heroColor: '#00247D',
    accentColor: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
    cardGradient: 'linear-gradient(135deg, rgba(0,36,125,0.08), rgba(0,36,125,0.03))',
    cardBorder: 'rgba(0,36,125,0.18)',

    heroImages: [
        { src: auckland,   caption: 'University of Auckland',   badge: '#1 in NZ'        },
        { src: canterbury, caption: 'University of Canterbury', badge: 'Top Ranked'       },
        { src: otago,      caption: 'University of Otago',      badge: 'Research Leader'  },
    ],

    highlights: [
        { icon: '🎯', text: '96% Success Rate' },
        { icon: '💼', text: 'Work 25hrs/Week (Updated Nov 2025)' },
        { icon: '🎓', text: 'Post-Study Work Visa Available' },
        { icon: '🛡️', text: 'Safe & Student-Friendly Country' },
        { icon: '🌿', text: 'High Quality of Life' },
        { icon: '💰', text: 'Affordable vs UK/Australia' },
        { icon: '🏠', text: 'PR Pathways Available' },
        { icon: '🌍', text: 'Globally Recognised Education' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Valid for full duration of course' },
        { item: 'Offer Letter from Approved Provider', detail: 'From a New Zealand NZQA-approved institution' },
        { item: 'Academic Documents', detail: 'Transcripts, certificates and prior qualifications' },
        { item: 'IELTS / PTE / TOEFL Score', detail: 'English proficiency proof — varies by institution' },
        { item: 'Statement of Purpose (SOP)', detail: 'Genuine intention to study — key requirement' },
        { item: 'Proof of Funds', detail: 'NZD $20,000/year living costs + tuition fees + travel' },
        { item: 'Medical Insurance', detail: 'Mandatory for full duration of stay' },
        { item: 'Medical Examination', detail: 'Required from approved panel physician' },
        { item: 'Chest X-Ray', detail: 'Required from certain countries' },
        { item: 'Police Clearance Certificate', detail: 'Required from certain countries' },
        { item: 'Passport Size Photos', detail: 'Recent passport-sized photographs' },
        { item: 'Visa Application Form', detail: 'Via ADEPT online portal (mandatory from Aug 18, 2025)' },
    ],

    financialRequirements: [
        { label: 'Living Expenses (Annual)', amount: 'NZD $20,000', note: 'Or NZD $1,667/month for short courses' },
        { label: 'Funds Scheme (High-Risk)', amount: 'ANZ Bank FTS', note: 'Required for India, Sri Lanka, China, Vietnam, Philippines' },
        { label: 'Return Travel Funds', amount: 'Evidence req.', note: 'Proof of outward ticket or funds for travel' },
        { label: 'Dependent (if applicable)', amount: 'Additional', note: 'Extra funds required per dependent' },
    ],

    processingTime: '4–10 Weeks',
    successRate: '96%',

    peakPeriod: {
        months: 'October–March',
        advice: 'Apply at least 3 months before travel to avoid peak season delays',
    },

    intakes: [
        { season: 'February Intake', icon: '☀️', note: 'Main intake — widest course selection' },
        { season: 'July Intake', icon: '❄️', note: 'Second major intake' },
        { season: 'November Intake', icon: '🌸', note: 'Selected institutions only' },
    ],

    topCourses: [
        'Information Technology',
        'Business Management',
        'Healthcare & Nursing',
        'Hospitality & Tourism',
        'Engineering',
        'Agriculture',
        'Data Science',
        'Cybersecurity',
    ],

    topUniversities: [
        { name: 'University of Auckland', rank: '#1 NZ / Top 100 World' },
        { name: 'University of Otago', rank: 'Top Research University' },
        { name: 'Victoria University of Wellington', rank: 'Top Ranked' },
        { name: 'Massey University', rank: 'Top NZ University' },
        { name: 'University of Waikato', rank: 'Top NZ University' },
        { name: 'Auckland University of Technology', rank: 'AUT — Top Ranked' },
    ],

    workRights: {
        duringStudies: [
            'Up to 25 hours/week during academic term (updated Nov 3, 2025)',
            'Previously 20 hours — increased to 25 hours from Nov 2025',
            'Full-time during scheduled course holidays',
            'Dependent children also increased to 25 hours/week',
        ],
        afterGraduation: [
            'Post-Study Work Visa — open work rights after graduation',
            'Skilled employment opportunities across New Zealand',
            'Pathways toward Skilled Migrant Category residency',
            'Employer-sponsored residency options available',
        ],
    },

    prPathways: [
        { pathway: 'Skilled Migrant Category', desc: 'Points-based residency for eligible graduates' },
        { pathway: 'Employer Sponsored Residency', desc: 'Sponsored by NZ employer after work experience' },
        { pathway: 'Long-Term Skill Shortage List', desc: 'Fast-track residency for in-demand occupations' },
    ],

    fees: {
        government: [
            { label: 'Student Visa Fee (Online — ADEPT)', amount: 'NZD $850+' },
            { label: 'Variation of Conditions Fee', amount: 'NZD $325' },
        ],
        additional: [
            'IELTS / PTE / TOEFL Exam Fee',
            'Medical Examination & Chest X-Ray',
            'Police Clearance Certificate',
            'Mandatory Medical Insurance',
            'Tuition Deposit to Institution',
        ],
        consultation: 'Free Initial Consultation',
        note: 'Visa fee increased from NZD $375 to NZD $750+ in Oct 2024, now NZD $850+ via ADEPT system',
    },

    importantUpdates: [
        { update: 'Work hours increased to 25hrs/week during term time (from Nov 3, 2025)', type: 'positive' },
        { update: 'All visa applications now via ADEPT online portal only (from Aug 18, 2025)', type: 'policy' },
        { update: 'Visa fee increased to NZD $850+ via new ADEPT system', type: 'fee' },
        { update: 'Peak season Oct–Mar: apply at least 3 months early to avoid delays', type: 'warning' },
        { update: 'ANZ Bank Funds Transfer Scheme (FTS) required for India, China, Sri Lanka, Vietnam, Philippines', type: 'policy' },
        { update: 'NZ Government target: double international education to $7.2 billion by 2034', type: 'positive' },
        { update: 'Draft applications in legacy system must have been submitted by Sep 17, 2025', type: 'policy' },
    ],

    refusalReasons: [
        'Insufficient Financial Proof',
        'Weak Statement of Purpose (SOP)',
        'Incomplete or Incorrect Documentation',
        'Lack of Genuine Student Intent',
        'Poor Academic Background',
        'Medical or Character Issues',
        'Funds not accessible (FTS scheme requirement)',
    ],

    steps: [
        { step: 1, title: 'Free Consultation & Eligibility Assessment', desc: 'Assess profile, course options and financial readiness' },
        { step: 2, title: 'Course & Institution Selection', desc: 'Choose NZQA-approved institution and right program' },
        { step: 3, title: 'Admission Application', desc: 'Apply and secure your offer of place from the institution' },
        { step: 4, title: 'Receive Offer Letter', desc: 'Obtain official offer letter from approved NZ provider' },
        { step: 5, title: 'Financial Preparation', desc: 'Arrange NZD $20,000 living funds + tuition — ANZ FTS if applicable' },
        { step: 6, title: 'Visa Documentation', desc: 'Prepare full checklist including SOP, medicals and insurance' },
        { step: 7, title: 'Medicals & Application Filing', desc: 'Submit via ADEPT portal (mandatory from Aug 2025) + complete medicals' },
        { step: 8, title: 'Visa Decision & Pre-Departure', desc: 'Receive visa and get full pre-departure guidance from our team' },
    ],

    faqs: [
        { q: 'Can I work while studying in NZ?', a: 'Yes — from November 3, 2025, eligible students can work up to 25 hours per week during academic terms (increased from 20 hours). Full-time work is permitted during scheduled holidays.' },
        { q: 'What is the ADEPT portal?', a: 'ADEPT (Advanced Digital Experience Platform for Transactions) is the new mandatory online system for all NZ student visa applications from August 18, 2025. It offers faster processing with online tracking.' },
        { q: 'How much funds do I need?', a: 'You need NZD $20,000 per year for living expenses (or $1,667/month for shorter courses), plus full tuition fees and return travel funds. Students from India, China, Sri Lanka, Vietnam and Philippines may need to use the ANZ Bank FTS scheme.' },
        { q: 'Is IELTS mandatory?', a: 'Most institutions require IELTS, PTE, TOEFL or equivalent. English requirements vary by institution and course level. Some students may be exempt based on prior English-medium education.' },
        { q: 'Can I stay after graduation?', a: 'Yes. Eligible graduates can apply for a Post-Study Work Visa with open work rights, allowing you to gain NZ work experience and potentially qualify for residency pathways.' },
        { q: 'Can my spouse accompany me?', a: 'Yes. Eligible students may include a spouse/partner and dependent children. Spouses may receive work rights depending on your course and qualification level.' },
        { q: 'When is the best time to apply?', a: 'October to March is peak season for NZ student visa applications. Apply at least 3 months before your intended travel date to avoid delays during this busy period.' },
        { q: 'Is New Zealand good for PR?', a: 'Yes. NZ offers Skilled Migrant Category, Employer Sponsored Residency, and Long-Term Skill Shortage pathways for eligible graduates. The government is actively growing its international student population through 2034.' },
        { q: 'Are scholarships available?', a: 'Yes — several universities offer merit-based and need-based scholarships. NZ government scholarships like the NZ Excellence Awards are also available for selected countries.' },
        { q: 'How long does processing take?', a: 'Usually 4–10 weeks. During peak season (October to March), delays are common. Submit your application at least 3 months before travel to ensure timely processing.' },
    ],

    whyVistaar: [
        'Expert New Zealand Visa Guidance',
        'High Approval Rate',
        'University Admission Assistance',
        'SOP & Documentation Support',
        'Transparent Process',
        'End-to-End Student Visa Assistance',
        'Professional Student Counseling',
    ],
}