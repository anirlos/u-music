import React from 'react';
import styled from 'styled-components';
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
			<ModalBox>
				<Modal />
			</ModalBox>
		</div>
	);
}

const ModalBox = styled.div`
	position: fixed;
	top: 0;
	left: 10%;
	z-index: 9999;
`;

export default Home;
