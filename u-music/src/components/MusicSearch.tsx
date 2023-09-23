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
					Authorization: `Bearer BQDv5Wp4MxNs9K7EtjG9AMTpG3e1fhfX-BQ1or8IxfG8ZfRo2NhJ7EHQOGv02y7bZ4Fqw7HFN6eVwJqIn4prgoB_9jTVyvCdJOZxebC1bUrvd9EY-uBTRSDHQJZ_05mPESn8Dsl2jvugW6jYUko3gUeJMDEPamUQo2IzxHPzX-Ro-mLN7cDSPz3eTdbwGH7-rIK9zblkZpIx-2quAn-j-81d-PQmHzq_Q9GkMONHi3NBaxrmorApqiDxtCqgbguHoa-3O53ILbMiNwSd`, // 여기에 Spotify API 토큰을 넣어주세요.
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
