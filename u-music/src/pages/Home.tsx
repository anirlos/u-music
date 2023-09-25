import React from "react";

import SelectionSlider from "../components/SelectionSlider";

import ReplaySlider from "../components/ReplaySlider";
import Header from "./../components/Header";
import Navigation from "./../components/Navigation";

function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <ReplaySlider />
      <SelectionSlider />
    </>
  );
}

export default Home;
