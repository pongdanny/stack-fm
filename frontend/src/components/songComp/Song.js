import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchSongs } from "../../store/charts";
import "./Song.css";

export default function Song() {
  const songs = useSelector((state) => state.songList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);


  if (!songs) {
    return null;
  }
  return songs.map((song) => {
    return (
      <div>
        <div>
          <ul className="songlist">

            <div>
              <li>Song {song.songName}</li>
              <li>Artist {song.artistName}</li>
              <li>Album {song.albumName}</li>
            </div>

          </ul>
        </div>
      </div>
    );
  });
}
