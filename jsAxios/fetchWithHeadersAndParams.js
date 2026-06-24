import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchCommentsWithConfig(postId) {
  const response = await axios.get(`${BASE_URL}/comments`, {
    params: {
      postId,
      sort: 'desc',
    },
    headers: {
      'X-Request-Id': 'homework-task-2',
      'X-Client-Name': 'auto-js-course',
    },
  });

  return response;
}
