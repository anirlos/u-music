import React from 'react';

import styled from 'styled-components';

import Home from './pages/Home';

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
				<Home />
			</MainContainer>
		</AppContainer>
	);
};

export default App;
