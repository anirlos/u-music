import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from "./components/Header";
// import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Explore from "./components/Explore";

import SearchScreen from "./components/SearchScreen";
import Library from "./pages/Library";
import Login from "./pages/Login";
import NewPlaylistPage from "./pages/NewplaylistPage";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <div className="content">
          {/* <Navigation /> */}
          <Routes>
            {/* / 경로에 Home 컴포넌트 연결 */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<SearchScreen />} />
            {/* "New-playlist" 경로 추가 */}
            <Route path="/New-playlist" element={<NewPlaylistPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
