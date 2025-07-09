import axios from 'axios';
import type { ScholarshipData } from '../types/Scholarship';

export const fetchScholarshipData = async (): Promise<{
  scholarship: ScholarshipData;
}> => {
  const res = await axios.get(
    'https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab'
  );

  return res.data();
};
