const express = require("express");
const router = express.Router();

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const { Song } = require("../../db/models");
const fetch = require("node-fetch");
debugger;
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    res.json(songs);
  })
);

// const result = await fetch(
//   `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=${process.env.LAST_FM_API_KEY}&format=json`
// );
// const data = await result.json();
// res.json({ data });
// res.send("hello");

module.exports = router;
