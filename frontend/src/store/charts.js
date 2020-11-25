import { fetch } from "./csrf";

export const getSongs = () => async (dispatch) => {
  const response = await fetch("/songs", {
    method: "GET",
  });
  console.log(response);
};
