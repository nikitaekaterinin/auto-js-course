import { describe, it, expect } from '@jest/globals';
import { fetchInvalidResource } from './fetchWithError.js';

describe('Task 1: Error handling for invalid URL', () => {
  it('handles axios error and returns proper error message', async () => {
    const result = await fetchInvalidResource();

    expect(result.success).toBe(false);
    expect(result.status).toBe(404);
    expect(result.message).toBe(
      'Resource not found: endpoint does not exist',
    );
  });
});
