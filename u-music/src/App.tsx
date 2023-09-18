import React, { useState } from "react";
import "./App.css";
import NewplaylistModal from "./components/NewplaylistModal"; // 대소문자 일치
import Newplaylistbtn from "./components/Newplaylistbtn";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Newplaylistbtn label="+ 새 재생목록" onClick={handleOpenModal} />
      <NewplaylistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
