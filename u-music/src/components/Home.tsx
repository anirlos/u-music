import React from 'react';
import ReplaySlider from '../components/ReplaySlider';
import SelectionSlide from '../components/SelectionSlider';
import styled from 'styled-components';

const Home = () => {
	return (
		<>
			<SlideContainer>
				<ReplaySlider />
				<SelectionSlide />
			</SlideContainer>
		</>
	);
};
const SlideContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1440px) {
		width: 75vw; /* 원하는 값을 적용하세요 */
	}
	@media screen and (max-width: 1024px) {
		width: 65vw; /* 원하는 값을 적용하세요 */
	}
	@media screen and (max-width: 768px) {
		width: 50vw; /* 원하는 값을 적용하세요 */
	}
`;

export default Home;
