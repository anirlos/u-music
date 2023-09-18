import React from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="Nav">
      <button className="hamburger-btn">
        <FaBars />
      </button>
    </div>
  );
};

export default Nav;
