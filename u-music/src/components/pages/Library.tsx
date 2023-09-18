import React, { FC } from "react";

const Library: FC = () => {
  return (
    <div className="content-wrapper">
      <div className="header">
        {/* 보관함 페이지에서의 기본 헤더 */}
        <div className="filter-items">
          <button className="filter-btn">재생목록</button>
          <button className="filter-btn">노래</button>
          <button className="filter-btn">앨범</button>
        </div>
        {/* 필터 선택시 해당 필터 페이지의 헤더로 변경 (해당 분류 기준, X 버튼) */}
      </div>

      {/* contents - 보관함에 담긴 data들 list로 */}
      <div className="contents">
        보관함 화면
        <div className="items"></div>
      </div>
    </div>
  );
};

export default Library;
