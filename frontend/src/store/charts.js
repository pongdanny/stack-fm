import { fetch } from "./csrf";
const { createStore } = require("redux");
const GET_SONGS = "song/getSong";
// const ADD_SONGS = "song/addSong";
// const UPDATE_SONGS = "song/updateSong";
const DELETE_SONGS = "song/deleteSong";
export const getSongs = (song) => {
  return {
    type: GET_SONGS,
    payload: song,
  };
};

// const makeSongs = (song) => {
//   return {
//     type: ADD_SONGS,
//     song,
//   };
// };

// export const getSong = (song) => async (dispatch) => {
//   const { songName, artistName, albumName } = song;
//   const res = await fetch("/api/songs", {
//     method: "GET",
//     body: JSON.stringify({
//       songName,
//       artistName,
//       albumName,
//     }),
//   });
//   dispatch(getSongs(res.data));
//   return res;
// };

// const initialState = { song: [] };

// const songReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_SONGS:
//       return { ...state, song: [...state.song, action.song] };
//     default:
//       return state;
//   }
// };

export const fetchSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  dispatch(getSongs(res.data));
  // console.log(res.data);
  return res.data;
};

// const updateSongs = (song) => {
//   return {
//     type: UPDATE_SONGS,
//     payload: song,
//   };
// };

export const deleteSongs = () => async (dispatch) => {
  const res = await fetch("api/songs/delete", {
    method: "DELETE",
  });
  dispatch(deleteSongs());
  return res;
};

export const searchSongs = (searchTerm) => async (dispatch) => {
  const response = await fetch(`/api/songs/${searchTerm}`);
  const songs = response.data;
  let songObj = {};
  for (let i = 1; i < songs.length; i++) {
    let song = songs[i];
    songObj[song.Song.id] = song.Song;
  }
  dispatch(fetchSongs(songObj));
};

const initialState = [
  {
    songName: " ",
    artistName: " ",
    albumName: " ",
  },
];

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return action.payload;
    case DELETE_SONGS:
      state = null;
      return state;
    default:
      return state;
  }
};

// const songReducer = (state = [], action) => {
//   switch (action.type) {
//     case GET_SONGS:
//       return [...state, action.song];
//     default:
//       return state;
//   }
// };

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
