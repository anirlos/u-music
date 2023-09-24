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
	position: absolute;
	right: 2%;
	@media screen and (max-width: 1440px) {
		left: 20%;
		width: 70vw; /* 원하는 값을 적용하세요 */
		margin: 0 auto;
	}
	@media screen and (max-width: 1024px) {
		left: 30%;
		width: 65vw; /* 원하는 값을 적용하세요 */
	}
	@media screen and (max-width: 768px) {
		left: 35%;
		width: 50vw; /* 원하는 값을 적용하세요 */
	}
`;

export default Home;
