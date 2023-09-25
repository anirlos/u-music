import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongData } from "../../types";

interface LibraryState {
  savedSongs: SongData[];
  isDuplicate: boolean;
}

const initialState: LibraryState = {
  savedSongs: [],
  isDuplicate: false,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addToLibrary: (state, action: PayloadAction<SongData>) => {
      const isSongSaved = state.savedSongs.some(
        (savedSong) => savedSong.id === action.payload.id
      );

      if (isSongSaved) {
        state.isDuplicate = true;
      } else {
        state.isDuplicate = false;
        state.savedSongs.push(action.payload);
        localStorage.setItem("savedSongs", JSON.stringify(state.savedSongs));
      }
    },
    removeFromLibrary: (state, action) => {
      const index = state.savedSongs.findIndex(
        (song) => song.id === action.payload
      );
      if (index !== -1) {
        state.savedSongs.splice(index, 1);
      }
      localStorage.setItem("savedSongs", JSON.stringify(state.savedSongs));
    },
    resetDuplicateState: (state) => {
      state.isDuplicate = false;
    },
  },
});

export const { addToLibrary, removeFromLibrary, resetDuplicateState } =
  librarySlice.actions;

export default librarySlice.reducer;
