import { ukVisitorVisa } from './uk'
import { usaVisitorVisa } from './usa'
import { canadaVisitorVisa } from './canada'
import { australiaVisitorVisa } from './australia'
import { schengenVisitorVisa } from './schenegen'
import { newzealandVisitorVisa } from './newzealand'

export const visitorVisaCountries = [
    {
        ...ukVisitorVisa,
        code: 'gb', fee: '£135', maxStay: '6 Months', processing: '3 Weeks',
        successRate: '94%', color: '#012169', accentColor: '#4169E1',
    },
    {
        ...usaVisitorVisa,
        code: 'us', fee: '~$435', maxStay: '6 Months', processing: '2–3 Months',
        successRate: '89%', color: '#3C3B6E', accentColor: '#6366F1',
    },
    {
        ...canadaVisitorVisa,
        code: 'ca', fee: 'CAD $100', maxStay: '6 Months', processing: '2–3 Months',
        successRate: '91%', color: '#D81920', accentColor: '#EF4444',
    },
    {
        ...australiaVisitorVisa,
        code: 'au', fee: 'AUD $190+', maxStay: '3–12 Months', processing: '1–33 Days',
        successRate: '90%', color: '#00843D', accentColor: '#22C55E',
    },
    {
        ...schengenVisitorVisa,
        code: 'eu', fee: '€90', maxStay: '90 Days', processing: '15–45 Days',
        successRate: '85–97%', color: '#003399', accentColor: '#3B82F6',
    },
    {
        ...newzealandVisitorVisa,
        code: 'nz', fee: 'NZD $246', maxStay: '6–9 Months', processing: '8–36 Days',
        successRate: '92%', color: '#00247D', accentColor: '#3B82F6',
    },
]

export {
    ukVisitorVisa, usaVisitorVisa, canadaVisitorVisa,
    australiaVisitorVisa, schengenVisitorVisa, newzealandVisitorVisa,
}