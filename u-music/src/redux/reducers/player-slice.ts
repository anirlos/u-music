// player-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongData } from "types";

interface PlayerState {
  currentSong: SongData | null;
  currentIndex: number | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

const initialState: PlayerState = {
  currentSong: null,
  currentIndex: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.5,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong: (state) => {
      state.isPlaying = true;
    },
    pauseSong: (state) => {
      state.isPlaying = false;
    },
    skipNext: (state, action: PayloadAction<SongData[]>) => {
      const songs = action.payload;
      if (
        state.currentIndex !== null &&
        state.currentIndex < songs.length - 1
      ) {
        state.currentIndex++;
        state.currentSong = songs[state.currentIndex];
      }
    },
    skipPrev: (state, action: PayloadAction<SongData[]>) => {
      const songs = action.payload;
      if (state.currentIndex !== null && state.currentIndex > 0) {
        state.currentIndex--;
        state.currentSong = songs[state.currentIndex];
      }
    },
    // 위의 로직들 추가됨 ----------------------------------------------------------
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      state.currentIndex = action.payload.index; // 추가된 코드
    },
    setPlayingState: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const {
  playSong,
  pauseSong,
  skipNext,
  skipPrev,
  // 위의 코드들 추가됨 ---------------------------
  setCurrentSong,
  setPlayingState,
  setCurrentTime,
  setDuration,
  setVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
