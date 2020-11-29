import "./ProfilePage.css";

const ProfilePage = (props) => {
  return (
    <>
      <div className="usertitle">Welcome To Your Profile!</div>
      <div className="userdata">
        {/* <div>{props.user.username}</div> */}
        {/* <div>{props.user.email}</div> */}
        <div>
          <button onClick={props.logout}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
