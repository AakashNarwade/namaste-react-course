import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Error</h1>
      <h2>OOoppssss</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </>
  );
};

export default Error;
