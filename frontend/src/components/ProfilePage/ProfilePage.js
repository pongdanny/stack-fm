import React from "react";
import { useSelector } from "react-redux";
import "./ProfilePage.css";
// import { getSong } from "../../store/charts";

const ProfilePage = (props) => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <figure>
        <div className="usertitle">User Details:</div>
        <div className="userdata">
          <div>User ID - {sessionUser.username} </div>
          <div>User E-Mail - {sessionUser.email}</div>
        </div>
      </figure>
    </>
  );
};

export default ProfilePage;
