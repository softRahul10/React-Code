import { useState, useCallback } from "react";

const useHttp = () => {
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);

      const sendRequest = useCallback(async (fetchConfig, applyData) => {
            setIsLoading(true);
            setError(null);
            try {
                  const response = await fetch(fetchConfig.url, {
                        method: fetchConfig.method ? fetchConfig.method : 'GET',
                        body: fetchConfig.body ? JSON.stringify(fetchConfig.body) : null,
                        headers: fetchConfig.headers ? fetchConfig.headers : {},
                  });

                  if (!response.ok) {
                        throw new Error("Request failed!");
                  }

                  const data = await response.json();
                  applyData(data);
            } catch (err) {
                  setError(err.message || "Something went wrong!");
            }
            setIsLoading(false);
      },[]);

      return {
            isLoading,
            error,
            sendRequest,
      };
};

export default useHttp;
