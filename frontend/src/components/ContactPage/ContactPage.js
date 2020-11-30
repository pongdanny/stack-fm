import React from "react";
import { useSelector } from "react-redux";
import "./ContactPage.css";

const ContactPage = (props) => {
  return (
    <div>
      <div className="contactstory">thanks for visiting :)</div>
      <div className="contactemail">
        visit me at <button className="gitbtn">github.io/pongdanny</button> !
      </div>
    </div>
  );
};

export default ContactPage;
