import React, { useState, useEffect } from "react";

/**
 * Custom Hooks
 * It is use if we need to do some repeat task which need react hook support such as useState or useEffect
 * else this can also be done by functions
 *
 * The name should start with use as its a naming convention
 * We can also achieved this with function but below are some thing to know before implementing it
 * 1> function will re-render itself (which can be solved by useCallback)
 * 2> in functions we wont be able to use hooks
 */

const useApi = ({ api }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Added a fake timer for showing loading on UI
      fetch({ url: api })
        .then((e: any) => {
          setData(e.toString());
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  }, [api]);

  return { loading, data, error };
};

export default useApi;
