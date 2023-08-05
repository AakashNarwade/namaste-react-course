// import { useState } from "react";

import React, { useState } from "react";

const User = ({ name }) => {
  console.log(name);
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>User Profile</h1>
      <h2>Name: Aakash Narwade</h2>
      <h2>Location: Mumbai</h2>
      <p>{count}</p>
    </div>
  );
};

export default User;
