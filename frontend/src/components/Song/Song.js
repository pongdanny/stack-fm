import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { songThunk } from "../../store/charts";

export default function Song() {
  const songs = useSelector((state) => state.song);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songThunk());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <ul className="mainsongcontain">
      {songs.map((song) => (
        <div key={song.songName} className="songcontain">
          <div className="">
            <p>Song {song.songName}</p>
            <p>Artist {song.artistName}</p>
            <p>Album {song.albumName}</p>
          </div>
        </div>
      ))}
    </ul>
  );
}

// export default Track;
