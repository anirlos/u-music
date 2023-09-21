import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class SpotifyTracks extends Component {
	state = {
		tracks: [],
	};

	componentDidMount() {
		// Spotify API 엔드포인트 URL
		const url = 'https://api.spotify.com/v1/browse/new-releases';

		// Spotify API에 요청을 보내기 위한 헤더 설정 (본인의 액세스 토큰 사용)
		const headers = {
			Authorization:
				'Bearer BQCB8xp0RkkKWT0eD21Df3rTqiISlpjiO3wxo38dLuWtfdacLjHLQR5z4BiJAoUAQoGTOblqVhsCS2NyOe1r1pDHn6rpg3KKLbx2ZEFAcilYYZ6iXCgSPnUvIiRSWYhRqgapdvb8LjabVU9EnT-M-T63NBocF8dWVV7Uev9ZN5kwzLZ2kpRQi91jPyhYTurRRu7wwIrDmL__3ICtyZB6d2bX6wrzccEbHrXZWCtR7auwYTW3RlFdj7uQeSC2Lb2j3C4uLvZ2yi_mLJpU',
		};

		// Axios를 사용하여 Spotify API에 GET 요청 보내기
		axios
			.get(url, { headers })
			.then((response) => {
				if (response.status === 200) {
					const data = response.data;

					// 최신 음악 릴리스에서 트랙의 노래 길이(ms)를 가져오는 예제
					const tracks = data.albums.items.reduce((allTracks, album) => {
						allTracks.push(
							...album.tracks.items.map((track) => ({
								name: track.name,
								duration_ms: track.duration_ms,
							}))
						);
						return allTracks;
					}, []);

					this.setState({ tracks });
				} else {
					console.error(
						`Error ${response.status}: Unable to fetch data from the Spotify API.`
					);
				}
			})
			.catch((error) => {
				console.error('Error fetching data from the Spotify API:', error);
			});
	}

	render() {
		return (
			<Container>
				<Title>Spotify Tracks</Title>
				<TrackList>
					{this.state.tracks.map((track, index) => (
						<TrackItem key={index}>
							Track: {track.name}, Duration (ms): {track.duration_ms}
						</TrackItem>
					))}
				</TrackList>
			</Container>
		);
	}
}

const Container = styled.div`
	font-family: Arial, sans-serif;
	max-width: 600px;
	margin: 0 auto;
`;

const Title = styled.h1`
	color: #1db954;
`;

const TrackList = styled.ul`
	list-style: none;
	padding: 0;
`;

const TrackItem = styled.li`
	margin-bottom: 10px;
`;

export default SpotifyTracks;
