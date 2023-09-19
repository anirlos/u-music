import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPlaylistModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [playlistVisibility, setPlaylistVisibility] = useState("public");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistDescription(e.target.value);
  };

  const handleVisibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlaylistVisibility(e.target.value);
  };

  const handleCreatePlaylist = () => {
    // 새 재생목록 생성 로직 작성
    // 예: API 호출, 상태 업데이트

    // 모달을 닫습니다.
    onClose();
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
              <option value="public">일부 공개</option>
              <option value="private">비공개</option>
            </select>
          </InputText>
        </ContentContainer>
        <ModalButton>
          <Link
            to="/New-playlist"
            className="create-button"
            onClick={handleCreatePlaylist}
          >
            만들기
          </Link>
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
  textdecoration: none;

  .create-button {
    background-color: #fff;
    color: #212121;
    padding: 0.8rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    textdecoration: none;

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
