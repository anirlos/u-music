import { SongData } from "types";

const dummyData: SongData[] = [
  {
    id: 1,
    title: "weeknds",
    thumbnail: "bowwow.png",
    music: "weeknds-122592.mp3",
    artist: "Artist 1",
    albumTitle: "Album 1",
    releaseYear: 2020,
    duration_ms: 208000, // 재생 시간을 밀리초 단위로 설정
  },
  {
    id: 2,
    title: "password infinity",
    thumbnail: "coco.png",
    music: "password-infinity-123276.mp3",
    artist: "Artist 2",
    albumTitle: "Album 2",
    releaseYear: 2019,
    duration_ms: 145000,
  },
  {
    id: 3,
    title: "floating abstract",
    thumbnail: "minjun.png",
    music: "floating-abstract-142819.mp3",
    artist: "Artist 3",
    albumTitle: "Album 3",
    releaseYear: 2021,
    duration_ms: 97000,
  },
  {
    id: 4,
    title: "for future bass",
    thumbnail: "cheez.png",
    music: "for-future-bass-159125.mp3",
    artist: "Artist 4",
    albumTitle: "Album 4",
    releaseYear: 2018,
    duration_ms: 148000,
  },
  {
    id: 5,
    title: "inside you",
    thumbnail: "james.png",
    music: "/public/music/inside-you-162760.mp3",
    artist: "Artist 5",
    albumTitle: "Album 5",
    releaseYear: 2022,
    duration_ms: 129000,
  },
];

export default dummyData;
