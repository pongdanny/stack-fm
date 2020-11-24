import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Track.css";

function Track({ start }) {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className="file-container">
      <img src={start.photo} alt={start.songName} />
      <h2>{start.songName}</h2>
      <h3>{start.artistName}</h3>
    </div>
  );
}

export default Track;
