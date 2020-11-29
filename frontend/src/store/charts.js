import { fetch } from "./csrf";
const GET_SONGS = "song/getSong";
const ADD_SONGS = "song/addSong";
export const getSongs = (songs) => {
  return {
    type: GET_SONGS,
    payload: songs,
  };
};

const addSongs = (song) => {
  return {
    type: ADD_SONGS,
    payload: song,
  };
};

export const searchSongs = (searchTerm) => async (dispatch) => {
  const response = await fetch(`/api/songs/${searchTerm}`);
  const songs = response.data;
  let songObj = {};
  for (let i = 1; i < songs.length; i++) {
    let song = songs[i];
    songObj[song.Song.id] = song.Song;
  }
  dispatch(addSongs(songObj));
};

export const songThunk = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  dispatch(getSongs(res.data));
  // console.log(res.data);
  return res;
};

const songReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SONGS:
      return action.payload;
    default:
      return state;
  }
};

export default songReducer;
