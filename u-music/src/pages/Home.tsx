import React from 'react';
import ReplaySlider from '../components/ReplaySlider';
import SelectionSlide from '../components/SelectionSlider';
import styled from 'styled-components';

const Home = () => {
	return (
		<div>
			<SlideContainer>
				<ReplaySlider />
				<SelectionSlide />
			</SlideContainer>
		</div>
	);
};

const SlideContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 2%;
	@media screen and (max-width: 1440px) {
		width: 60vw;
		position: relative; /* 원하는 위치로 변경하세요 */
		right: 0; /* 원하는 값을 적용하세요 */
	}
`;

export default Home;
