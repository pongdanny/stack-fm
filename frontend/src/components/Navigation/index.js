import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink className="login-btn" to="/login">
          Log In
        </NavLink>
        <NavLink className="signup-btn" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <div class="wrapper">
      <div class="Container">
        <div class="nav">
          {/* <div class="logo"></div> */}
          <NavLink className="logo" exact to="/"></NavLink>
          <div class="logoo"></div>
          <div class="menu">
            <ul class="navMenu">
              <li>
                <input
                  class="searchBar"
                  type="text"
                  placeholder="TrapCloud Search"
                ></input>
                <img
                  class="searchPic"
                  alt="pic"
                  src="https://img.icons8.com/ios/50/000000/search-database.png"
                />
              </li>
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>{isLoaded && sessionLinks}</li>
            </ul>
          </div>
        </div>
        <div class="headerz">
          <h1>
            Welcome to the <span>Trap</span> Cloud ☁️
          </h1>
          <p>What's Next in Music is First in TrapCloud 🏚️</p>
          <button class="explore" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
