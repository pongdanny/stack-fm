import "./ProfilePage.css";
import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const ProfilePage = ({ user }) => {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  return (
    <>
      <div className="usertitle">Welcome To Your Profile!</div>
      <div className="userdata">
        <div>{user.username}</div>
        <div>{user.email}</div>
      </div>
    </>
  );
};

export default ProfilePage;
