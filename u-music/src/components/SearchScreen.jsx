import React from "react";
import SearchBar from "./SearchBar";

// function SearchScreen() {
//   // 검색어 상태를 관리하기 위한 useState 훅을 사용
//   const [searchTerm, setSearchTerm] = useState("");

//   // 검색어핸들러
//   const handleSearchInput = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // 검색 버튼 클릭 핸들러
//   const handleSearch = () => {
//     // 검색 결과를 처리하는 로직을 추가.
//     console.log(`검색어: ${searchTerm}`);
//   };

//   return (
//     <div>
//       <h2>검색 화면</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="검색어를 입력하세요"
//           value={searchTerm}
//           onChange={handleSearchInput}
//         />
//         <button onClick={handleSearch}>검색</button>
//       </div>
//       {/* 검색 결과를 여기에 표시 */}
//     </div>
//   );
// }

function SearchScreen() {
  const handleSearch = (searchTerm) => {
    console.log(`검색어: ${searchTerm}`);
  };

  return (
    <div>
      <h2>검색 화면</h2>
      <div>
        <SearchBar onSearch={handleSearch} /> {/* onSearch 프롭스 전달 */}
      </div>
      {/* 검색 결과를 여기에 표시 */}
    </div>
  );
}

export default SearchScreen;
