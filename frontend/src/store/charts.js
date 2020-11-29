import { fetch } from "./csrf";
const GET_SONGS = "song/getUser";

export const getSongs = (songs) => {
  return {
    type: GET_SONGS,
    payload: songs,
  };
};

export const songThunk = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  dispatch(getSongs(res.data));
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
