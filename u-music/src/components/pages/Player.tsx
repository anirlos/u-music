import React from "react";
import { FC } from "react";
import { styled } from "styled-components";
import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerPlayFilled,
} from "react-icons/tb";
import { VscDebugPause } from "react-icons/vsc";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

const Player: FC = () => {
  return (
    <Container>
      <div className="progress-bar"></div>
      <div className="music-controler">
        <TbPlayerSkipBackFilled />
        <TbPlayerPlayFilled />
        <VscDebugPause />
        <TbPlayerSkipForwardFilled />
        <BiVolumeFull />
        <BiVolumeMute />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100vw;
  height: 72px;
  display: flex;
  flex-direction: column;
  background: #212121;
  color: #909090;
  /* 40px */
  /* 24px */
`;

export default Player;
