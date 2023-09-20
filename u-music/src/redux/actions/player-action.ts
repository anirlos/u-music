import { createAction } from "@reduxjs/toolkit";

// 재생
export const playSong = createAction("player/playSong");

// 정지
export const pauseSong = createAction("player/pauseSong");

// 다음곡
export const skipNext = createAction("player/skipNext");

// 이전곡
export const skipPrev = createAction("player/skipPrev");

// 음량
export const adjustVolume = createAction<number>("player/adjustVolume");
