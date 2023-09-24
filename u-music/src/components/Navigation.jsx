import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.css";
import home from "./assets/home.svg";
import inbox from "./assets/inbox.svg";
// import compass from "./assets/compass.svg";

function Navigation() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
      setSelectedItem("home");
    } else if (location.pathname === "/explore") {
      setSelectedItem("explore");
    } else if (location.pathname === "/dashboard") {
      setSelectedItem("dashboard");
    }
  }, [location.pathname]);

  const getMenuItemStyle = (menuItem) => {
    return {
      color: selectedItem === menuItem ? "#fff" : "#000",
      backgroundColor: selectedItem === menuItem ? "#302e2e" : "transparent",
      padding: selectedItem === menuItem ? "10px 20px" : "10px 10px",
      borderRadius: "10px",
    };
  };

  return (
    <nav className="navigation">
      <ul>
        <li
          style={getMenuItemStyle("home")}
          onClick={() => handleItemClick("home")}
        >
          <img src={home} alt="홈" />
          <a href="/">홈</a>
        </li>
        {/* <li
          style={getMenuItemStyle("explore")}
          onClick={() => handleItemClick("explore")}
        >
          <img src={compass} alt="둘러보기" />
          <a href="/explore">둘러보기</a>
        </li> */}
        <li
          style={getMenuItemStyle("dashboard")}
          onClick={() => handleItemClick("dashboard")}
        >
          <img src={inbox} alt="보관함" />
          <a href="/dashboard">보관함</a>
        </li>
      </ul>
      <button> + 새 재생목록</button>
    </nav>
  );
}

export default Navigation;
