import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { songThunk } from "../../store/charts";
import "./Song.css";

export default function Song() {
  const songs = useSelector((state) => state.song);

  console.log(songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songThunk());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  let songsToRender;
  if (songs) {
    songsToRender = songs.map((song) => {
      return (
        <div>
          {/* <div key={song.id}>{song.title}</div> */}
          <ul className="">
            <li>Song {song.songName}</li>
            <li>Artist {song.artistName}</li>
            <li>Album {song.albumName}</li>
          </ul>
        </div>
      );
    });
  }

  return (
    <div className="songstorender">no songs to show :({songsToRender}</div>
  );
}

//     <ul className="">
//       {songs.map((song) => (
//         <div key={song.name} className="">
//           <div className="">
//             <div className="">
//               <p>{song.name}</p>
//               <p>{song.style}</p>
//               <p>{song.description}</p>
//             </div>
//           </div>
//           <p></p>
//         </div>
//       ))}
//     </ul>
//   );
// }

// export default Track;

//   let songsToRender;
//   if (songs) {
//     songsToRender = songs.map((song) => {
//       return (
//         <div>
//           {/* <div key={song.id}>{song.title}</div> */}
//           <ul className="">
//             <li>Song {song.songName}</li>
//             <li>Artist {song.artistName}</li>
//             <li>Album {song.albumName}</li>
//           </ul>
//         </div>
//       );
//     });
//   }

//   return (
//     <div className="songstorender">no songs to show :({songsToRender}</div>
//   );
// }
