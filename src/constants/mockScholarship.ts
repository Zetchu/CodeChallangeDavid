import type { ScholarshipData } from '../types/Scholarship';

export const mockScholarship = {
  duration: 6,
  company: {
    id: 1,
    scope: 'global',
    name: 'Mock Company',
    type: 'partner',
    color: '#000',
    website: 'https://mock.com',
    rank: 1,
    description: {
      type: 'text',
      data: 'Company description',
    },
  },
  about_description: 'About the program',
  name: 'Mock Scholarship',
  description: [],
  about: [],
  tuition: 1000,
  total_value: 5000,
  remaining: 3000,
  stipend_per_month: 500,
  stipend_per_year: 6000,
  study_commitment_text: '10h/week',
  study_commitment: 10,
  internship_commitment_text: '3 months',
  internship_commitment: 3,
  what_you_will_learn: [],
  internship_description: [],
  internship_expectation: {
    type: 'list',
    data: [],
  },
  faqs: {
    items: [],
  },
  application_end_date: '2025-12-31',
  scholarship_start_date: '2026-01-01',
  scholarship_end_date: '2026-06-30',
  location: {
    name: 'Barcelona',
    description: 'Spain office',
    acronym: 'BCN',
  },
  position: 'Data Scientist Intern',
} as const satisfies ScholarshipData;
