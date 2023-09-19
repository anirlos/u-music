import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./library-slice";

export type RootState = ReturnType<typeof store.getState>;

const preloadedState = {
  library: {
    savedSongs: JSON.parse(localStorage.getItem("savedSongs") || "[]"),
  },
};

const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
  preloadedState,
});

export default store;
