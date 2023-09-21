import React from 'react';

import SelectionSlider from '../components/SelectionSlider';

import ReplaySlider from '../components/ReplaySlider';

import Modal from '../components/Modal';

function Home() {
	return (
		<div>
			{/* <MusicSearch /> */}
			{/* <PlaylistSlider /> */}
			<ReplaySlider />
			<SelectionSlider />

			<Modal />
		</div>
	);
}

export default Home;
