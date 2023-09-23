
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import libraryReducer from "./library-slice";
import playlistReducer from "./playlist-slice";

export type LibraryRootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
  library: libraryReducer,
  playlist: playlistReducer,
});

const preloadedState = {
  library: {
    savedSongs: JSON.parse(localStorage.getItem("savedSongs") || "[]"),
    isDuplicate: false,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;