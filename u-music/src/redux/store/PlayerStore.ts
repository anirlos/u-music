import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/player-slice";
import libraryReducer from "../reducers/library-slice";

export type PlayerRootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    player: playerReducer,
    library: libraryReducer,
  },
});

export default store;
