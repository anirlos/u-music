import React from "react";
import NavLogin from "../components/NavLogin";
import { styled } from "styled-components";

const Main = () => {
  return (
    <StMain>
      <header>
        <NavLogin />
      </header>
    </StMain>
  );
};

export default Main;

const StMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #090202;
`;
