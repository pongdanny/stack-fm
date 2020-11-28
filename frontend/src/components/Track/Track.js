import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { songThunk } from "../store/charts";

export default function Song() {
  const songs = useSelector((state) => state.song);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songThunk());
  }, []);

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <ul className="">
      {songs.map((song) => (
        <div key={song.songName} className="">
          <div className="">
            <div className="">
              <p>Song: {song.songName}</p>
              <p>Artist: {song.artistName}</p>
              <p>Album: {song.albumName}</p>
            </div>
          </div>
          <div className=""></div>
          <p></p>
        </div>
      ))}
    </ul>
  );
}

// export default Track;
