import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Track({ start }) {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className="track-div">
      <div>{start.songName}</div>
      <div>{start.artistName}</div>
      <div>{start.albumName}</div>
    </div>
  );
}

export default Track;
