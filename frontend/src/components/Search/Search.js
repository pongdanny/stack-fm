import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as songActions from "../../store/charts";
import { useHistory } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    dispatch(songActions.searchSongs(search.toLowerCase()));
    history.push(`/photos/songs/${search}`);
    setSearch("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <>
      <input
        onChange={handleChange}
        value={search}
        className="searchinput"
        placeholder="Search For Songs"
      />
      <button onClick={handleSearch} className="searchbutton">
        <i className="search-icon"></i>
      </button>
    </>
  );
};

export default Search;
