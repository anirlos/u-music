import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Category: FC = () => {
  return (
    <Container>
      <Link to="/">
        <button className="to-home">홈</button>
      </Link>
      <Link to="/library">
        <button className="to-library">보관함</button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 240px;
  background-color: blue;
`;

export default Category;
