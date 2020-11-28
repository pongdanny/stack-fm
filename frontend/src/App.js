import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginForm";
import SignupFormPage from "./components/SignupFormPage/SignUpForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Controls from "./components/Controls/Controls";
import NavBody from "./components/Navigation/NavBody";
import Track from "./components/Track/Track";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const [songs, setSongs] = useState();
  const [playing, setPlaying] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [time, setTime] = useState({
    current: 0,
    length: 0,
    playTimePercent: 0,
  });

  const audio = useRef(null);

  const sessionUser = useSelector((state) => state.session.user);

  const timeUpdater = (e) => {
    const current = e.target.currentTime;
    const length = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedLength = Math.round(length);
    const animation = Math.round((roundedCurrent / roundedLength) * 100);

    setTime({ ...time, current, length, playTimePercent: animation });
  };

  const onEndedHandler = async () => {
    let currentIdx = songs.findIndex((song) => song.id === playing.id);
    await setPlaying(songs[(currentIdx + 1) % songs.length]);

    if (currentlyPlaying) audio.current.play();
  };

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    fetch("/api/songs")
      .then((data) => data.json())
      .then((songsData) => {
        setSongs(songsData);
        setPlaying(songsData[0]);
      })
      .catch((e) => console.error(e));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route
            path="/songs"
            render={() => (
              <div>
                {" "}
                <Track playing={playing} />
                <Controls
                  playing={playing}
                  currentlyPlaying={currentlyPlaying}
                  setCurrentlyPlaying={setCurrentlyPlaying}
                  audio={audio}
                  setTime={setTime}
                  time={time}
                  songs={songs}
                  setPlaying={setPlaying}
                  setSongs={setSongs}
                />
                <audio
                  ref={audio}
                  src={playing.mp3}
                  onTimeUpdate={timeUpdater}
                  onLoadedMetadata={timeUpdater}
                  onEnded={onEndedHandler}
                ></audio>
              </div>
            )}
          />
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <NavBody></NavBody>
        </Switch>
      )}
    </>
  );
}

export default App;
