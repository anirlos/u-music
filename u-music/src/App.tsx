import React, { useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Explore from './components/Explore';

import SearchScreen from './components/SearchScreen';
import Library from './pages/Library';
import Login from './pages/Login';
import { useNavigation } from 'react-router-dom';

function App() {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="content">
					<Navigation />
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/explore" element={<Explore />} />
						<Route path="/dashboard" element={<Library />} />
						<Route path="/search" element={<SearchScreen />} />
						<Route path="/" element={<Home />} /> {/* 홈 페이지 */}{' '}
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
