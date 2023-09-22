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
					Authorization: `Bearer BQC0j_7QKJ40hsZppLmaJ9AtfT9GGw3o_VAxuavnpNHtUNs_ZMcNA52yGv1GEWUvCeqjPiu3Imgq3MphSp98RHjFaH-CuAJGbmpY8t-R_zQXf0ayW6nP0Qw346At0ETzI2CsaBz1-U-f9lvcCbdmB9Pacwf3QSDrT5ZCvn60rBmHunlTbIMVcFZB73CjkDeF5PL13x1GrFDKG3f5mciDJgl9rRQMhMon-Emj6JUR1OSnOH7rkmkOL-IpHdaEHvJTS2gQjrEtlOrN5FMS`, // 여기에 Spotify API 토큰을 넣어주세요.
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
