import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createPlaylist } from "../redux/actionCreators";
import { useNavigate } from "react-router-dom";
import NewPlaylistbtn from "./Newplaylistbtn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPlaylistModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [playlistVisibility, setPlaylistVisibility] = useState("public");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate를 컴포넌트 최상위 레벨에서 호출

  // 모달 상태 초기화 함수
  const resetModalState = () => {
    setPlaylistTitle("");
    setTitleError("");
    setPlaylistDescription("");
    setPlaylistVisibility("public");
  };

  // 모달이 열릴 때 모달 상태 초기화
  useEffect(() => {
    if (isOpen) {
      resetModalState();
    }
  }, [isOpen]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setPlaylistTitle(title);

    if (title.trim() === "") {
      setTitleError("필수 입력란");
    } else {
      setTitleError("");
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistDescription(e.target.value);
  };

  const handleVisibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlaylistVisibility(e.target.value);
  };

  const handleCreatePlaylist = () => {
    if (playlistTitle.trim() === "") {
      setTitleError("필수 입력란");
    } else {
      // Redux 액션을 디스패치하여 새 재생목록 추가
      const newPlaylistData = {
        title: playlistTitle,
        description: playlistDescription,
        visibility: playlistVisibility,
      };
      dispatch(createPlaylist(newPlaylistData));

      // 모달 닫기
      onClose();

      // 네비게이션 수행
      navigate("/New-playlist"); // New-playlist 페이지로 이동
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalWrap className="modal">
        <ContentContainer className="modal-content">
          <h2>새 재생목록</h2>
          <InputText>
            <input
              type="text"
              id="title"
              value={playlistTitle}
              onChange={handleTitleChange}
              placeholder="제목"
            />
            {titleError && <div style={{ color: "red" }}>{titleError}</div>}
            <input
              type="text"
              id="description"
              value={playlistDescription}
              onChange={handleDescriptionChange}
              placeholder="설명"
            />
            <label className="visibility-select-box" htmlFor="visibility">
              공개 범위 설정
            </label>
            <select
              id="visibility"
              value={playlistVisibility}
              onChange={handleVisibilityChange}
            >
              <option value="public">공개</option>
              <option value="private">비공개</option>
            </select>
          </InputText>
        </ContentContainer>
        <ModalButton>
          <button className="create-button" onClick={handleCreatePlaylist}>
            만들기
          </button>
          <button className="close-button" onClick={onClose}>
            취소
          </button>
        </ModalButton>
      </ModalWrap>
    </ModalWrapper>
  );
};

// Styled-components를 사용한 모달 스타일링
const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 540px;
  height: fit-content;
  border-radius: 0.3rem;
  background-color: #212121;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    margin: 1rem;
    padding: 1rem;
    color: #fff;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;

  input {
    background-color: #212121;
    width: 100%;
    padding: 0.5rem;
    padding-right: 2rem;
    margin-top: 1.5rem;
    margin-left: 0;
    border: 0;
    box-shadow: 0 0.7px #5b5b5b;
    color: #fff;
    outline: none;
  }

  .visibility-select-box {
    margin: 1.5rem 0rem 0.5rem 0rem;
    font-size: 0.8rem;
    color: #9d9b96;
  }

  select {
    background-color: #212121;
    color: #fff;
    padding: 0.5rem;
    width: 15vw;
    border: none;
    outline: none;
  }
`;

const ModalButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  /* textdecoration: none; */

  .create-button {
    background-color: #fff;
    color: #212121;
    padding: 0.8rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    /* textdecoration: none; */

    &:hover {
      background-color: #d9d9d9;
    }
  }

  .close-button {
    background-color: #212121;
    color: #fff;
    border: none;
    padding: 0.8rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #383838;
    }
  }
`;

export default NewPlaylistModal;
