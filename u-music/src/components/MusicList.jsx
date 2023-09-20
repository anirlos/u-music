import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

function MusicList() {
	const [albums, setAlbums] = useState([]);
	const artistId = '3Nrfpe0tUJi4K4DXYWgMUX'; // 방탄소년단의 아티스트 ID

	useEffect(() => {
		// 스포티파이 API를 사용하여 방탄소년단의 앨범 목록 가져오기
		axios
			.get(
				`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`,
				{
					headers: {
						Authorization:
							'Bearer BQCvzzeRgPzsD5R3c3N7-b-b_S4_uFszLIF_7acGVWtF1N7ss5O8nrXmuyLLMNA4PCzi_tcKZRdk5ipPFbazZLrg_qvwrjTpbDv1z81jEwW28XQP_rC1bP8j-wqog6fTWtxayk8nSoag8cxZT9qjpuduT5JTtHC93G1B436QYXwN-WH2_9cclsyoJcLE7fOq0ZyPYagYgib8fJEihGCAxReZqm86t5m2fQcLUe9LHhNtUlUUy-uQWtHGssSu2nUJ2kLgXx5Y-1hJ1XUs', // Spotify Developer Dashboard에서 얻은 액세스 토큰으로 대체
					},
				}
			)
			.then((response) => {
				// 응답 데이터에서 앨범 목록 추출
				const albumsData = response.data.items || [];
				setAlbums(albumsData);
			})
			.catch((error) => {
				console.error('Error fetching artist albums:', error);
			});
	}, [artistId]);

	const settings = {
		infinite: true,
		slidesToShow: 3, // 보여질 슬라이드 개수
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0',
		arrows: true, // 좌우 화살표 표시
	};

	return (
		<Container>
			<h1>방탄소년단 앨범 목록</h1>
			<Slider {...settings}>
				{albums.map((album) => (
					<AlbumItem key={album.id}>
						<AlbumImage src={album.images[0].url} alt={album.name} />
						<AlbumTitle>{album.name}</AlbumTitle>
					</AlbumItem>
				))}
			</Slider>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
`;

const AlbumItem = styled.div`
	text-align: center;
`;

const AlbumImage = styled.img`
	max-width: 100%;
	height: auto;
`;

const AlbumTitle = styled.p`
	font-size: 16px;
	margin-top: 10px;
`;

export default MusicList;
