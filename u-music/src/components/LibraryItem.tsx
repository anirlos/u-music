import React, { FC } from "react";
import { FaPlay } from "react-icons/fa6";

const LibraryItem: FC = () => {
  return (
    <div className="item">
      <div className="item-thumbnail">
        <img src="" alt="" />
        <div className="item-overlay">
          <FaPlay />
        </div>
      </div>
      <div className="item-info">
        <p className="item-title"></p>
        <div className="item-info-flex">
          <p className="item-artist"></p>
          <p className="item-albumTitle"></p>
        </div>
      </div>
      <div className="item-duration">
        <p className="item-time"></p>
      </div>
    </div>
  );
};

export default LibraryItem;
