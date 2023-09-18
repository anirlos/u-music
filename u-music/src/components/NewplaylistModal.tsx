import React, { useState } from "react";

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
    <div className="modal">
      <div className="modal-content">
        <h2>새 재생목록</h2>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={playlistTitle}
          onChange={handleTitleChange}
        />
        <label htmlFor="description">설명</label>
        <input
          type="text"
          id="description"
          value={playlistDescription}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="visibility">공개 범위</label>
        <select
          id="visibility"
          value={playlistVisibility}
          onChange={handleVisibilityChange}
        >
          <option value="public">공개</option>
          <option value="public">일부 공개</option>
          <option value="private">비공개</option>
        </select>
        <button onClick={onClose}>취소</button>
        <button onClick={handleCreatePlaylist}>만들기</button>
      </div>
    </div>
  );
};

export default NewPlaylistModal;
