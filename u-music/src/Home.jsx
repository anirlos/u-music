import React from 'react';
import styled from 'styled-components';
import ReplaySlider from './components/ReplaySlider';
import SelectionSlider from './components/SelectionSlider';
import Modal from './components/Modal';
import ReplaySliderTest from './components/ReplaySliderTest';
import MusicList from './components/MusicList';

function Home() {
	return (
		<div>
			<ReplaySliderTest />
			{/* <MusicList /> */}
			{/* <ReplaySlider /> */}
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
	z-index: 103;
`;

export default Home;
