import { fetch } from "./csrf";
const GET_SONGS = "song/getUser";

export const getSongs = (songList) => {
  return {
    type: GET_SONGS,
    payload: songList,
  };
};

export const songThunk = () => async (dispatch) => {
  const response = await fetch("/api/songs");
  dispatch(getSongs(response.data.songList));
  return response;
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
