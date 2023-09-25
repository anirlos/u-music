import React from 'react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';
import { HiPlay } from 'react-icons/hi2';
import { BiLike, BiDislike } from 'react-icons/bi';
import { CgMoreVerticalAlt } from 'react-icons/cg';

interface Track {
	id: string;
	title: string;
	artist: string;
	image: string;
	releaseDate: string;
}

const ROWS = 4;
const COLUMNS = 3;
const MAX_ITEMS = 16;

function SelectionSlide() {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [hover, setHover] = useState<number | null>(null);
	const slideRef = useRef<HTMLDivElement>(null);

	const [chartData, setChartData] = useState<Track[]>([]);

	// 오른쪽으로 슬라이드 이동
	const scrollRight = () => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide === getTotalSlides() - 1) {
				return 0;
			} else {
				return prevSlide + 1;
			}
		});
	};

	// 왼쪽으로 슬라이드 이동
	const scrollLeft = () => {
		setCurrentSlide((prevSlide) => {
			if (prevSlide === 0) {
				return getTotalSlides() - 1;
			} else {
				return prevSlide - 1;
			}
		});
	};

	// 전체 슬라이드 수 계산
	const getTotalSlides = () => {
		return Math.ceil(chartData.length / (ROWS * COLUMNS));
	};

	const getVisibleItems = () => {
		const start = currentSlide * (ROWS * COLUMNS);
		const end = start + ROWS * COLUMNS;
		return chartData.slice(start, end);
	};

	useEffect(() => {
		// 슬라이드 이동 애니메이션 적용
		if (slideRef.current) {
			slideRef.current.style.transition = 'all 0.5s ease-in-out';
			slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
		}
	}, [currentSlide]);

	useEffect(() => {
		// 슬라이드 이동 애니메이션 적용
		if (slideRef.current) {
			slideRef.current.style.transition = 'all 0.5s ease-in-out';
			slideRef.current.style.transform = `translateX(-${currentSlide * 0}%)`;
		}
	}, [currentSlide]);

	useEffect(() => {
		// Spotify API에서 데이터 가져오기
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://api.spotify.com/v1/browse/new-releases',
					{
						headers: {
							Authorization: `Bearer BQCKyfMbGg_LQQnQc1IPKIb-7RpaXyttRVevpPYmFASlJwhqAX3wdw3diCFv13DPL2Zo_raM2aiKnS6CiJ1hhRHJr4OuCLu2ksEFj6FoNejFE7CHHBdaOBgZ98hrDmW63lwfL884pvR4BfylVEwRgdumuETc0SNEBBZTwOzgjuht51zI-KgJIOynQSxTMeHnWp2wIxjSky5cAVKSP68hn0VRA-dPoY_Xj3nzQ_GIW3u2jXD-Lgn-Llc9mSYnRgdrVCKzq9IX4Mu1LWQi`,
						},
					}
				);
				const tracks = response.data.albums.items.map(
					(album: any, index: any) => ({
						id: album.id,
						title: album.name,
						artist: album.artists.map((artist: any) => artist.name).join(', '),
						image: album.images[0].url,
						releaseDate: album.release_date.split('-')[0],
					})
				);
				setChartData(tracks.slice(0, MAX_ITEMS));
			} catch (error) {
				console.error('Error fetching music chart data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container>
			<Title>
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
			</Title>
			<SliderContainer ref={slideRef}>
				{getVisibleItems().map((track, index) => (
					<SongList key={track.id}>
						<ListContents
							key={track.id}
							onMouseOver={() => setHover(index)}
							onMouseOut={() => setHover(null)}
						>
							{hover === index && (
								<ContentsHover>
									<HiPlay color="#fff" />
								</ContentsHover>
							)}
							{hover === index && (
								<LikeHover>
									<BiLike color="#fff" />
									<BiDislike color="#fff" />
									<CgMoreVerticalAlt color="#fff" />
								</LikeHover>
							)}
							<ArtWork>
								<img src={track.image} alt={`${track.title} 앨범 이미지`} />
							</ArtWork>
							<SongTitle>
								<p>{track.title}</p>
								<p>{track.artist}</p>
							</SongTitle>
						</ListContents>
					</SongList>
				))}
			</SliderContainer>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	max-width: 100%;
	width: 80vw;
	margin-left: 250px;
	z-index: -1;

	/* background-color: gray; */
`;
const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	margin: 0 auto;
	padding: 32px 0 24px 0;
	/* gap: 24px; */
	padding-bottom: 0;
	flex-grow: 1;
	//
`;
// const TitleBottom = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: space-between;
// `;

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
		@media screen and (max-width: 768px) {
			font-size: 30px;
			font-weight: 700;
			white-space: normal;
			line-height: 1.3;
			margin: 0;
		}
	}
`;
const SliderContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	overflow-x: hidden;
	margin: 16px 0 24px;
	gap: 5%;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
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
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const ArrowButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: end;
	margin-left: 10px;
	flex-grow: 1;
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
const SongList = styled.div`
	width: calc(25% - 16px); /* 4열로 나누기, 16px은 간격 고려 */
	padding: 0;
	margin: 0;
	@media screen and (max-width: 1440px) {
	}
	@media screen and (max-width: 1024px) {
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const ListContents = styled.div`
	position: relative;
	width: 100%;
	display: flex;

	justify-content: flex-start;
	margin-bottom: 5%;
	font-size: 12px;
	@media screen and (max-width: 768px) {
		justify-content: space-between;
	}
	&:hover {
		opacity: 0.5;
	}
`;

const ArtWork = styled.div`
	width: 10%;
	margin-right: 10px;
	@media screen and (max-width: 768px) {
		display: none;
	}
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
	font-size: 12px;
	line-height: 1.3;
	font-weight: 500;
	color: #fff;
	@media screen and (max-width: 768px) {
		flex-direction: row;
	}
	p {
		width: 100%;
		padding: 0;
		margin: 0;
		@media screen and (max-width: 768px) {
			flex-direction: row;
			width: 215px;
			display: flex;
			justify-content: flex-start;
		}
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
	background-color: #000;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 50%;
	right: -10%;
	transform: translate(-50%, -50%);
	text-align: center;
`;
export default SelectionSlide;
