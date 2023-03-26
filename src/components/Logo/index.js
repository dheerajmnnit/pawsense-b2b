import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img
        className="logo"
        src={logo}
        alt="ps-b2b-fe - Get CA advice on call"
      />
    </Link>
  );
};

export default Logo;
