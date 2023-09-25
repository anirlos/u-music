import React from "react";
import styled from "styled-components";

const MusicList = ({ musicData }) => {
  return (
    <div className="music-list">
      <h2>추천</h2>
      <MusicListContainer>
        {musicData.map((music) => (
          <MusicListItem key={music.id}>
            <img src={music.albumArt} alt={`${music.title} 앨범 아트`} />
            <h3>{music.title}</h3>
            <p>{music.artist}</p>
            <p>{music.albumTitle}</p>
            <p>재생 시간: {music.duration}</p>
          </MusicListItem>
        ))}
      </MusicListContainer>
    </div>
  );
};

const MusicListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  border: 0;
  box-shadow: 0 0.7px #5b5b5b; /* 1px 이하의 border 처리 */
  color: #fff;
  outline: none;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
`;

const MusicListContainer = styled.div`
  max-width: 1150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default MusicList;
