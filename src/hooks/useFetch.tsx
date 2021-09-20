import { useState, useEffect } from "react";
import { IUseFetch } from "../typings";

function useFetch<T>(url: string): IUseFetch<T> {
  const [data, setData] = useState<null | T>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    window
      .fetch(url)
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          res.json().then((json) => {
            setData(json);
          });
        } else {
          setError("Der skete en fejl. Prøv igen snart");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
