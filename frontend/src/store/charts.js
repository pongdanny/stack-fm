import { fetch } from "./csrf";
const { createStore } = require("redux");
const GET_SONGS = "song/getSong";
const ADD_SONGS = "song/addSong";
// const UPDATE_SONGS = "song/updateSong";
// const DELETE_SONGS = "song/deleteSong";
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

// const updateSongs = (song) => {
//   return {
//     type: UPDATE_SONGS,
//     payload: song,
//   };
// };

// const deleteSongs = (song) => {
//   return {
//     type: DELETE_SONGS,
//     payload: song,
//   };
// };

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
  return res.data;
};

const songReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SONGS:
      return [...state, action.song];
    default:
      return state;
  }
};

const store = createStore(songReducer);

const addSong = {
  type: "ADD_SONGS",
  song: "Pain",
};

console.log(store.getState());
store.dispatch(addSong);
console.log(store.getState());

const display = () => {
  console.log(store.getState());
};
const unsubscribeDisplay = store.subscribe(display);

store.dispatch(addSong);

unsubscribeDisplay();

store.dispatch(addSong);
export default songReducer;
