import React from 'react';

import styled from 'styled-components';

import ReplaySlider from './components/ReplaySlider';
import SelectionSlider from './components/SelectionSlider';

const AppContainer = styled.div`
	display: flex;
`;

const MainContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	background: #000;
`;

const App = () => {
	return (
		<AppContainer>
			<MainContainer>
				<ReplaySlider />
				<SelectionSlider />
			</MainContainer>
		</AppContainer>
	);
};

export default App;
