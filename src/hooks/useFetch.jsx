import { useEffect, useState } from "react";
import { fetchdataFromApi } from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loadng ...");
    setData(null);
    setError(null);
    fetchdataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
