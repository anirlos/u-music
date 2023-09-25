import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.css";
import home from "./assets/home.svg";
import inbox from "./assets/inbox.svg";
import Newplaylistbtn from "./Newplaylistbtn";
import compass from "./assets/compass.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

// function Navigation() {
//   const location = useLocation();
//   const [selectedItem, setSelectedItem] = useState("home");

//   const handleItemClick = (itemName: string) => {
//     setSelectedItem(itemName);
//   };

//   React.useEffect(() => {
//     if (location.pathname === "/") {
//       setSelectedItem("home");
//     } else if (location.pathname === "/explore") {
//       setSelectedItem("explore");
//     } else if (location.pathname === "/Library") {
//       setSelectedItem("dashboard");
//     }
//   }, [location.pathname]);

//   const getMenuItemStyle = (menuItem: string) => {
//     return {
//       color: selectedItem === menuItem ? "#fff" : "#000",
//       backgroundColor: selectedItem === menuItem ? "#302e2e" : "transparent",
//       padding: selectedItem === menuItem ? "10px 20px" : "10px 10px",
//       borderRadius: "10px",
//     };
//   };

//   const handleNewPlaylistClick = () => {
//     // 새 재생목록을 생성하는 동작을 구현합니다.
//     // 예: 모달 표시 또는 새 재생목록 생성 페이지로 이동
//   };
//   return (
//     <nav className="navigation">
//       <ul>
//         <li
//           style={getMenuItemStyle("home")}
//           onClick={() => handleItemClick("home")}
//         >
//           <img src={home} alt="홈" />
//           <a href="/">홈</a>
//         </li>
//         {/* <li
//           style={getMenuItemStyle("explore")}
//           onClick={() => handleItemClick("explore")}
//         >
//           <img src={compass} alt="둘러보기" />
//           <a href="/explore">둘러보기</a>
//         </li> */}
//         <li
//           style={getMenuItemStyle("Library")}
//           onClick={() => handleItemClick("Library")}
//         >
//           <img src={inbox} alt="보관함" />
//           <a href="/Library">보관함</a>
//         </li>
//       </ul>
//       <button>
//         <Newplaylistbtn
//           label="+ 새 재생목록"
//           onClick={() => handleNewPlaylistClick()}
//         />
//       </button>
//       {/* <button> + 새 재생목록</button> */}
//     </nav>
//   );
// }
function Navigation() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  const handleNewPlaylistClick = () => {
    // 모달을 열거나 새 재생목록 생성 등의 동작을 수행하는 코드를 추가
  };
  React.useEffect(() => {
    if (location.pathname === "/") {
      setSelectedItem("home");
    } else if (location.pathname === "/explore") {
      setSelectedItem("explore");
    } else if (location.pathname === "/Library") {
      setSelectedItem("dashboard");
    }
  }, [location.pathname]);

  return (
    <nav className="navigation">
      <ul>
        <li
          className={selectedItem === "home" ? "active" : ""}
          onClick={() => handleItemClick("home")}
        >
          <img src={home} alt="홈" />
          {/* <a href="/">홈</a> */}
          <Link to="/">홈</Link>
        </li>
        {/* <li
          className={selectedItem === "explore" ? "active" : ""}
          onClick={() => handleItemClick("explore")}
        >
          <img src={compass} alt="둘러보기" />
          <a href="/explore">둘러보기</a>
        </li> */}
        <li
          className={selectedItem === "dashboard" ? "active" : ""}
          onClick={() => handleItemClick("dashboard")}
        >
          <img src={inbox} alt="보관함" />
          {/* <a href="/Library">보관함</a> */}
          <Link to="/Library">보관함</Link>
        </li>
      </ul>

      <Newplaylistbtn
        label="+ 새 재생목록"
        onClick={() => handleNewPlaylistClick()}
      />
    </nav>
  );
}
export default Navigation;
