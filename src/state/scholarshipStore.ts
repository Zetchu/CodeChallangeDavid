import { create } from 'zustand';
import type { ScholarshipData } from '../types/Scholarship';
import { fetchScholarshipData } from '../services/scholarshipService';

interface ScholarshipState {
  data: ScholarshipData | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

export const useScholarshipStore = create<ScholarshipState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const { scholarship } = await fetchScholarshipData();
      set({ data: scholarship, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
