import axios from 'axios';

const INVALID_URL = 'https://jsonplaceholder.typicode.com/invalid-endpoint-404';

export async function fetchInvalidResource() {
  try {
    await axios.get(INVALID_URL);
    return { success: true, message: 'Request succeeded unexpectedly' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      return {
        success: false,
        status,
        message:
          status === 404
            ? 'Resource not found: endpoint does not exist'
            : `Request failed: ${error.message}`,
      };
    }

    return {
      success: false,
      message: `Unexpected error: ${error.message}`,
    };
  }
}
