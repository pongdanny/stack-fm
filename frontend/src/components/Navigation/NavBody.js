import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSongs } from "../../store/charts";
import "./Navigation.css";
const NavBody = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  return (
    <div className="bodynav">
      <h1 className="welcome">
        <span>STACK</span> FM 📚📻
      </h1>
      <p className="whatsnext">
        Explore Top Tracks For <span>You</span> 🎧
      </p>
      <button className="explore" type="button">
        Let's Go!
      </button>
    </div>
  );
};

export default NavBody;
