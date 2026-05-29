import mcGill from '../../assets/canada/McGill.jpg'
import mcMaster from '../../assets/canada/McMaster.jpg'
import ubc from '../../assets/canada/Ubc.jpg'
import uot from '../../assets/canada/Uot.jpg'

export const canada = {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    tagline: 'Study, Work & Settle in Canada',
    overview: 'Study in Canada with globally recognized education, affordable tuition, work opportunities, and strong PR pathways after graduation.',
    heroColor: '#D81920',
    accentColor: '#FF4B55',
    bgGradient: 'linear-gradient(135deg, #0F172A 0%, #1a0505 50%, #2d0a0a 100%)',
    cardGradient: 'linear-gradient(135deg, rgba(216,25,32,0.15), rgba(216,25,32,0.05))',
    cardBorder: 'rgba(216,25,32,0.25)',

    heroImages: [
        { src: mcGill,   caption: 'McGill University',                  badge: '#1 in Canada'      },
        { src: uot,      caption: 'University of Toronto',              badge: '#2 in Canada'      },
        { src: ubc,      caption: 'University of British Columbia',     badge: '#3 in Canada'      },
        { src: mcMaster, caption: 'McMaster University',                badge: 'Top 5 in Canada'   },
    ],

    highlights: [
        { icon: '🎯', text: '98% Success Rate' },
        { icon: '💼', text: 'Work While Studying' },
        { icon: '🎓', text: 'Up to 3 Years PGWP' },
        { icon: '🏠', text: 'PR Pathways Available' },
        { icon: '👫', text: 'Spouse Open Work Permit' },
        { icon: '🌍', text: 'Globally Recognized Degrees' },
    ],

    requirements: [
        { item: 'Valid Passport', detail: 'Minimum 6 months validity' },
        { item: 'Offer Letter (LOA)', detail: 'From a DLI approved institution' },
        { item: 'IELTS/PTE Score', detail: 'Min 6.0 IELTS or equivalent' },
        { item: 'Academic Documents', detail: 'Transcripts, certificates, degrees' },
        { item: 'SOP', detail: 'Statement of Purpose letter' },
        { item: 'Proof of Funds', detail: 'Min CAD $10,000 in bank' },
        { item: 'Medical & Biometrics', detail: 'IRCC approved panel physician' },
    ],

    processingTime: '4–12 Weeks',
    successRate: '98%',

    fees: {
        government: [
            { label: 'Study Permit Fee', amount: 'CAD $150' },
            { label: 'Biometrics Fee', amount: 'CAD $85' },
        ],
        consultation: 'Free Initial Consultation',
    },

    steps: [
        { step: 1, title: 'Free Consultation', desc: 'Discuss eligibility and goals' },
        { step: 2, title: 'University Selection', desc: 'Choose the right institution & program' },
        { step: 3, title: 'Admission Application', desc: 'Apply and secure your offer letter' },
        { step: 4, title: 'Visa Documentation', desc: 'Prepare all required documents' },
        { step: 5, title: 'Visa Filing', desc: 'Submit application to IRCC' },
        { step: 6, title: 'Biometrics & Medical', desc: 'Complete biometrics and medical exam' },
        { step: 7, title: 'Visa Approval', desc: 'Receive your study permit and travel' },
    ],

    faqs: [
        { q: 'Can I work while studying?', a: 'Yes, up to 24 hours/week during studies and full-time during scheduled breaks.' },
        { q: 'Can I get PR after study?', a: 'Yes, through Express Entry and Provincial Nominee Program (PNP) pathways.' },
        { q: 'Is IELTS mandatory?', a: 'Most colleges and universities require IELTS 6.0 or equivalent (PTE/TOEFL).' },
        { q: 'Can spouse accompany me?', a: 'Yes, your spouse may be eligible for an Open Work Permit to work anywhere in Canada.' },
    ],

    whyVistaar: [
        'Expert Visa Guidance',
        'High Approval Rate',
        'End-to-End Support',
        'Fast & Transparent Process',
        'Trusted Immigration Experts',
    ],
}