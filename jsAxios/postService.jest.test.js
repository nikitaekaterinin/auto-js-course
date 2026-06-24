import { jest, describe, it, expect, beforeEach } from '@jest/globals';

const mockGet = jest.fn();
const mockPost = jest.fn();

jest.unstable_mockModule('axios', () => ({
  default: {
    get: mockGet,
    post: mockPost,
  },
}));

const { getPostById, createPost } = await import('./postService.js');

describe('Task 3: Mocking Axios in Jest', () => {
  beforeEach(() => {
    mockGet.mockReset();
    mockPost.mockReset();
  });

  it('returns post data when mocked GET request succeeds', async () => {
    const mockPostData = {
      id: 1,
      userId: 1,
      title: 'Mocked post title',
      body: 'Mocked post body',
    };

    mockGet.mockResolvedValue({ status: 200, data: mockPostData });

    const result = await getPostById(1);

    expect(result).toEqual(mockPostData);
    expect(mockGet).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
  });

  it('throws error when mocked GET request fails', async () => {
    mockGet.mockRejectedValue(new Error('Network Error'));

    await expect(getPostById(1)).rejects.toThrow('Network Error');
    expect(mockGet).toHaveBeenCalledTimes(1);
  });

  it('returns created post when mocked POST request succeeds', async () => {
    const newPost = {
      title: 'New post',
      body: 'Post body',
      userId: 1,
    };
    const createdPost = { ...newPost, id: 101 };

    mockPost.mockResolvedValue({ status: 201, data: createdPost });

    const result = await createPost(newPost);

    expect(result).toEqual(createdPost);
    expect(mockPost).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      newPost,
    );
  });

  it('throws error when mocked POST request fails', async () => {
    mockPost.mockRejectedValue(new Error('Server unavailable'));

    await expect(
      createPost({ title: 'Fail', body: 'Fail', userId: 1 }),
    ).rejects.toThrow('Server unavailable');
  });
});
