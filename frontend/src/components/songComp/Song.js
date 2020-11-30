import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchSongs } from "../../store/charts";
import "./Song.css";

export default function Song() {
  const songs = useSelector((state) => state.song);
  console.log(songs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongs());
  }, []);

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  // let songsToRender;
  // if (songs) {
  //   songsToRender = songs.map((song) => {
  return (
    <div>
      <div>
        <ul className="songlist">
          {songs.map((songfull) => (
            <div>
              <li>Song {songfull.songName}</li>
              <li>Artist {songfull.artistName}</li>
              <li>Album {songfull.albumName}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
  //   });
  // }

  // return (
  //   <div className="songstorender">no songs to show :({songsToRender}</div>
  // );
}
