import React, { FC } from "react";

const Library: FC = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        {/* contents - 보관함에 담긴 data들 list로 */}
        <div className="contents">
          보관함 화면
          <div className="items"></div>
        </div>
      </div>
      <div className="player"></div>
    </div>
  );
};

export default Library;
