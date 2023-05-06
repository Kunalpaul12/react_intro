import React from "react";
import useApi from "../customHooks/useApi";

const Album = () => {
  const { loading, data, error } = useApi({
    api: "https://jsonplaceholder.typicode.com/albums",
  });
  return (
    <div>
      {loading && <h1>Loading Album</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{data}</h1>}
    </div>
  );
};

export default Album;
