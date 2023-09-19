import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import NewPlaylistPage from "./pages/NewplaylistPage";
import "./styles/Styles.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="New-playlist" element={<NewPlaylistPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
