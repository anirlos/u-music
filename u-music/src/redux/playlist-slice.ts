// playlist-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlaylistState {
  playlists: any[]; // Playlist 타입이 정의되어 있다면 그 타입으로 변경 가능
}

const initialState: PlaylistState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    createPlaylist: (state, action: PayloadAction<any>) => {
      state.playlists.push(action.payload);
    },
  },
});

export const { createPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;