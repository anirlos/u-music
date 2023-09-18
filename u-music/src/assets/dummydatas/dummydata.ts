import { Song, Album } from "src/types";

import album1Img from "assets/img/bowwow.png";
import album2Img from "assets/img/cheez.png";
import album3Img from "assets/img/coco.png";
import album4Img from "assets/img/const.png";
import album5Img from "assets/img/james.png";
import album6Img from "assets/img/kkami.png";
import album7Img from "assets/img/minjun.png";
import album8Img from "assets/img/petfood.png";
import album9Img from "assets/img/yumyum.png";

const dummySongs: Song[] = [
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
  {
    title: "Album1-2",
    duration: "3:09",
  },
  {
    title: "Album2-2",
    duration: "4:15",
  },
  {
    title: "Album3-2",
    duration: "3:49",
  },
  {
    title: "Album3-2",
    duration: "4:18",
  },
  {
    title: "Album4-2",
    duration: "4:04",
  },
  {
    title: "Album4-2",
    duration: "3:15",
  },
];

const dummyAlbums: Album[] = [
  {
    albumTitle: "Album 1",
    albumType: "정규",
    artist: "Artist 1",
    releaseYear: 2022,
    image: album1Img,
    type: "album",
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
    albumTitle: "Album 2",
    albumType: "싱글",
    artist: "Artist 2",
    releaseYear: 2011,
    image: album2Img,
    type: "album",
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
  {
    albumTitle: "Album 3",
    albumType: "정규",
    artist: "Artist 3",
    releaseYear: 2017,
    image: album3Img,
    type: "album",
    songs: [
      {
        title: "Album3-2",
        duration: "3:49",
      },
      {
        title: "Album3-2",
        duration: "4:18",
      },
    ],
  },
  {
    albumTitle: "Album 4",
    albumType: "정규",
    artist: "Artist 4",
    releaseYear: 2009,
    image: album4Img,
    type: "album",
    songs: [
      {
        title: "Album4-2",
        duration: "4:04",
      },
      {
        title: "Album4-2",
        duration: "3:15",
      },
    ],
  },
  {
    albumTitle: "Album 5",
    albumType: "EP",
    artist: "Artist 5",
    releaseYear: 2023,
    image: album5Img,
    type: "album",
    songs: [
      {
        title: "Album5-2",
        duration: "4:04",
      },
      {
        title: "Album5-2",
        duration: "3:15",
      },
    ],
  },
  {
    albumTitle: "Album 6",
    albumType: "싱글",
    artist: "Artist 6",
    releaseYear: 2018,
    image: album6Img,
    type: "album",
    songs: [
      {
        title: "Album6-2",
        duration: "4:04",
      },
      {
        title: "Album6-2",
        duration: "3:15",
      },
      {
        title: "Album6-3",
        duration: "4:14",
      },
    ],
  },
  {
    albumTitle: "Album 7",
    albumType: "EP",
    artist: "Artist 7",
    releaseYear: 2020,
    image: album7Img,
    type: "album",
    songs: [
      {
        title: "Album7-1",
        duration: "4:04",
      },
    ],
  },
  {
    albumTitle: "Album 8",
    albumType: "정규",
    artist: "Artist 8",
    releaseYear: 2002,
    image: album8Img,
    type: "album",
    songs: [
      {
        title: "Album8-2",
        duration: "4:04",
      },
      {
        title: "Album8-2",
        duration: "3:15",
      },
      {
        title: "Album8-3",
        duration: "4:14",
      },
    ],
  },
  {
    albumTitle: "Album 9",
    albumType: "싱글",
    artist: "Artist 9",
    releaseYear: 2023,
    image: album9Img,
    type: "album",
    songs: [
      {
        title: "Album9-1",
        duration: "2:04",
      },
    ],
  },
];

export const dummydata = {
  songs: dummySongs,
  albums: dummyAlbums,
};
