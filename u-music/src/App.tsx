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
import Dashboard from './components/Dashboard';
import SearchScreen from './components/SearchScreen';

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
						<Route path="/explore" element={<Explore />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/search" element={<SearchScreen />} />
						{/* 홈 페이지 */}
					</Routes>
				</div>
				<div className="home">
					<Home />
				</div>
			</div>
		</Router>
	);
}

export default App;
