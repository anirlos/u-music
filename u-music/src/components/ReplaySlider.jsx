import React, { useRef, useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'; // react-icons에서 화살표 아이콘 import
import { RiMore2Line } from 'react-icons/ri';
function ReplaySlider() {
	const [hover, setHover] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const replayList = [
		{
			id: 1,
			title: '진심이었던 사람만 바보가 돼',
			artist: '권진아',
			thumbnail: 'play01.jpg',
		},
		{
			id: 2,
			title: '와르르♥',
			artist: '콜드',
			thumbnail: 'play01.jpg',
		},
		{
			id: 3,
			title: '운이 좋았지',
			artist: '권진아',
			thumbnail: 'play01.jpg',
		},
		{
			id: 4,
			title: '사랑이 잘',
			artist: '아이유(IU) 및 Oh Hyuk',
			thumbnail: 'play01.jpg',
		},
		{
			id: 5,
			title: '예뻤어(여름날 우리 X 김민석(멜로망스))',
			artist: '김민석(멜로망스)',
			thumbnail: 'play01.jpg',
		},
		{
			id: 6,
			title: '잘 가',
			artist: '권진아',
			thumbnail: 'play01.jpg',
		},
		{
			id: 7,
			title: '이름에게',
			artist: '아이유(IU)',
			thumbnail: 'play02.jpg',
		},

		// 추가 다시 듣기 목록 데이터
	];
	// const [replayList, setReplayList] = useState([]);
	const sliderRef = useRef(null);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft -= 240;
		}
	};

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += 240;
		}
	};

	return (
		<Container>
			<Title>
				<Img>
					<img src="image/user.jpg" />
				</Img>
				<TitleBottom>
					<Name>
						<p>김아름</p>
						<h1>다시듣기</h1>
					</Name>
					<ArrowButton>
						<ScrollButton onClick={scrollLeft}>
							<TfiArrowCircleLeft color="#fff" />
						</ScrollButton>
						<ScrollButton onClick={scrollRight}>
							<TfiArrowCircleRight color="#fff" />
						</ScrollButton>
					</ArrowButton>
				</TitleBottom>
			</Title>
			{/* slide */}
			<SliderContainer ref={sliderRef}>
				{replayList.map((item) => (
					<ReplayCard key={item.id}>
						<AlbumImg
							key={item.id}
							onMouseOver={() => setHover(item.id)}
							onMouseOut={() => setHover(null)}
						>
							<img src={process.env.PUBLIC_URL + '/image/' + item.thumbnail} />
							<MoreIcon onClick={() => setModalOpen(!modalOpen)}>
								{hover === item.id && <RiMore2Line color="#fff" />}
							</MoreIcon>
							{modalOpen && <Modal setModalOpen={setModalOpen} />}
						</AlbumImg>
						<p>{item.title}</p>
						<p>{item.artist}</p>
					</ReplayCard>
				))}
			</SliderContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	max-width: 1440px;
	margin: 0 auto;
	padding: 32px 0 24px 0;
	gap: 24px;
	padding-bottom: 0;
`;
const TitleBottom = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const Img = styled.div`
	width: 56px;
	height: 56px;
	display: flex;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 24px;
	}
`;

const Name = styled.div`
	margin: 0;
	padding: 0;
	P {
		font-size: 16px;
		/* font-weight: 100; */
		margin: 0;
		padding: 0;
	}
	h1 {
		font-size: 45px;
		font-weight: 700;
		white-space: normal;
		line-height: 1.3;
		margin: 0;
	}
`;

const SliderContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow-x: hidden;
	margin: 16px 0 24px;
	gap: 24px;
`;

const ReplayCard = styled.div`
	p {
		font-size: 14px;
		color: #fff;
		margin: 0;
		&:nth-last-child(1) {
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const AlbumImg = styled.div`
	position: relative;
	width: calc((min(calc(100vw - 200px - 240px - 12px), 1440px) - 5 * 24px) / 6);

	img {
		max-width: 100%;
		height: auto;
		margin-bottom: 5px;
		border-radius: 2%;
		transition: transform 0.3s, box-shadow 0.3s;
	}

	&:hover img {
		opacity: 0.5;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	}
`;

const MoreIcon = styled.div`
	position: absolute;
	top: 10%;
	right: 5%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const ArrowButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: end;
`;

const ScrollButton = styled.button`
	background: none;
	border: none;
	opacity: 0.5;
	font-size: 24px;
	color: #333;
	&:hover {
		opacity: 1;
	}
`;

export default ReplaySlider;
