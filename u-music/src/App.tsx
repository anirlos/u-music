import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Library from "./pages/Library";

function App() {
  return (
    <AppContainer>
      <Router>
        <MainContainer>
          <Routes>
            {/* 담당 부분 보관함인 Library */}
            <Route path="/library" element={<Library />}></Route>
          </Routes>
        </MainContainer>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - (100vw - 100%));
  /* width: calc(100vw - (100vw - 100%)); */
`;

const MainContainer = styled.div`
  display: flex;
  background: #000;
`;

export default App;
