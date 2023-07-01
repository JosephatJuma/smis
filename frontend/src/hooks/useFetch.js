import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    fetchData();
    return () => {
      // Cleanup function to cancel any pending requests if the component is unmounted
      isMounted = false;
    };
  }, [url]);

  return { data, error };
}

export default useFetch;
