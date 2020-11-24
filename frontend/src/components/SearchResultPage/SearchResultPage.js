import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SongList from "./SongList";

const SearchResultPage = (props) => {
  const [input, setInput] = useState("");
  const [songListDefault, setSongListDefault] = useState();
  const [songList, setSongList] = useState();

  const fetchData = async () => {
    return await fetch("https://soundcloud.com")
      .then((response) => response.json())
      .then((data) => {
        setSongList(data);
        setSongListDefault(data);
      });
  };

  const updateInput = async (input) => {
    const filtered = songListDefault.filter((song) => {
      return song.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setSongList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Country List</h1>
      <SearchBar input={input} onChange={updateInput} />
      <SongList songList={songList} />
    </>
  );
};

export default SearchResultPage;
