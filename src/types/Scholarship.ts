export interface DescriptionBlock {
  type: string;
  data: string;
}

export interface WhatYouWillLearnItem {
  title: string;
  data: string;
}

export interface Location {
  name: string;
  description: string;
  acronym: string;
}

export interface FAQItem {
  type: string;
  question: string;
  answer: DescriptionBlock[];
}

type Company = {
  id: number;
  scope: string;
  name: string;
  type: string;
  color: string;
  website: string | null;
  rank: number;
  description: {
    type: string;
    data: string;
  };
};

export interface ScholarshipData {
  duration: number;
  company: Company;
  about_description: string;
  name: string;
  description: DescriptionBlock[];
  about: DescriptionBlock[];
  tuition: number;
  total_value: number;
  remaining: number;
  stipend_per_month: number;
  stipend_per_year: number;
  study_commitment_text: string;
  study_commitment: number;
  internship_commitment_text: string;
  internship_commitment: number;
  what_you_will_learn: WhatYouWillLearnItem[];
  internship_description: DescriptionBlock[];
  internship_expectation: {
    type: string;
    data: string[];
  };
  faqs: {
    items: FAQItem[];
  };
  application_end_date: string;
  scholarship_start_date: string;
  scholarship_end_date: string;
  location: Location;
  position: string;
}
