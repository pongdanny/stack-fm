import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import Search from "../Search/Search";
function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="navstyle">
          <NavLink className="login-btn" to="/login">
            Log In
          </NavLink>
          <NavLink className="signup-btn" to="/signup">
            Sign Up
          </NavLink>
        </div>
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
              <Search type="input"></Search>
              {/* <li className="searchBarli">
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
              </li> */}
              <li>
                <a href="/songs">Explore</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
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
