import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { songThunk } from "../../store/charts";
import "./Song.css";

export default function Song() {
  const songs = useSelector((state) => state.song);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songThunk());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  //   return (
  //     <div>
  //       <div className="mainsongcontain">
  // {
  // if(songs){
  // songs.map(song => (
  // <div key={song.id}>{song.songName}</div>
  // ))
  // }}
  // </div>

  //             <div className="">
  //               <p>Song {song.songName}</p>
  //               <p>Artist {song.artistName}</p>
  //               <p>Album {song.albumName}</p>
  //             </div>
  //         </div>

  //   );
  // }

  let songsToRender;
  if (songs) {
    songsToRender = songs.map((song) => {
      return <div key={song.id}>{song.title}</div>;
    });
  }

  return <div className="songstorender">hi{songsToRender}</div>;
}

// export default Track;
