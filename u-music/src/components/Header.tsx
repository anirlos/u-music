import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar";
import menu from "./assets/menu.svg";
import whiteLogo from "./assets/white_logo.svg";
import cast from "./assets/cast.svg";
import LoginBox from "./LoginBox";
import NavLogin from "./NavLogin";
import Login from "../pages/Login";

function HeaderComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginBoxOpen, setLoginBoxOpen] = useState(false);
  const [isTextVisible, setTextVisible] = useState(true);

  const handleWhiteLogoClick = () => {
    navigate("/");
  };

  const handleLoginButtonClick = () => {
    if (location.pathname !== "/login") {
      // 현재 페이지가 "/login"이 아닌 경우에만 이동
      navigate("/login");
    }
    setLoginBoxOpen(true);
  };

  const handleMenuButtonClick = () => {
    setTextVisible(!isTextVisible);
  };

  return (
    <header className="header">
      <div className="menu">
        <img src={menu} alt="menu" />
      </div>
      <img
        src={whiteLogo}
        alt="Music"
        onClick={handleWhiteLogoClick}
        className="logo white-logo"
      />
      <div className="centered-search-bar">
        <SearchBar
          onSearch={(searchTerm) => {
            // 이곳에서 검색어를 처리하거나 다른 작업을 수행.
          }}
        />
      </div>
      <div className="login">
        <img src={cast} alt="cast" />
        {location.pathname === "/login" ? <Login /> : null}
        <button className="login-button" onClick={handleLoginButtonClick}>
          로그인
        </button>
        {isLoginBoxOpen && <LoginBox />}
      </div>
    </header>
  );
}

export default HeaderComponent;
