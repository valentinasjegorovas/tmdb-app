import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmZkMzFiNjFkODkyNzYzZDc0ZDBhODliNTVmYTczMSIsIm5iZiI6MTcxOTU3NTQxOC4xNzMzMzIsInN1YiI6IjY2NWMzMDU2MzMwMGYzYjgzYjg4MTUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k2La5X-XxmfmEGWD5hj6c8uOqvimEiCVfp7brFMFg7U',
      }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  return {
    loading,
    error,
    request,
  };
};
