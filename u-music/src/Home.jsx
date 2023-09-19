import React from 'react';
import styled from 'styled-components';
import ReplaySlider from './components/ReplaySlider';
import SelectionSlider from './components/SelectionSlider';
import Modal from './components/Modal';
import MusicChart from './components/MusicChart';
import ReplaySliderTest from './components/ReplaySliderTest';

function Home() {
	return (
		<div>
			{/* <MusicChart /> */}
			<ReplaySliderTest />
			<ReplaySlider />
			<SelectionSlider />
			<ModalContainer>
				<Modal />
			</ModalContainer>
		</div>
	);
}

const ModalContainer = styled.div`
	outline: none;
	position: fixed;
	left: 524.656px;
	top: 349.5px;
	z-index: 105;
`;

export default Home;
