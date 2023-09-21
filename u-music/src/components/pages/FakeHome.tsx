import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dummyData from "../../assets/dummydatas/dummydata";
import { SongData } from "../../types";
import { addToLibrary } from "../../redux/reducers/library-slice";
import { LibraryRootState } from "../../redux/store/LibraryStore";
import styled from "styled-components";
import Modal from "../modals/Modal";

const Home: FC = () => {
  const dispatch = useDispatch();
  const savedSongs = useSelector(
    (state: LibraryRootState) => state.library.savedSongs
  );

  const [showLibraryErrorModal, setShowLibraryErrorModal] = useState(false);

  const handleAddToLibrary = useCallback(
    (item: SongData) => {
      // 이미 저장된 노래인지 체크
      const isSongSaved = savedSongs.some(
        (savedSong) => savedSong.id === item.id
      );

      if (isSongSaved) {
        // Modal 또는 알림을 통해 사용자에게 메시지 전달
        // alert("이미 존재하는 노래입니다.");
        setShowLibraryErrorModal(true);
      } else {
        // 노래를 보관함에 추가
        dispatch(addToLibrary(item));
      }
    },
    [dispatch, savedSongs]
  );

  return (
    <Container>
      <div className="songs-container">
        <h2>노래</h2>
        {dummyData.map((item: SongData) => (
          <div key={item.id}>
            <img
              src={process.env.PUBLIC_URL + "/image/" + item.thumbnail}
              alt={item.title}
            />
            <p>{item.title}</p>
            <div className="store-buttons">
              <button
                className="store-library"
                onClick={() => handleAddToLibrary(item)}
              >
                보관함에 저장
              </button>
            </div>
          </div>
        ))}
      </div>
      {showLibraryErrorModal && (
        <Modal onClose={() => setShowLibraryErrorModal(false)}>
          <LibraryErrorMessage>
            이미 보관함에 저장한 노래입니다.
          </LibraryErrorMessage>
          <CloseButton onClick={() => setShowLibraryErrorModal(false)}>
            X
          </CloseButton>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw - 240px);
`;

const LibraryErrorMessage = styled.div`
  padding: 60px 50px;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: bold;
  background: #212121;
  color: rgba(255, 255, 255, 0.8);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.8);
`;

export default Home;
