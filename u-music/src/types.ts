// export interface SongData {
//   id: number;
//   title: string;
//   thumbnail: string;
//   music: string;
//   artist: string;
//   albumTitle: string;
//   releaseYear: number;
//   duration_ms: number;
// }

// export interface TimeMs {
//   msToTime: (duration: number) => string;
// }

export interface SongData {
  id: string;
  title: string;
  artist: string;
  image: string;
  releaseDate: string | number;
}

export interface TimeMs {
  msToTime: (duration: number) => string;
}
