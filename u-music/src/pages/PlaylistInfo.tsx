import React from "react";
import styled from "styled-components";

interface PlaylistInfoProps {
  author: string;
  isPublic: boolean;
  songCount: number;
  durationSeconds: number;
}

const PlaylistInfo: React.FC<PlaylistInfoProps> = ({
  author,
  isPublic,
  songCount,
  durationSeconds,
}) => {
  return (
    <PlaylistInfoContainer>
      <PlaylistInfoGroup>
        <PlaylistInfoItem>{isPublic ? "공개" : "비공개"}</PlaylistInfoItem>
        <PlaylistInfoItem>작성자 {author}</PlaylistInfoItem>
      </PlaylistInfoGroup>
      <PlaylistInfoGroup>
        <PlaylistInfoItem>노래 {songCount}곡</PlaylistInfoItem>
        <PlaylistInfoItem>{durationSeconds}초</PlaylistInfoItem>
      </PlaylistInfoGroup>
    </PlaylistInfoContainer>
  );
};

const PlaylistInfoContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const PlaylistInfoGroup = styled.div`
  margin-bottom: 8px;
`;

const PlaylistInfoItem = styled.span`
  display: inline-flex;
  margin-right: 8px;
`;

export default PlaylistInfo;
