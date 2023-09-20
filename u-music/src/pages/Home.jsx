import React from 'react';
import styled from 'styled-components';

import SelectionSlider from '../components/SelectionSlider';
import Modal from '../components/Modal';
import ReplaySlider from '../components/ReplaySlider';
import MusicSearch from '../components/MusicSearch';

function Home() {
	return (
		<div>
			<MusicSearch />
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
	z-index: 103;
`;

export default Home;
