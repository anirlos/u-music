import React from "react";
import styled from "styled-components";
import Albumart from "./Albumart";
import PlaylistInfo from "./PlaylistInfo";
import MusicList from "./MusicList";
import album1Img from "../img/album1.jpg";
import album2Img from "../img/album2.jpg";
import album3Img from "../img/album3.jpg";
import album4Img from "../img/album4.jpg";
import album5Img from "../img/album5.jpg";
import album6Img from "../img/album6.jpg";
import Header from "./../components/Header";
import Navigation from "./../components/Navigation";

interface NewPlaylistPageProps {
  // NewPlaylistListPage 컴포넌트의 props 정의
}

const mockMusicData = [
  {
    id: 1,
    albumArt: album1Img,
    title: "자국",
    artist: "비비(BIBI)",
    albumTitle: "Album 1",
    duration: "3:11", // 형식: 분:초
  },
  {
    id: 2,
    albumArt: album2Img,
    title: "Square (2017)",
    artist: "Yerin Baek",
    albumTitle: "Album 2",
    duration: "4:21", // 형식: 분:초
  },
  {
    id: 3,
    albumArt: album3Img,
    title: "휘파람",
    artist: "BLACKPINK",
    albumTitle: "Album 3",
    duration: "3:31", // 형식: 분:초
  },
  {
    id: 4,
    albumArt: album4Img,
    title: "ASAP",
    artist: "STAYC(스테이씨)",
    albumTitle: "Album 4",
    duration: "3:15", // 형식: 분:초
  },
  {
    id: 5,
    albumArt: album5Img,
    title: "후라이의 꿈",
    artist: "AKMU",
    albumTitle: "Album 5",
    duration: "3:25", // 형식: 분:초
  },
  {
    id: 6,
    albumArt: album6Img,
    title: "Bad",
    artist: "크리스토퍼",
    albumTitle: "Album 6",
    duration: "3:45", // 형식: 분:초
  },
];

const NewPlaylistPage: React.FC<NewPlaylistPageProps> = () => {
  return (
    <PageContainer>
      <Header />
      <Navigation />
      <AlbumInfoContainer>
        <LeftColumn>
          <Albumart />
        </LeftColumn>
        <RightColumn>
          <h1>새 재생목록</h1>
          <PlaylistInfo
            author={""}
            isPublic={false}
            songCount={0}
            durationSeconds={0}
          />
        </RightColumn>
      </AlbumInfoContainer>
      <MusicListContainer>
        <MusicList musicData={mockMusicData} />
      </MusicListContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 75px; /* Navigation 높이만큼 여백 추가 */
`;

const AlbumInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 1150px; /* 컨텐츠 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex: 3;
`;

const MusicListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1150px; /* 컨텐츠 최대 너비 설정 */
  margin-left: 4rem;
`;

export default NewPlaylistPage;
