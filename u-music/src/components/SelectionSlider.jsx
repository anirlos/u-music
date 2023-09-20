import React from 'react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';
import { HiPlay } from 'react-icons/hi2';
import { BiLike, BiDislike } from 'react-icons/bi';
import { CgMoreVerticalAlt } from 'react-icons/cg';

function SelectionSlide() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [hover, setHover] = useState(null);
	const slideRef = useRef(null);
	const ROWS = 4; // 변경: 행 수
	const COLUMNS = 3; // 변경: 열 수
	const [chartData, setChartData] = useState([]);

	const scrollRight = () => {
		if (currentSlide >= getTotalSlides()) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const scrollLeft = () => {
		if (currentSlide === 0) {
			setCurrentSlide(getTotalSlides());
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	const getTotalSlides = () => {
		return Math.ceil(chartData.length / (ROWS * COLUMNS)) - 1;
	};

	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${currentSlide * 32}%)`;
	}, [currentSlide]);

	useEffect(() => {
		// Spotify API에서 최신 음악 차트 데이터 가져오기
		const spotifyClientId = '78cf2caf0c014010ba9267597eaac6a3'; // Spotify 클라이언트 ID
		const spotifyApiUrl = 'https://api.spotify.com/v1/browse/new-releases';

		axios
			.get(spotifyApiUrl, {
				headers: {
					Authorization: `Bearer BQB0LWYdPBrygVcAzR4ccnPYsuG1fJLcBAntpc_ZIxVZWzZvviIN4I6fepAY4l8y2kPDY5Q1A9nxa1CwBdwVJPphVbkOxKX1ZwfD8HbGBId65JFnyU12sFse_TTU2uvX-NxljplZSGP3BSlLNjdtUqwc8pPFya-mr6NA-30SB9UpxkBbmMDuXbNubNIORs-SvGDJxYfGNpc-ckMzAlm7W4V1lygn3E9hB84xkO8tZRnXuDhMO_yF_6mk3CSvOj5wqfhk4HPZUJy4PUry`, // Spotify 액세스 토큰
				},
			})
			.then((response) => {
				const tracks = response.data.albums.items.map((album) => {
					return {
						title: album.name,
						artist: album.artists.map((artist) => artist.name).join(', '),
						image: album.images[0].url,
						releaseDate: album.release_date,
					};
				});

				setChartData(tracks);
			})
			.catch((error) => {
				console.error('Error fetching music chart data:', error);
			});
	}, []);

	return (
		<Container>
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
			<SliderContainer ref={slideRef}>
				{chartData.map((track, index) => (
					<SongList key={index.id}>
						<ListContents
							key={index.id}
							onMouseOver={() => setHover(index)}
							onMouseOut={() => setHover(null)}
						>
							{hover === index && (
								<ContentsHover>
									<HiPlay />
								</ContentsHover>
							)}
							{hover === index && (
								<LikeHover>
									<BiLike />
									<BiDislike />
									<CgMoreVerticalAlt />
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
const SongList = styled.div`
	width: 32%; // 4열로 나누기, 8px은 간격 고려
	padding: 0;
	margin: 0;
`;

const ListContents = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
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
export default SelectionSlide;
