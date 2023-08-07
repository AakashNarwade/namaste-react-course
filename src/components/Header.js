import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-50 shadow-lg">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="w-48" src={LOGO_URL} alt="logo" />
        </div>
      </Link>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status - {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4  hover:bg-orange-500 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4  hover:bg-orange-500">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4  hover:bg-orange-500">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4  hover:bg-orange-500">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4  hover:bg-orange-500">Cart</li>
          {/* <div className="px-4"> */}
          <button onClick={() => setLoginButton(!loginButton)} className="px-4">
            {loginButton ? "Login" : "Logout"}
          </button>
          {/* </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
