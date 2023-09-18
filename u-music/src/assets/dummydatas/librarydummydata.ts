import { Playlist, Album, LibraryData } from "src/types";
import album1Img from "assets/img/bowwow.png";
import album2Img from "assets/img/cheez.png";

// 저장한 재생목록들
const dummyMyPlaylists: Playlist[] = [
  {
    id: "playlist1",
    title: "My Favorites 1",
    creator: "yerin",
    songCount: 0,
    images: [],
    type: "playlist",
    timestamp: Date.now(),
    songs: [],
  },
];

// 저장한 앨범들
const dummyMyAlbums: Album[] = [
  {
    id: "album1",
    albumTitle: "Album 1",
    albumType: "정규",
    artist: "Artist 1",
    releaseYear: 2022,
    image: album1Img,
    type: "album",
    timestamp: Date.now(),
    songs: [
      {
        title: "Album1-1",
        duration: "2:49",
      },
      {
        title: "Album1-2",
        duration: "3:33",
      },
      {
        title: "Album1-3",
        duration: "5:01",
      },
    ],
  },
  {
    id: "album2",
    albumTitle: "Album 2",
    albumType: "싱글",
    artist: "Artist 2",
    releaseYear: 2011,
    image: album2Img,
    type: "album",
    timestamp: Date.now(),
    songs: [
      {
        title: "Album1-2",
        duration: "3:09",
      },
      {
        title: "Album2-2",
        duration: "4:15",
      },
    ],
  },
];

export const libraryDummyData = {
  mySongs: dummyMyAlbums,
  myPlaylists: dummyMyPlaylists,
  myAlbums: dummyMyAlbums,
};

export const initialLibraryData: LibraryData = {
  songs: [],
  playlists: [],
  albums: [],
};
