import React, { useState } from "react";
import "./SearchBar.css";
import search from "./assets/search.svg";

function SearchBar({ onSearch }: { onSearch: (searchTerm: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleImageClick = () => {
    if (searchTerm && onSearch) {
      // onSearch가 존재하는지 확인
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <img
        src={search}
        alt="search"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <input
        type="text"
        placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
        value={searchTerm}
        onChange={handleSearchInput}
      />
    </div>
  );
}
export default SearchBar;
