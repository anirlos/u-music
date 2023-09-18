import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "components/Nav";
import Category from "components/Category";
import Library from "components/pages/Library";
import Home from "components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* 임시 Nav */}
        <Nav />
        {/* 카테고리를 통한 페이지 이동 임시 Route */}
        <Category />
        <Routes>
          {/* 임시 home */}
          <Route path="/" element={<Home />}></Route>

          {/* 담당 부분 보관함인 Library */}
          <Route path="/library" element={<Library />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
