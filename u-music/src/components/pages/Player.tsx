import React, { useEffect, useRef } from "react";
import { FC } from "react";
import styled from "styled-components";

import {
  playSong,
  pauseSong,
  skipNext,
  skipPrev,
  setVolume,
} from "redux/reducers/player-slice";

import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerPlayFilled,
} from "react-icons/tb";
import { VscDebugPause } from "react-icons/vsc";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PlayerRootState } from "redux/store/PlayerStore";

const Player: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const { currentSong, isPlaying, currentTime, duration, volume } = useSelector(
    (state: PlayerRootState) => state.player
  );

  //   재생/정지
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // 재생시간
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong());
    }
  };

  // 음량
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const adjustVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(event.target.valueAsNumber));
  };

  return (
    <Container>
      <audio ref={audioRef} src={currentSong?.music}></audio>
      {/* <div
        className="progress-bar"
        currentTime={currentTime}
        duration={duration}
      ></div> */}

      <div className="music-controler">
        <TbPlayerSkipBackFilled onClick={() => dispatch(skipPrev())} />
        <div className="play-pause" onClick={handlePlayPauseClick}>
          {isPlaying ? (
            <VscDebugPause onClick={() => dispatch(pauseSong())} />
          ) : (
            <TbPlayerPlayFilled onClick={() => dispatch(playSong())} />
          )}
        </div>
        <TbPlayerSkipForwardFilled onClick={() => dispatch(skipNext())} />
      </div>

      <div className="volume-controler">
        <BiVolumeFull onClick={() => adjustVolume(1)} />
        <BiVolumeMute onClick={() => adjustVolume(0)} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={adjustVolume}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 4;
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
