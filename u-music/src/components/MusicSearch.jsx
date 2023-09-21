import React, { useState } from 'react';
import axios from 'axios';

const MusicSearch = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Spotify API 호출
		const response = await axios.get(
			`https://api.spotify.com/v1/search?q=${query}&type=track`,
			{
				headers: {
					Authorization: `Bearer BQCB8xp0RkkKWT0eD21Df3rTqiISlpjiO3wxo38dLuWtfdacLjHLQR5z4BiJAoUAQoGTOblqVhsCS2NyOe1r1pDHn6rpg3KKLbx2ZEFAcilYYZ6iXCgSPnUvIiRSWYhRqgapdvb8LjabVU9EnT-M-T63NBocF8dWVV7Uev9ZN5kwzLZ2kpRQi91jPyhYTurRRu7wwIrDmL__3ICtyZB6d2bX6wrzccEbHrXZWCtR7auwYTW3RlFdj7uQeSC2Lb2j3C4uLvZ2yi_mLJpU`, // 여기에 Spotify API 토큰을 넣어주세요.
				},
			}
		);

		setResults(response.data.tracks.items);
	};

	return (
		<div>
			<h1>Spotify 음원 검색</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="음원 검색"
					value={query}
					onChange={handleChange}
				/>
				<button type="submit">검색</button>
			</form>
			<ul>
				{results.map((track) => (
					<li key={track.id}>
						<a
							href={track.external_urls.spotify}
							target="_blank"
							rel="noopener noreferrer"
						>
							{track.name} - {track.artists[0].name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MusicSearch;
