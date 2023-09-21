import React from 'react';

import SelectionSlider from '../components/SelectionSlider';
// import Modal from '../components/Modal';
import ReplaySlider from '../components/ReplaySlider';
import MusicSearch from '../components/MusicSearch';

import Modal from '../components/Modal';

function Home() {
	return (
		<div>
			<MusicSearch />
			<ReplaySlider />
			<SelectionSlider />
			<Modal />
		</div>
	);
}

export default Home;
