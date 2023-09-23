export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';

export const createPlaylist = (playlistData) => ({
  type: CREATE_PLAYLIST,
  payload: playlistData,
});
