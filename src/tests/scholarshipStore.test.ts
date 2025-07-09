import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useScholarshipStore } from '../state/scholarshipStore';
import * as service from '../services/scholarshipService';
import { mockScholarship } from '../constants/mockScholarship';

describe('useScholarshipStore', () => {
  beforeEach(() => {
    // Reset Zustand store state between tests
    useScholarshipStore.setState({
      data: null,
      loading: false,
      error: null,
    });
  });

  it('fetches data successfully and updates store state', async () => {
    vi.spyOn(service, 'fetchScholarshipData').mockResolvedValueOnce({
      scholarship: mockScholarship,
    });

    const { fetchData } = useScholarshipStore.getState();
    await fetchData();

    const state = useScholarshipStore.getState();
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.data).toEqual(mockScholarship);
  });

  it('handles API failure and sets error state', async () => {
    vi.spyOn(service, 'fetchScholarshipData').mockRejectedValueOnce(
      new Error('Fetch failed')
    );

    const { fetchData } = useScholarshipStore.getState();
    await fetchData();

    const state = useScholarshipStore.getState();
    expect(state.loading).toBe(false);
    expect(state.data).toBe(null);
    expect(state.error).toBe('Fetch failed');
  });
});
