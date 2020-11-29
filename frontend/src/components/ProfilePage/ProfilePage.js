import React from "react";
import "./ProfilePage.css";
// import { getSong } from "../../store/charts";

const ProfilePage = (props) => (
  <figure>
    <div className="usertitle">User Details:</div>
    <div className="userdata">
      <div>User ID - {props.username} </div>
      <div>User E-Mail - {props.email}</div>
    </div>
  </figure>
);

export default ProfilePage;
