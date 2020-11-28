import React, { useEffect, useState } from "react";

function Controls({
  playing,
  currentlyPlaying,
  setCurrentlyPlaying,
  audio,
  setTime,
  time,
  songs,
  setPlaying,
  setSongs,
}) {
  const [volume, setVolume] = useState({
    currentVolume: 1,
  });

  useEffect(() => {
    const newSong =
      songs &&
      songs.map((song) => {
        if (song.id === playing.id) {
          return {
            ...song,
            currentlyPlaying: true,
          };
        } else {
          return {
            ...song,
            currentlyPlaying: false,
          };
        }
      });

    setSongs(newSong);
  }, [playing]);

  const play = () => {
    if (currentlyPlaying) {
      audio.current.pause();
      setCurrentlyPlaying(!currentlyPlaying);
    } else {
      audio.current.play();
      setCurrentlyPlaying(!currentlyPlaying);
    }
  };

  const dragSlider = (e) => {
    audio.current.currentTime = e.target.value;
    setTime({
      ...time,
      current: e.target.value,
    });
  };

  const handleVolume = (e) => {
    audio.current.volume = e.target.value;
    setVolume({
      ...volume,
      currentVolume: e.target.value,
    });
  };

  const nextLastSongHandler = async (skip) => {
    let currentIdx = songs && songs.findIndex((song) => song.id === playing.id);
    if (skip === "forward") {
      await setPlaying(songs[(currentIdx + 1) % songs.length]);
    }
    if (skip === "rewind") {
      if ((currentIdx - 1) % songs.length === -1) {
        await setPlaying(songs[songs.length - 1]);
        if (currentlyPlaying) audio.current.play();

        return;
      }
      await setPlaying(songs[(currentIdx - 1) % songs.length]);
    }
    if (currentlyPlaying) audio.current.play();
  };

  const formattedTime = (time) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

  const trackMove = {
    transform: `translateX(${time.playTimePercent}%)`,
  };

  return (
    <div className="control-container">
      <div className="timer">
        <p>{formattedTime(time.current)}</p>
        <div
          style={{
            background: `linear-gradient(to left, ${
              playing.art && playing.art[0]
            },${playing.art && playing.art[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={time.length || 0}
            value={time.current}
            onChange={dragSlider}
            type="range"
          />
          <div className="track-wrapper" style={trackMove}></div>
        </div>

        <p>{time.length ? formattedTime(time.length) : "0:00"}</p>
      </div>
      <div
        className="play-pause"
        style={{ color: `${playing.art && playing.art[0]}` }}
      >
        <div
          onClick={() => nextLastSongHandler("rewind")}
          className="rewind"
          size="2x"
        />
        <div className="play" onClick={play} size="2x" />
        <div
          onClick={() => nextLastSongHandler("forward")}
          className="forward"
          size="2x"
        />
      </div>
      <div
        id="volume-controls"
        style={{ color: `${playing.art && playing.art[0]}` }}
      >
        <div
          id="fa-volume-icon"
          onClick={() => {
            if (volume.currentVolume) {
              audio.current.volume = 0;
              setVolume({ ...volume, currentVolume: 0 });
            } else if (!volume.currentVolume) {
              audio.current.volume = 0.5;
              setVolume({ ...volume, currentVolume: 0.5 });
            }
          }}
          icon={
            volume.currentVolume >= 0.5
              ? /volumeup/
              : volume.currentVolume < 0.5 && volume.currentVolume > 0
              ? /volumedown/
              : /mute/
          }
          size="2x"
        />
        <input
          id="slider"
          type="range"
          onChange={handleVolume}
          value={volume.currentVolume}
          min={0}
          max={1.0}
          step={0.01}
        />
      </div>
    </div>
  );
}

export default Controls;
