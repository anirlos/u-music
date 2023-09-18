import React from 'react';
import ReplaySlider from './components/ReplaySlider';
import SelectionSlider from './components/SelectionSlider';
import Modal from './components/Modal';

function Home() {
	return (
		<div>
			<ReplaySlider />
			<SelectionSlider />
			<Modal />
		</div>
	);
}

export default Home;
