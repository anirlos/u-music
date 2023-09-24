import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate로 수정
import "./Header.css";
import SearchBar from "./SearchBar";
import menu from "./assets/menu.svg";
import whiteLogo from "./assets/white_logo.svg";
import cast from "./assets/cast.svg";

function Header() {
  const navigate = useNavigate(); // useNavigate 사용

  // whiteLogo 클릭 핸들러
  const handleWhiteLogoClick = () => {
    // 홈 화면으로 리다이렉션
    navigate("/");
  };

  return (
    <header className="header">
      <div className="menu">
        <img src={menu} alt="menu" />
        {/* </div>
      <div className="logo"> */}
        <img src={whiteLogo} alt="Music" onClick={handleWhiteLogoClick} />
      </div>

      <SearchBar />
      <div className="login-status">
        <img src={cast} alt="cast" />
      </div>
    </header>
  );
}

export default Header;
