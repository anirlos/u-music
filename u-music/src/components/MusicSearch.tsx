import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Track {
	id: string;
	name: string;
	artists: { name: string }[];
	external_urls: { spotify: string };
}

const MusicSearch: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Track[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Spotify API 호출
		const response = await axios.get(
			`https://api.spotify.com/v1/search?q=${query}&type=track`,
			{
				headers: {
					Authorization: `Bearer 
					BQCBDG-uhbwxHt-uEkyiePq4sjaSyZoD7mnVnRDSEdgJb_DZW3DLcLwGzG5WH33wTB4Y5iWpAK8tHdGwHR1ESrB-Msn5zSmrJfuEormEnz-ireknKnmTuIyKI9q9fpmtXszXUEK4AnHQlIEpVECotnKT5Js3bEf0ei4R1sRbv0YTymoub_KRutrGE6cp1wx7a2iIsive5B-7xnAc7jem1Dw5QfPUKk_f_DWoYFsRAfU1_7PaM-11LV_78xfSqkL5FFUv4bcm2lter1ju`, // 여기에 Spotify API 토큰을 넣어주세요.
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
