const express = require("express");
const asyncHandler = require("express-async-handler");
const { Song } = require("./../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll();

    res.json({ songs });
  })
);

module.exports = router;
