import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => setLoginButton(!loginButton)}
            className="login-btn"
          >
            {loginButton ? "login" : "logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
