import React, { FC } from "react";
import dummydata from "assets/dummydatas/dummydata";

const Home: FC = () => {
  return (
    <div>
      <div className="songs-container">
        <h2>노래</h2>
        {dummydata.map((song) => (
          <div key={song.id}>
            <img
              src={process.env.PUBLIC_URL + "/image/" + song.thumbnail}
              alt={song.title}
            />
            <p>{song.title}</p>
            <div className="store-buttons">
              <button className="store-library">보관함에 저장</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
