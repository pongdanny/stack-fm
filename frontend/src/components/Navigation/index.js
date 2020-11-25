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
    <div className="wrapper">
      <div className="Container">
        <div className="nav">
          {/* <div className="logo"></div> */}
          <NavLink className="logo" exact to="/"></NavLink>
          <div className="logoo"></div>
          <div className="menu">
            <ul className="navMenu">
              <li>
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search"
                ></input>
                <img
                  className="searchPic"
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
              <li className="buttonz">{isLoaded && sessionLinks}</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navigation;
