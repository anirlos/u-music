import React, { FC } from "react";
import { FaEllipsisVertical, FaPlay } from "react-icons/fa6";

const LibraryItem: FC = () => {
  return (
    <div className="item">
      <a href="#" className="thumbnail">
        <div className="img"></div>
        <div className="thumbnail-overlay">
          <button className="menu-btn">
            <FaEllipsisVertical />
          </button>
          <button className="play-btn">
            <FaPlay />
          </button>
        </div>
      </a>
      <div className="details">
        <div className="title"></div>
        <div className="substring">
          <span></span> {/* 재생목록 / albumType */}
          <span>•</span> {/* 구분점 */}
          <span></span> {/* creator / artist */}
          <span>•</span> {/* 구분점 */}
          <span></span> {/* 저장된 노래 개수 / releaseYear */}
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
