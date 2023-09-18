import React from "react";
import "./App.css";
import Newplaylistbtn from "./components/Newplaylistbtn";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Newplaylistbtn label="+ 새 재생목록" onClick={handleClick} />
    </div>
  );
}

export default App;
