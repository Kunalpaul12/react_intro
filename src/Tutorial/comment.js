import React from "react";
import useApi from "../customHooks/useApi";

const Comments = () => {
  const { loading, data, error } = useApi({
    api: "https://jsonplaceholder.typicode.com/albums",
  });
  return (
    <div>
      {loading && <h1>Loading Comments</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{data}</h1>}
    </div>
  );
};

export default Comments;
