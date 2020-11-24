import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import styled from "styled-components";

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
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="/">Hey {user.username}!</a>
            <a href="/">{user.email}</a>
            <a href="/">
              <button onClick={logout}>Log Out</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

styled.ul`
  color: blue;
  .profile-dropdown {
    .dropbtn {
      background-color: #4caf50;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown:hover .dropbtn {
      background-color: #3e8e41;
    }
  }
`;

export default ProfileButton;
