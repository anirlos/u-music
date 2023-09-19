import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <button className="hamburger-btn">
        <FaBars />
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 65px;
`;

export default Nav;
