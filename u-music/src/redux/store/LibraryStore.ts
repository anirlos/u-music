import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../reducers/library-slice";

export type LibraryRootState = ReturnType<typeof store.getState>;

const preloadedState = {
  library: {
    savedSongs: JSON.parse(localStorage.getItem("savedSongs") || "[]"),
    isDuplicate: false,
  },
};

const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
  preloadedState,
});

export default store;
