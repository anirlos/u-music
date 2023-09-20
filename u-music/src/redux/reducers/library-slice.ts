import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongData } from "types";

interface LibraryState {
  savedSongs: SongData[];
}

const initialState: LibraryState = {
  savedSongs: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addToLibrary: (state, action: PayloadAction<SongData>) => {
      state.savedSongs.push(action.payload);
      localStorage.setItem("savedSongs", JSON.stringify(state.savedSongs));
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
  },
});

export const { addToLibrary, removeFromLibrary } = librarySlice.actions;

export default librarySlice.reducer;
