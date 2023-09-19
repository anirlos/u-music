import React, { FC } from "react";
import { useDispatch } from "react-redux";
import dummydata from "assets/dummydatas/dummydata";
import { SongData } from "types";
import { addToLibrary } from "redux/library-slice";

const Home: FC = () => {
  const dispatch = useDispatch();

  const handleAddToLibrary = (item: SongData) => {
    dispatch(addToLibrary(item));
    console.log(item);
  };

  return (
    <div>
      <div className="songs-container">
        <h2>노래</h2>
        {dummydata.map((item: SongData) => (
          <div key={item.id}>
            <img
              src={process.env.PUBLIC_URL + "/image/" + item.thumbnail}
              alt={item.title}
            />
            <p>{item.title}</p>
            <div className="store-buttons">
              <button
                className="store-library"
                onClick={() => handleAddToLibrary(item)}
              >
                보관함에 저장
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
