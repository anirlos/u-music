import React from "react";
import { styled } from "styled-components";

const NavLogin = () => {
  const linkToLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.pathname = "/login";
  };

  return (
    <LoginBox>
      <button onClick={linkToLogin}>로그인</button>
    </LoginBox>
  );
};

export default NavLogin;
const LoginBox = styled.div`
  background-color: #090202;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 500;
  user-select: none;
  > p {
    font-size: 1.5rem;
  }
  > button {
    width: 100px;
    height: 30px;
    border: none;
    color: white;
    background-color: #bf360c;
    cursor: pointer;
    border-radius: 20px;
  }
`;
