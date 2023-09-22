import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'; //
import { RiMore2Line } from 'react-icons/ri';
import user from '../img/user.jpg';

interface Track {
	id: string;
	title: string;
	artist: string;
	image: string;
	releaseDate: string;
}

function ReplaySlider() {
	const [hover, setHover] = useState<number | null>(null);
	const [openModals, setOpenModals] = useState<boolean[]>([]);
	const [isOpen, setIsOpen] = useState<number | null>(null);
	const [chartData, setChartData] = useState<Track[]>([]);

	useEffect(() => {
		// Spotify API에서 최신 음악 차트 데이터 가져오기

		const spotifyApiUrl = 'https://api.spotify.com/v1/browse/new-releases';

		axios
			.get(spotifyApiUrl, {
				headers: {
					Authorization: `Bearer BQCwy0vApX4BI9z6vNNjpmSQ-0P5-9KcosKkUrwr2IVsgDfgZocrTgjbAQ05Hx4ketwUCSjX8EcErkQXt3h523lCLtQDxmqquDQWefRa3k5hUlkhhjB5x6sUMFcUo_yViiwCD4CxyTu8Cu9KTQ07V0upuMgM_FQJueC-s2TroaAFZYilcsnX2QZnU6uq28jrfUCbYDfAgA-UQi2nZJy6Jqut0rl20SII06rOkPSDMV28RUFvUO6W0senZ1ng4AaEVQzdRgnEm3LA_FFl`,
				},
			})
			.then((response) => {
				const tracks = response.data.albums.items.map(
					(album: any, index: number) => {
						return {
							id: album.id,
							title: album.name,
							artist: album.artists
								.map((artist: any) => artist.name)
								.join(', '),
							image: album.images[0].url,
							releaseDate: album.release_date.split('-')[0],
						};
					}
				);

				setChartData(tracks);
				setOpenModals(Array(tracks.length).fill(false));
			})
			.catch((error) => {
				console.error('Error fetching music chart data:', error);
			});
	}, []);

	const sliderRef = useRef<HTMLDivElement>(null);

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

	const openModal = (index: number) => {
		setIsOpen(index);
	};

	const closeModal = () => {
		setIsOpen(null);
	};

	const getModalPosition = (index: number) => {
		// 여기에서 모달 위치를 동적으로 계산하고 반환하세요.
		// 예를 들어, 앨범 이미지 위치를 가져와서 모달 위치를 설정할 수 있습니다.
		// 계산된 위치를 객체로 반환합니다.
		return initialModalPosition; // 예시로 초기 위치 반환
	};

	return (
		<Container>
			<Title>
				<Img>
					<img src={user} />
				</Img>
				<TitleBottom>
					<Name>
						<p>김아름</p>
						<h1>다시듣기</h1>
					</Name>
				</TitleBottom>
			</Title>
			<ArrowButton>
				<ScrollButton onClick={scrollLeft}>
					<TfiArrowCircleLeft color="#fff" />
				</ScrollButton>
				<ScrollButton onClick={scrollRight}>
					<TfiArrowCircleRight color="#fff" />
				</ScrollButton>
			</ArrowButton>
			{/* slide */}
			<SliderContainer ref={sliderRef}>
				{chartData.map((track, index) => (
					<ReplayCard key={track.id}>
						<AlbumImg
							key={track.id}
							onMouseOver={() => setHover(index)}
							onMouseOut={() => setHover(null)}
						>
							<img src={track.image} alt={`${track.title} 앨범 이미지`} />

							<MoreIcon onClick={() => openModal(index)}>
								{hover === index && <RiMore2Line color="#fff" />}
							</MoreIcon>

							{/* isOpen이 현재 인덱스와 일치하면 모달을 렌더링합니다. */}
							{isOpen === index && (
								<ModalBox style={getModalPosition(index)}>
									<ModalWrap>
										<Modal open={true} onClose={closeModal} />
									</ModalWrap>
								</ModalBox>
							)}
						</AlbumImg>
						<p>{track.title}</p>
						<p>{track.artist}</p>
						<span>{track.releaseDate}</span>
					</ReplayCard>
				))}
			</SliderContainer>
		</Container>
	);
}

const initialModalPosition = {
	top: '0%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

const Container = styled.div`
	position: relative;
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
	overflow-x: auto;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	/* @media (max-width: 1440px) {
		&::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}
	} */
`;

const ReplayCard = styled.div`
	position: relative;
	p {
		font-size: 14px;
		color: #fff;
		margin: 0;
		&:nth-last-of-type(1) {
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
	@media (max-width: 1440px) {
		width: 180px;
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
	}
	@media (max-width: 1024px) {
		width: 200px;
	}
	@media (max-width: 768px) {
		width: 240px;
	}
`;

const ModalBox = styled.div`
	position: absolute;
	top: 0;
	left: 10%;
	z-index: 9999;
`;

const ModalWrap = styled.div`
	position: fixed;
	z-index: 103;
`;

const MoreIcon = styled.div`
	position: absolute;
	top: 10%;
	right: 10%;
	z-index: 100;
	&:hover {
	}
`;

const ArrowButton = styled.div`
	position: absolute;
	z-index: 1;
	top: 20%;
	right: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: right 0.3s;
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
