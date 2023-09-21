import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Redux 스토어 파일의 경로를 정확하게 지정

import App from './App';
import NewPlaylistPage from './pages/NewplaylistPage';
import './styles/Styles.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="New-playlist" element={<NewPlaylistPage />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
