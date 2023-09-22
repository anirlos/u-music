import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Library from "./pages/Library";
import FakeNav from "./components/FakeNav";
import FakeCategory from "./components/FakeCategory";
import Home from "./pages/Home";

function App() {
  return (
    <AppContainer>
      <Router>
        {/* 임시 Nav */}
        <FakeNav />

        <MainContainer>
          {/* 카테고리를 통한 페이지 이동 임시 Route 및 임시 Category */}
          <FakeCategory />

          <Routes>
            {/* 실제 아름님 Home연결 */}
            <Route path="/" element={<Home />}></Route>

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
