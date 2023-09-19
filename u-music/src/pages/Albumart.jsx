import React from "react";
import defaultAlbumImage from "../img/default-album.png";
import styled from "styled-components";

function AlbumArt() {
  return (
    <ImgContainer>
      <img src={defaultAlbumImage} alt="앨범 아트" width={200} height={200} />
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

export default AlbumArt;
