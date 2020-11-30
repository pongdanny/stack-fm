import React from "react";
import { useSelector } from "react-redux";
import "./ProfilePage.css";
// import { getSong } from "../../store/charts";

const ProfilePage = (props) => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="page">
        <div className="profile">
          <div className="profile-background"></div>
          <div className="profile-contents">
            <div className="profile-header">
              <svg
                className="profile-header__icon"
                width="10rem"
                height="10rem"
              >
                <div className="profile-icon"></div>
              </svg>

              <h1 className="profile-header__text">
                <div className="email">e-mail: {sessionUser.email}</div>
              </h1>
              <figure>
                <div className="usertitle"></div>
                <div className="userdata">
                  <div>hey {sessionUser.username}! </div>
                </div>
              </figure>
            </div>
            <div className="profile-info">
              <div className="profile-info-data">
                <div className="profile-info-data__number">17</div>
                <div className="profile-info-data__name">songs</div>
              </div>
              <div className="profile-info-data">
                <div className="profile-info-data__number">48</div>
                <div className="profile-info-data__name">friends</div>
              </div>
              <div className="profile-info-data">
                <div className="profile-info-data__number">22</div>
                <div className="profile-info-data__name">saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
