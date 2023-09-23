import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Newplaylistbtn: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <CreateNewplaylistBtn onClick={onClick}>{label}</CreateNewplaylistBtn>;
};

const CreateNewplaylistBtn = styled.button`
  background-color: #1d1d1d;
  color: #fff;
  padding: 0.7rem 3rem;
  margin: 10px;
  border: none;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    background-color: #383838;
  }
`;

export default Newplaylistbtn;
