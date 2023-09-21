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

function ReplaySliderTest() {
	const [hover, setHover] = useState<number | null>(null);
	const [modalOpen, setModalOpen] = useState<number | null>(null);
	const modalBackground = useRef<HTMLDivElement>(null);

	const [chartData, setChartData] = useState<Track[]>([]);

	const openModal = (index: number) => {
		// 모달 열 때 body의 스크롤 비활성화
		document.body.style.overflow = 'hidden';
		setModalOpen(index);
	};

	const closeModal = () => {
		// 모달 닫을 때 body의 스크롤 다시 활성화
		document.body.style.overflow = 'auto';
		setModalOpen(null);
	};

	useEffect(() => {
		// Spotify API에서 최신 음악 차트 데이터 가져오기

		const spotifyApiUrl = 'https://api.spotify.com/v1/browse/new-releases';

		axios
			.get(spotifyApiUrl, {
				headers: {
					Authorization: `Bearer BQBgCkTKLzAN_uhaSZ3oIfLIwbQKFi023VK8GbuKz17MhRwEPhvaVkoGkxuxLuFZ1YH8XunIXqTZL_9AZped833bOvSNWA5JdnJ4zvpx-yHkUN8haUxI6YyIviT1sNKRLKfizKSm3j0Ij06hBe0_X7sIRVo2mePOEHGfGNie_UjjuokN2GorHiXLmWeJLzzYntu1N48f9KJKSXy-rPQ-0optYAkRL0CAO33wdHSN4dY97oOep8iTWttVkCDH3--WloSY1xCLXhTMz1Xw`, // Spotify 액세스 토큰
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
						</AlbumImg>
						<p>{track.title}</p>
						<p>{track.artist}</p>
						<span>{track.releaseDate}</span>
						{modalOpen === index && (
							<ModalContainer
								ref={modalBackground}
								onClick={(e) => {
									if (e.target === modalBackground.current) {
										closeModal();
									}
								}}
							>
								<ModalWrap>
									<Modal isOpen={modalOpen === index} onClose={closeModal} />
								</ModalWrap>
							</ModalContainer>
						)}
					</ReplayCard>
				))}
			</SliderContainer>
		</Container>
	);
}

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

const MoreIcon = styled.div`
	position: absolute;
	top: 10%;
	right: 0%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const ModalContainer = styled.div`
	position: absolute;

	top: 10%;
	left: 20%;
	z-index: 100;
`;

const ModalWrap = styled.div`
	position: fixed;
	overflow: auto;
	z-index: 103;
`;

const ArrowButton = styled.div`
	position: absolute;
	z-index: 1;
	top: 20%;
	right: 10%;
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

export default ReplaySliderTest;