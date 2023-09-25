// LibraryItem.tsx
import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeFromLibrary } from "../redux/reducers/library-slice";
import { SongData } from "../types";
import { FaPlay, FaTrashCan } from "react-icons/fa6";

interface LibraryItemProps {
  song: SongData;
}

const LibraryItem: FC<LibraryItemProps> = ({ song }) => {
  const dispatch = useDispatch();

  const handleRemoveFromLibrary = useCallback(
    (id: string | number) => {
      dispatch(removeFromLibrary(id));
    },
    [dispatch]
  );

  return (
    <Item>
      <ItemLeft className="item-thumbnail">
        <img src={song.image} alt={song.title} />
        <ItemHover>
          <div className="play-icon">
            <FaPlay />
          </div>
        </ItemHover>
      </ItemLeft>

      <ItemMiddle className="item-info">
        <div className="item-info-title">
          <p className="item-title">{song.title}</p>
        </div>

        <div className="item-info-flex">
          <p className="item-artist">{song.artist}</p>
          <p className="item-albumtitle">{song.title}</p>
        </div>
      </ItemMiddle>

      <ItemRight>
        <ItemHover className="delete-item">
          <button onClick={() => handleRemoveFromLibrary(song.id)}>
            <FaTrashCan />
          </button>
        </ItemHover>
        <p className="item-releaseDate">{song.releaseDate}</p>
      </ItemRight>
    </Item>
  );
};

const ItemHover = styled.div`
  div.play-icon {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    font-size: 0.875rem;
    color: gray;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  opacity: 0;
`;

const Item = styled.div`
  /* category 240px이라 가정한 경우(고정) */
  width: min(calc(100% - 200px), 1478px);
  min-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 49px;
  padding: 0 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  &:hover ${ItemHover} {
    opacity: 1;
  }

  @media (max-width: 1150px) {
    width: min(calc(100% - 120px), 1478px);
  }
  @media (max-width: 935px) {
    height: 56px;
  }
`;

const ItemLeft = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-right: 24px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemMiddle = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 2 3;
  font-size: 0.875rem;
  align-items: center;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div.item-info-title {
    display: flex;
    flex: 2;
    min-width: 150px;
    justify-content: space-between;
    overflow: hidden;
    padding-right: 10px;
    p {
      color: #fff;
      font-weight: 500;
    }
  }
  div.item-info-flex {
    display: flex;
    flex: 3;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;

    p.item-artist {
      flex: 1;
      margin-right: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p.item-albumtitle {
      flex: 1;
    }
  }

  @media (max-width: 1150px) {
    p.item-albumtitle {
      display: none;
    }
  }
  @media (max-width: 935px) {
    flex-direction: column;

    div.item-info-title,
    div.item-info-flex {
      width: 100%;
    }
    p.item-title {
      margin: 0;
      padding: 0;
    }

    div.item-info-flex {
      display: flex;
      flex-direction: row;
      p.item-artist {
        flex: none;
        position: relative;
        margin: 0;
      }
    }
  }
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  /* min-width: 100px; */
  p {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 16px;
  }
`;

export default React.memo(LibraryItem);
