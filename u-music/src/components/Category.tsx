import React, { FC } from "react";
import { Link } from "react-router-dom";

const Category: FC = () => {
  return (
    <div className="category">
      <Link to="/">
        <button className="to-home">홈</button>
      </Link>
      <Link to="/library">
        <button className="to-library">보관함</button>
      </Link>
    </div>
  );
};

export default Category;
