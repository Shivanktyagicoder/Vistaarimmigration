import harvard  from '../../assets/USA/harvard.jpg'
import mit       from '../../assets/USA/mit.jpg'
import stanford  from '../../assets/USA/stranford.jpg'
import princeton from '../../assets/USA/prinston.jpg'
import chicago   from '../../assets/USA/chicago.jpg'

export const usa = {
  id: 'usa',
  country: 'United States',
  flag: '🇺🇸',
  tagline: 'World-Class Research, Career & Innovation Hub',
  overview: 'The USA F-1 Student Visa allows international students to study full-time at SEVP-approved colleges and universities. Known for cutting-edge research, top-ranked institutions, strong OPT/STEM OPT work pathways, and unmatched career opportunities.',
  heroColor: '#3C3B6E',
  accentColor: '#6366F1',
  bgGradient: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
  cardGradient: 'linear-gradient(135deg, rgba(60,59,110,0.08), rgba(60,59,110,0.03))',
  cardBorder: 'rgba(60,59,110,0.18)',

  heroImages: [
    { src: harvard,  caption: 'Harvard University',   badge: '#1 Ranked'        },
    { src: mit,      caption: 'MIT',                  badge: 'Top STEM School'  },
    { src: stanford, caption: 'Stanford University',  badge: 'Silicon Valley'   },
    { src: princeton,caption: 'Princeton University', badge: 'Ivy League'       },
    { src: chicago,  caption: 'University of Chicago',badge: 'Top 10 World'     },
  ],

  highlights: [
    { icon: '🎯', text: '94% Success Rate'               },
    { icon: '💼', text: 'OPT — 12 Months Work Auth'      },
    { icon: '🔬', text: 'STEM OPT — 24 Month Extension'  },
    { icon: '🏆', text: 'Top Ranked Universities'        },
    { icon: '🚀', text: 'High Career Opportunities'      },
    { icon: '🔭', text: 'Research & Internship Exposure' },
    { icon: '🌍', text: 'Globally Recognized Degrees'    },
    { icon: '💡', text: 'F-1 Visa — Most Popular Route'  },
  ],

  visaType: {
    name: 'F-1 Student Visa',
    description: 'The F-1 Visa is the most common US student visa for full-time academic studies at SEVP-approved institutions.',
    benefits: [
      'Study full-time at any SEVP-approved institution',
      'Work on-campus up to 20 hours/week during semester',
      'Apply for OPT after graduation (12 months)',
      'STEM OPT extension — additional 24 months',
      'CPT (Curricular Practical Training) during studies',
    ],
  },

  requirements: [
    { item: 'Valid Passport',                detail: 'Valid for at least 6 months beyond intended stay'          },
    { item: 'Form I-20',                     detail: 'Official admission document from SEVP-approved institution' },
    { item: 'SEVIS Fee Receipt',             detail: 'USD $350 — pay before visa interview'                      },
    { item: 'DS-160 Confirmation',           detail: 'Online non-immigrant visa application form'                },
    { item: 'Visa Appointment Confirmation', detail: 'Scheduled at US Embassy or Consulate'                      },
    { item: 'Academic Documents',            detail: 'Transcripts, certificates and prior qualifications'        },
    { item: 'English Test Scores',           detail: 'IELTS / TOEFL / PTE / Duolingo accepted'                   },
    { item: 'SOP / Personal Statement',      detail: 'Clearly explaining study intent and career goals'          },
    { item: 'Financial Proof',               detail: 'Bank statements, sponsor affidavit, income proof'          },
    { item: 'Passport Size Photos',          detail: 'Meeting US visa photo requirements'                        },
    { item: 'Resume / CV',                   detail: 'Recommended for postgraduate applicants'                   },
  ],

  financialRequirements: [
    { label: 'Tuition Fees',          amount: 'Varies',        note: 'As per university offer letter'        },
    { label: 'Living Expenses (Est)', amount: 'USD $10,000+',  note: 'Per year depending on city/state'      },
    { label: 'Fund History',          amount: 'Recommended',   note: '3–6 months bank statement history'     },
    { label: 'Sponsor Documents',     amount: 'If applicable', note: 'Affidavit of support + income proof'   },
  ],

  processingTime: '3–8 Weeks',
  successRate: '94%',

  intakes: [
    { season: 'Fall Intake',   icon: '🍂', note: 'Aug/Sep — Most popular, widest course selection' },
    { season: 'Spring Intake', icon: '❄️', note: 'January — Good availability'                    },
    { season: 'Summer Intake', icon: '☀️', note: 'May — Limited programs available'               },
  ],

  topCourses: [
    'Computer Science', 'Artificial Intelligence', 'Data Science',
    'Cybersecurity', 'Engineering', 'Business Analytics',
    'Finance', 'Healthcare & Nursing', 'Biotechnology', 'Information Technology',
  ],

  topUniversities: [
    { name: 'Harvard University',         rank: '#1 World'      },
    { name: 'MIT',                        rank: '#2 World'      },
    { name: 'Stanford University',        rank: '#3 World'      },
    { name: 'UC Berkeley',                rank: 'Top 10 World'  },
    { name: 'Carnegie Mellon University', rank: 'Top CS School' },
    { name: 'Columbia University',        rank: 'Ivy League'    },
    { name: 'New York University (NYU)',   rank: 'Top 50 World'  },
  ],

  workRights: {
    duringStudies: [
      'On-campus work: up to 20 hours/week during semester',
      'Full-time on-campus during official breaks',
      'CPT (Curricular Practical Training) — work related to degree',
      'Off-campus work generally NOT permitted without authorization',
    ],
    afterGraduation: [
      'OPT — 12 months work authorization in field of study',
      'STEM OPT Extension — additional 24 months (36 months total)',
      'H-1B visa sponsorship pathway through employer',
      'Note: 17% drop in US admits reported in 2025 due to stricter policies',
    ],
  },

  interviewInfo: {
    required: true,
    note: 'From September 18, 2025 — most nonimmigrant visa applicants must attend in-person interviews. Previously waived categories now require interview.',
    commonQuestions: [
      'Why did you choose this university?',
      'What course are you studying and why?',
      'Who is sponsoring your education?',
      'What are your career goals after graduation?',
      'Do you plan to return home after studies?',
    ],
    tips: [
      'Be confident and concise in your answers',
      'Carry all original documents',
      'Demonstrate strong ties to home country',
      'Show clear academic and career plan',
    ],
  },

  fees: {
    government: [
      { label: 'F-1 Visa Application Fee (MRV)', amount: 'USD $185' },
      { label: 'SEVIS I-901 Fee',                amount: 'USD $350' },
      { label: 'Visa Integrity Fee (NEW 2025)',   amount: 'USD $250' },
    ],
    totalFees: 'Approx. USD $785 total mandatory fees',
    additional: [
      'IELTS / TOEFL / Duolingo Exam Fee',
      'University Application Fees',
      'Health Insurance (required by most universities)',
      'Biometrics (if required)',
    ],
    consultation: 'Free Initial Consultation',
    note: 'New USD $250 Visa Integrity Fee added from FY2025 — cannot be waived',
  },

  importantUpdates: [
    { update: 'New USD $250 Visa Integrity Fee added from FY2025 — non-waivable',             type: 'fee'     },
    { update: 'In-person interview now mandatory for most applicants (from Sep 18, 2025)',     type: 'policy'  },
    { update: '17% drop in US admits reported in 2025 — stricter screening in place',         type: 'warning' },
    { update: 'F-1 students barred from switching courses in first year (new rule)',           type: 'warning' },
    { update: 'Social media history review included in visa screening process',               type: 'policy'  },
    { update: 'Duration of Status (D/S) changing to fixed-stay model — monitor updates',      type: 'warning' },
    { update: 'US State Dept announced changes to student/exchange visitor visas (Jun 2025)', type: 'policy'  },
  ],

  refusalReasons: [
    'Weak Visa Interview Performance',
    'Insufficient Financial Proof',
    'Lack of Genuine Student Intent',
    'Incomplete or Incorrect Documentation',
    'Poor Course/Career Relevance',
    'No Clear Ties to Home Country',
    'Social Media Red Flags',
  ],

  steps: [
    { step: 1,  title: 'Free Consultation & Profile Assessment', desc: 'Evaluate eligibility, university options and financial readiness'             },
    { step: 2,  title: 'University & Course Selection',          desc: 'Choose SEVP-approved institution — course changes restricted in Year 1'       },
    { step: 3,  title: 'Admission Application',                  desc: 'Apply to universities and secure acceptance letter'                           },
    { step: 4,  title: 'Receive I-20 Form',                      desc: 'Institution issues Form I-20 after enrollment confirmation'                   },
    { step: 5,  title: 'Pay SEVIS Fee',                          desc: 'Pay USD $350 SEVIS I-901 fee — keep receipt for interview'                    },
    { step: 6,  title: 'Complete DS-160 Form',                   desc: 'Fill online non-immigrant visa application carefully'                         },
    { step: 7,  title: 'Book Visa Interview',                    desc: 'Schedule at US Embassy — in-person interview now mandatory (Sep 2025)'        },
    { step: 8,  title: 'Prepare Documentation & Interview Prep', desc: 'Our team provides full interview coaching and document preparation'           },
    { step: 9,  title: 'Attend Biometrics & Interview',          desc: 'Attend visa appointment with complete documentation'                          },
    { step: 10, title: 'Visa Decision & Pre-Departure',          desc: 'Receive visa and get pre-departure guidance from our expert team'             },
  ],

  faqs: [
    { q: 'What is Form I-20?',             a: 'Form I-20 is an official admission document issued by a SEVP-approved US institution. It is required for the F-1 visa application and contains your program details and SEVIS ID number.'                                                 },
    { q: 'What is SEVIS?',                 a: 'SEVIS (Student and Exchange Visitor Information System) is the US government system that tracks international students throughout their stay. You must pay the USD $350 SEVIS I-901 fee before your visa interview.'                        },
    { q: 'What fees do I need to pay?',    a: 'From FY2025, total mandatory fees are approximately USD $785: Visa Application Fee ($185) + SEVIS Fee ($350) + new Visa Integrity Fee ($250). The Visa Integrity Fee cannot be waived.'                                                   },
    { q: 'Is interview mandatory?',        a: 'Yes. From September 18, 2025, most nonimmigrant visa applicants including students must now attend in-person interviews at the US Embassy or Consulate.'                                                                                  },
    { q: 'Can I work while studying?',     a: 'F-1 students can work on-campus up to 20 hours/week during semesters and full-time during official breaks. Off-campus work is generally not permitted without special authorization (CPT/OPT).'                                          },
    { q: 'What is OPT?',                   a: 'OPT (Optional Practical Training) allows eligible F-1 students to work in the USA after graduation in their field of study for up to 12 months.'                                                                                         },
    { q: 'What is STEM OPT?',              a: 'Eligible STEM field graduates may apply for a 24-month OPT extension, giving a total of 36 months of work authorization in the USA.'                                                                                                    },
    { q: 'Can I change my course?',        a: 'New rules bar F-1 students from switching courses in the first year of study. Choose your course carefully — our advisors will help you select the right program from the start.'                                                        },
    { q: 'Is IELTS mandatory?',            a: 'Most universities require IELTS, TOEFL, PTE, or Duolingo scores. Requirements vary by institution. Some universities offer conditional admission with English language support programs.'                                                 },
    { q: 'How long does processing take?', a: 'Usually 3–8 weeks, but interview wait times vary significantly by country and season. Apply at least 3 months before your course start date. Current stricter policies may cause longer delays.'                                         },
    { q: 'Can I get PR in the USA?',       a: 'Long-term pathways include H-1B employer sponsorship, EB-2/EB-3 employment-based green cards. These are competitive and require careful planning — our team can guide you.'                                                              },
  ],

  whyVistaar: [
    'Expert USA F-1 Visa Guidance',
    'University Admission Assistance',
    'Visa Interview Preparation & Coaching',
    'Financial Documentation Support',
    'High Approval Rate',
    'Transparent Process',
    'End-to-End Student Visa Assistance',
  ],
}
