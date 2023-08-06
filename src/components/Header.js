import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
      </Link>

      <div className="nav-items">
        <ul>
          <li>Online Status - {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
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
