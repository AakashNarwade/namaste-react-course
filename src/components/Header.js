import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
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
