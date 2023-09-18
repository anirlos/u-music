import React, { FC } from "react";
import { dummydata } from "assets/dummydatas/dummydata";

const Home: FC = () => {
  return (
    <div>
      <div className="songs-container">
        <h2>노래</h2>
        {dummydata.songs.map((song, index) => (
          <div key={index}>
            <p>{song.title}</p>
            <div className="store-buttons">
              <button className="store-playlist">재생목록에 저장</button>
              <button className="store-library">보관함에 저장</button>
            </div>
          </div>
        ))}
      </div>
      <div className="albums-container">
        <h2>앨범</h2>
        {dummydata.albums.map((album, index) => (
          <div key={index}>
            <img src={album.image} alt={album.albumTitle} />
            <p>{album.albumTitle}</p>
            <div className="store-buttons">
              <button className="store-playlist">재생목록에 저장</button>
              <button className="store-library">보관함에 저장</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
