import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPostById(id) {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
}

export async function createPost(postData) {
  const response = await axios.post(`${BASE_URL}/posts`, postData);
  return response.data;
}
