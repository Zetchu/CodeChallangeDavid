export interface DescriptionBlock {
  type: string;
  data: string;
}

export interface WhatYouWillLearnItem {
  title: string;
  data: string;
}

export interface FAQItem {
  type: string;
  question: string;
  answer: DescriptionBlock[];
}

export interface ScholarshipData {
  name: string;
  description: DescriptionBlock[];
  location: {
    name: string;
    description: string;
    acronym: string;
  };
  about: DescriptionBlock[];
  tuition: number;
  total_value: number;
  stipend_per_month: number;
  stipend_per_year: number;
  study_commitment_text: string;
  internship_commitment_text: string;
  what_you_will_learn: WhatYouWillLearnItem[];
  internship_description: DescriptionBlock[];
  internship_expectation: {
    type: string;
    data: string[];
  };
  faqs: {
    items: FAQItem[];
  };
}
