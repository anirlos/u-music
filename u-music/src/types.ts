// types.ts
export interface Song {
  title: string;
  duration: string;
}

export interface Playlist {
  id: string;
  title: string;
  creator: string;
  songCount: number;
  images: string[];
  type: "playlist";
  timestamp?: number;
  songs: Song[];
}

export interface Album {
  id?: string;
  albumTitle: string;
  albumType: "싱글" | "정규" | "EP";
  artist: string;
  releaseYear: number;
  image: string;
  type: "album";
  timestamp?: number;
  songs: Song[];
}

export interface DummyData {
  songs: Song[];
  albums: Album[];
}

export interface LibraryData {
  songs: Song[];
  playlists: Playlist[];
  albums: Album[];
}
