import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [status, setStatus] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, [url]);

  async function fetchNow(url) {
    setStatus({ loading: true });
    try {
      const fetchedData = await fetch(url);
      const result = await fetchedData.json();
      setStatus({ data: result, loading: false });
    } catch (error) {
      setStatus({ loading: false, error: error });
    }
  }

  return { ...status };
};

export default useFetch;
