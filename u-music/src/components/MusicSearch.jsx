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
					Authorization: `Bearer BQB0LWYdPBrygVcAzR4ccnPYsuG1fJLcBAntpc_ZIxVZWzZvviIN4I6fepAY4l8y2kPDY5Q1A9nxa1CwBdwVJPphVbkOxKX1ZwfD8HbGBId65JFnyU12sFse_TTU2uvX-NxljplZSGP3BSlLNjdtUqwc8pPFya-mr6NA-30SB9UpxkBbmMDuXbNubNIORs-SvGDJxYfGNpc-ckMzAlm7W4V1lygn3E9hB84xkO8tZRnXuDhMO_yF_6mk3CSvOj5wqfhk4HPZUJy4PUry`, // 여기에 Spotify API 토큰을 넣어주세요.
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
