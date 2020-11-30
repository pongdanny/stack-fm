const express = require("express");

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const router = express.Router();

const { Song } = require("../../db/models");
const fetch = require("node-fetch");

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const songs = await Song.findAll();
//     // let result = {};
//     // for (let i = 0; i < songs.length - 1; i++) {
//     //   let song = songs[i];
//     //   result[song.id] = song;
//     // }
//     res.json(songs);
//   })
// );

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    res.json(songs);
  })
);

router.post(
  "/create",
  asyncHandler(async (req, res, next) => {
    const { songName, artistName, albumName } = req.body;
    const songs = await Song.create(req.body);
    res.json({
      song: songs,
    });
  })
);

// const result = await fetch(
//   `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=${process.env.LAST_FM_API_KEY}&format=json`
// );
// const data = await result.json();
// res.json({ data });
// res.send("hello");

module.exports = router;
