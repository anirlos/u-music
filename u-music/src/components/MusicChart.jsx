import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SpotifyMusicChart() {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		// Spotify API에서 최신 음악 차트 데이터 가져오기
		const spotifyClientId = '78cf2caf0c014010ba9267597eaac6a3'; // Spotify 클라이언트 ID
		const spotifyApiUrl = 'https://api.spotify.com/v1/browse/new-releases';

		axios
			.get(spotifyApiUrl, {
				headers: {
					Authorization: `Bearer BQAWKlAJ8Sc7co6GkipMs27gDgVtN5HbijQVMFxbPGOShhALZyu_e-xGgXlZ_hv5aOAk7TN7dytiO--e9efsCsXj6f2qHj_Ps_BPoVzTklISyf7vBn5QhKgMn_DWJU7jyqg1djZKnS1iTZi2XMxZKcj62q0ktzQH0_F62nhIpbu81zJyS7NBKkk8bmHVhONt7Rds6ZE6MkXFn-9SvXTwxFwM3pCbIJV3HhoEzKkrJvyp0NJYhmK9YSCK3ZCuce_qkV62PE64zWAkqvLl`, // Spotify 액세스 토큰
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
		<div className="music-chart">
			<h1>Spotify 최신 음악 차트</h1>
			<ul>
				{chartData.map((track, index) => (
					<li key={index}>
						<img src={track.image} alt={`${track.title} 앨범 이미지`} />
						<h3>{track.title}</h3>
						<p>{track.artist}</p>
						<p>발매일: {track.releaseDate}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SpotifyMusicChart;
