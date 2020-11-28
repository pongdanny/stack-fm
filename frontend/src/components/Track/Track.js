import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Track({ playing }) {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className="track-div">
      {/* <div>{playing.songName}</div>
      <div>{playing.artistName}</div>
      <div>{playing.albumName}</div> */}
    </div>
  );
}

export default Track;
