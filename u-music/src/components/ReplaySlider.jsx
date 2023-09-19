import React, { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'; //
import { RiMore2Line } from 'react-icons/ri';

import axios from 'axios';

function ReplaySlider() {
	const [hover, setHover] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const modalBackground = useRef();

	// 나머지 코드는 이전과 동일

	const [artistInfo, setArtistInfo] = useState({});
	const [artistAlbums, setArtistAlbums] = useState([]);
	const artistName = 'BTS'; // 원하는 가수 이름으로 변경하세요

	useEffect(() => {
		// 가수 정보 가져오기
		axios
			.get(
				`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=c240344b78f86d48dbb7a77a1f52511e&format=json`
			)
			.then((response) => {
				setArtistInfo(response.data.artist);
			})
			.catch((error) => {
				console.error('Error fetching artist info:', error);
			});

		// 가수 앨범 가져오기
		axios
			.get(
				`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=c240344b78f86d48dbb7a77a1f52511e&format=json`
			)
			.then((response) => {
				setArtistAlbums(response.data.topalbums.album);
			})
			.catch((error) => {
				console.error('Error fetching artist albums:', error);
			});
	}, []);

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
	const closeModal = () => {
		setModalOpen(false);
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
				{artistAlbums.map((album, index) => (
					<ReplayCard key={index.id}>
						<AlbumImg
							key={index.id}
							onMouseOver={() => setHover(index.id)}
							onMouseOut={() => setHover(null)}
						>
							<img
								src={album.image[2]['#text']}
								alt={`${album.name} 앨범 이미지`}
							/>
							<MoreIcon onClick={() => setModalOpen(index.id)}>
								{hover === index.id && <RiMore2Line color="#fff" />}
							</MoreIcon>
						</AlbumImg>
						<p>{album.name}</p>
						<p>{artistName}</p>
						{modalOpen === index.id && (
							<ModalContainer
								ref={modalBackground}
								onClick={(e) => {
									if (e.target === modalBackground.current) {
										closeModal();
									}
								}}
							>
								<ModalWrap>
									<Modal
										key={index.id}
										isOpen={modalOpen}
										onClose={closeModal}
									/>
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
	right: 10%;
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
	z-index: 103;
`;

const ArrowButton = styled.div`
	position: absolute;
	z-index: 1;
	top: 20%;
	right: ${({ mediaQuery }) =>
		mediaQuery ? '10%' : '0'}; /* 화면 크기에 따라 right 속성 조정 */
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: right 0.3s; /* 이동 효과를 부드럽게 하기 위한 트랜지션 설정 */
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
