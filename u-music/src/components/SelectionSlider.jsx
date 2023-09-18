import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';
import { HiPlay } from 'react-icons/hi2';
import { BiLike, BiDislike } from 'react-icons/bi';
import { CgMoreVerticalAlt } from 'react-icons/cg';

function SelectionSlider() {
	const [hover, setHover] = useState(false);
	const playList = [
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
			thumbnail: 'play02.jpg',
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
			title: '예뻤어(여름날 우리)',
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
			thumbnail: 'play01.jpg',
		},
		{
			id: 8,
			title: '진심이었던 사람만 바보가 돼',
			artist: '권진아',
			thumbnail: 'play01.jpg',
		},
		{
			id: 9,
			title: '와르르♥',
			artist: '콜드',
			thumbnail: 'play01.jpg',
		},
		{
			id: 10,
			title: '운이 좋았지',
			artist: '권진아',
			thumbnail: 'play01.jpg',
		},
		{
			id: 11,
			title: '사랑이 잘',
			artist: '아이유(IU) 및 Oh Hyuk',
			thumbnail: 'play01.jpg',
		},
		{
			id: 12,
			title: '예뻤어(여름날 우리)',
			artist: '김민석(멜로망스)',
			thumbnail: 'play01.jpg',
		},
	];
	const sliderRef = useRef(null);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft -= 250;
		}
	};

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += 250;
		}
	};
	return (
		<Container>
			<Title>
				<TitleBottom>
					<Name>
						<p>이 노래로 뮤직 스테이션 시작하기</p>
						<h1>빠른 선곡</h1>
					</Name>
					<Button>
						<PlayButton>
							<span>모두재생</span>
						</PlayButton>
						<ArrowButton>
							<ScrollButton onClick={scrollLeft}>
								<TfiArrowCircleLeft color="#fff" />
							</ScrollButton>
							<ScrollButton onClick={scrollRight}>
								<TfiArrowCircleRight color="#fff" />
							</ScrollButton>
						</ArrowButton>
					</Button>
				</TitleBottom>
			</Title>
			<SliderContainer ref={sliderRef}>
				{playList.map((item) => (
					<SongList>
						<ListContents
							key={item.id}
							onMouseOver={() => setHover(item.id)}
							onMouseOut={() => setHover(null)}
						>
							{hover === item.id && (
								<ContentsHover>
									<HiPlay />
								</ContentsHover>
							)}
							{hover === item.id && (
								<LikeHover>
									<BiLike />
									<BiDislike />
									<CgMoreVerticalAlt />
								</LikeHover>
							)}
							<ArtWork>
								<img
									src={process.env.PUBLIC_URL + '/image/' + item.thumbnail}
								/>
							</ArtWork>
							<SongTitle>
								<p>{item.title}</p>
								<p>{item.artist}</p>
							</SongTitle>
						</ListContents>
					</SongList>
				))}
			</SliderContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;

	/* background-color: gray; */
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

const Name = styled.div`
	padding: 0;
	P {
		font-size: 16px;
		padding: 0;
		margin: 0;
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
	flex-wrap: wrap;
	justify-content: space-between;
	overflow-x: hidden;

	margin: 16px 0 24px;
	gap: 24px;
`;

const Button = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: end;
`;

const PlayButton = styled.button`
	height: 36px;
	font-size: 14px;
	line-height: 36px;
	border-radius: 18px;
	background-color: transparent;
	border: 1px solid #fff;
	opacity: 0.5;
	&:hover {
		opacity: 1;
	}
	span {
		font-size: 14px;
		line-height: 36px;
		color: #fff;
	}
`;

const ArrowButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: end;
	margin-left: 10px;
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
const SongList = styled.ul`
	width: 32%; // 3열로 나누기, 8px은 간격 고려
	padding: 0;
	margin: 0;
`;

const ListContents = styled.li`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	font-size: 16px;
`;

const ArtWork = styled.div`
	width: 10%;
	margin-right: 10px;

	img {
		max-width: 100%;
		height: auto;
		border-radius: 5%;
	}
`;

const SongTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
	font-size: 15px;
	line-height: 1.3;
	font-weight: 500;
	color: #fff;
	p {
		padding: 0;
		margin: 0;
	}
`;

const ContentsHover = styled.div`
	position: absolute;

	top: 50%;
	right: 91%;
	transform: translate(-50%, -50%);
	text-align: center;

	&:hover {
		opacity: 1;
	}
`;
const LikeHover = styled.div`
	width: 20%;

	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 50%;
	right: 0%;
	transform: translate(-50%, -50%);
	text-align: center;

	&:hover {
		opacity: 1;
	}
`;

export default SelectionSlider;
