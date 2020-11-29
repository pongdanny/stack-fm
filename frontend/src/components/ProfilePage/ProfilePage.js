import React from "react";
import "./ProfilePage.css";

const ProfilePage = ({ user }) => {
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
