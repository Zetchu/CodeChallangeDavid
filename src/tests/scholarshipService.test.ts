import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchScholarshipData } from '../services/scholarshipService';

vi.mock('axios');

const mockedAxios = vi.mocked(axios, true);

describe('fetchScholarshipData', () => {
  it('returns scholarship data on success', async () => {
    const mockResponse = {
      data: {
        scholarship: {
          title: 'Test Title',
          location: 'Barcelona',
        },
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchScholarshipData();

    expect(result).toEqual(mockResponse.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('throws error on failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API failed'));

    await expect(fetchScholarshipData()).rejects.toThrow('API failed');
  });
});
