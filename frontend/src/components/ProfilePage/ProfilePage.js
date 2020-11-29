import "./ProfilePage.css";

const ProfilePage = (props) => {
  return (
    <>
      <div className="usertitle">
        Hey {props.user.username} !<div className="userbody"></div>
      </div>
      <div className="userdata">
        <button onClick={props.openMenu}>
          <i className="fas fa-user-circle" />
        </button>
        {props.showMenu && (
          <ul className="profile-dropdown">
            <li>{props.user.username}</li>
            <li>{props.user.email}</li>
            <li>
              <button onClick={props.logout}>Log Out</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
