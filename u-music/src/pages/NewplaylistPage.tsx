import React from "react";
import styled from "styled-components";
import Albumart from "./Albumart";
import PlaylistInfo from "./PlaylistInfo";

const NewPlaylistListPage: React.FC = () => {
  // 페이지 컴포넌트의 기능, 상태 추가

  return (
    <PageContainer>
      <Albumart />
      <PageContent>
        <h1>새 재생목록</h1>
        <PlaylistInfo
          author={""}
          isPublic={false}
          songCount={0}
          durationSeconds={0}
        />
        {/* 추천곡 표시 */}
      </PageContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background: #030303;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const PageContent = styled.div`
  flex: 1; /* 남은 공간을 PageContent가 차지하도록 함 */
  padding: 1rem;
  margin: 1rem;
`;

export default NewPlaylistListPage;
