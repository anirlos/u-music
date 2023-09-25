import { combineReducers } from 'redux';
import { CREATE_PLAYLIST } from './actionTypes';

const initialState = {
  playlists: [], // 재생목록 목록을 배열로 관리
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST:
      // 새로운 재생목록을 추가하여 새 상태를 반환
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  playlist: playlistReducer,
});

export default rootReducer;
