import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
// import styled from "styled-components";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="menubutton" onClick={openMenu}>
        {user.username}
      </button>
      {showMenu && (
        <div className="dropdown">
          <ul className="menucontent">
            <li>
              {" "}
              &nbsp; &nbsp; &nbsp;{" "}
              <a href="/profile" className="profilebtn">
                Profile
              </a>
              &nbsp; &nbsp; &nbsp;
            </li>
            {/* <li>{user.email}</li> */}
            <li>
              <button className="logoutbtn" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
