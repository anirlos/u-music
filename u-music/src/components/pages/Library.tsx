import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { LibraryRootState } from "../../redux/store/LibraryStore";
import LibraryItem from "../LibraryItem";

const Library: FC = () => {
  const savedSongs = useSelector(
    (state: LibraryRootState) => state.library.savedSongs
  );

  return (
    <Container>
      <ContentContainer>
        {/* contents - 보관함에 담긴 data들 list로 */}
        <div className="items">
          {savedSongs.length > 0 ? (
            savedSongs.map((item) => <LibraryItem key={item.id} song={item} />)
          ) : (
            <NoSongMessage>저장된 노래가 없습니다.</NoSongMessage>
          )}
        </div>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw - 240px);
  height: calc(100vh - 65px);
`;

const ContentContainer = styled.div`
  padding-top: 48px;

  .items {
    > :last-child {
      border-bottom: none;
    }
  }
`;

const NoSongMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
  padding: 20px 0;
`;

export default Library;
