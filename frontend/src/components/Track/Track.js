import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Track.css";

function Track({ start }) {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className="track-div">
      <img src={start.photo} alt={start.songName} />
      <div>{start.songName}</div>
      <div>{start.artistName}</div>
    </div>
  );
}

export default Track;
