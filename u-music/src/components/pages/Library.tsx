import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LibraryRootState } from "redux/store/LibraryStore";
import LibraryItem from "components/LibraryItem";
import { SongData } from "types";
import { setCurrentSong, playSong } from "redux/reducers/player-slice";

const Library: FC = () => {
  const dispatch = useDispatch();
  const savedSongs = useSelector(
    (state: LibraryRootState) => state.library.savedSongs
  );

  const handlePlaySong = (song: SongData, index: number) => {
    dispatch(setCurrentSong({ song, index }));
    dispatch(playSong());
  };

  return (
    <Container>
      <ContentContainer>
        {/* contents - 보관함에 담긴 data들 list로 */}
        <div className="items">
          {savedSongs.length > 0 ? (
            savedSongs.map((item, index) => (
              <LibraryItem
                key={item.id}
                song={item}
                onClick={() => handlePlaySong(item, index)}
              />
            ))
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
