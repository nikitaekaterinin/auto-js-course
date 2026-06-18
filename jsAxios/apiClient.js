import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  console.log(
    `[REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
  );
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log(
      `[RESPONSE] ${response.status} ${response.config.baseURL}${response.config.url}`,
    );
    return response;
  },
  (error) => {
    const status = error.response?.status ?? 'N/A';
    const url = error.config?.url ?? 'unknown';
    console.error(`[ERROR] ${status} ${url} — ${error.message}`);
    return Promise.reject(error);
  },
);

export { BASE_URL };
export default apiClient;
