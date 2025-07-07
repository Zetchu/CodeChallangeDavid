import type { ScholarshipData } from '../types/Scholarship';

export const fetchScholarshipData = async (): Promise<{
  scholarship: ScholarshipData;
}> => {
  const res = await fetch(
    'https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch scholarship data');
  }

  return res.json();
};
