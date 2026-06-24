import axios from 'axios';
import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterEach,
} from '@jest/globals';
import { fetchCommentsWithConfig } from './fetchWithHeadersAndParams.js';

describe('Task 2: Request headers and URL params', () => {
  let getSpy;

  beforeEach(() => {
    getSpy = jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      data: [{ id: 1, postId: 7, body: 'test comment' }],
    });
  });

  afterEach(() => {
    getSpy.mockRestore();
  });

  it('includes custom headers and URL params in the axios request', async () => {
    await fetchCommentsWithConfig(7);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments',
      {
        params: {
          postId: 7,
          sort: 'desc',
        },
        headers: {
          'X-Request-Id': 'homework-task-2',
          'X-Client-Name': 'auto-js-course',
        },
      },
    );
  });

  it('returns response data from the API', async () => {
    const response = await fetchCommentsWithConfig(7);

    expect(response.status).toBe(200);
    expect(response.data).toEqual([
      { id: 1, postId: 7, body: 'test comment' },
    ]);
  });
});
