import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate로 수정
import "./Header.css";
import SearchBar from "./SearchBar";
import menu from "./assets/menu.svg";
import whiteLogo from "./assets/white_logo.svg";
import cast from "./assets/cast.svg";
import NavLogin from "./NavLogin";
// LoginBox 컴포넌트 import
// import LoginBox from "./LoginBox";

// const NavLogin = () => {
//   const linkToLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.preventDefault();
//     window.location.pathname = "/login";
//   };

//   return (
//     <LoginBox>
//       <button
//         onClick={linkToLogin}
//         style={{
//           // 원하는 스타일을 여기에 추가
//           padding: "10px 20px",
//           backgroundColor: "#030303",
//           color: "white",
//           borderRadius: "10px",
//           cursor: "pointer",
//         }}
//       >
//         로그인
//       </button>
//     </LoginBox>
//   );
// };

// function Header() {
//   const navigate = useNavigate(); // useNavigate 사용

//   // whiteLogo 클릭 핸들러
//   const handleWhiteLogoClick = () => {
//     // 홈 화면으로 리다이렉션
//     navigate("/");
//   };

//   return (
//     <header className="header">
//       <div className="menu">
//         <img src={menu} alt="menu" />
//         <img src={whiteLogo} alt="Music" onClick={handleWhiteLogoClick} />
//       </div>

//       <SearchBar
//         onSearch={(searchTerm) => {
//           // 이곳에서 검색어를 처리하거나 다른 작업을 수행.
//         }}
//       />
//       <div className="login-status">
//         <img src={cast} alt="cast" />
//       </div>

//       <NavLogin />
//     </header>
//   );
// }

// const NavLogin = () => {
//   const linkToLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.preventDefault();
//     window.location.pathname = "/login";
//   };

//   return (
//     <LoginBox>
//       <button
//         onClick={linkToLogin}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#030303",
//           color: "white",
//           borderRadius: "10px",
//           cursor: "pointer",
//         }}
//       >
//         로그인
//       </button>
//     </LoginBox>
//   );
// };

function Header() {
  const navigate = useNavigate();

  const handleWhiteLogoClick = () => {
    navigate("/");
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
      <NavLogin />
    </header>
  );
}
export default Header;
