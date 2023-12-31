import React from "react";
import ReplaySlider from "../components/ReplaySlider";
import SelectionSlide from "../components/SelectionSlider";
import styled from "styled-components";
import Header from "./../components/Header";
import Navigation from "./../components/Navigation";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <SlideContainer>
        <ReplaySlider />
        <SelectionSlide />
      </SlideContainer>
    </>
  );
};
const SlideContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1920px) {
    position: absolute;
    width: 80vw;
    z-index: -1;
  }

  @media screen and (max-width: 1440px) {
    position: absolute;
    width: 80vw;
  }
  @media screen and (max-width: 1024px) {
    width: 70vw; /* 원하는 값을 적용하세요 */
  }
  @media screen and (max-width: 768px) {
    width: 55vw; /* 원하는 값을 적용하세요 */
  }
`;

export default Home;
