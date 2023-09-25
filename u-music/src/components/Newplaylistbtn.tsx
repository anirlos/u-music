import React, { useState } from "react";
import styled from "styled-components";
import NewplaylistModal from "./NewplaylistModal";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

// const Newplaylistbtn: React.FC<ButtonProps> = ({ label, onClick }) => {
//   return <CreateNewplaylistBtn onClick={onClick}>{label}</CreateNewplaylistBtn>;
// };
// const Newplaylistbtn: React.FC<ButtonProps> = ({ label, onClick }) => {
//   // 버튼이 클릭되면 onClick 함수를 호출
//   const handleClick = () => {
//     onClick();
//   };

//   return (
//     <CreateNewplaylistBtn onClick={handleClick}>{label}</CreateNewplaylistBtn>
//   );
// };
const NewPlaylistbtn: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <button onClick={handleButtonClick}>{label}</button> */}
      <CreateNewplaylistBtn onClick={handleButtonClick}>
        {label}
      </CreateNewplaylistBtn>
      <NewplaylistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
const CreateNewplaylistBtn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.7rem 3rem 1rem 2.5rem;
  /* margin: 0rem 0.5rem 0rem 1rem; */
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #3c3c3c;
  }
`;

export default NewPlaylistbtn;
