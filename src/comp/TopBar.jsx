import { Link } from "react-router-dom";
import "../styles/TopBar.css";
import React from "react";

const TopBar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcone fa-brands fa-square-facebook"></i>
        <i className="topIcone fa-brands fa-square-twitter"></i>
        <i className="topIcone fa-brands fa-square-pinterest"></i>
        <i className="topIcone fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/" > Home</Link></li>
          <li className="topListItem"><Link className="link" to="/" > About</Link></li>
          <li className="topListItem"><Link className="link" to="/" > Contact</Link></li>
          <li className="topListItem"><Link className="link" to="/" > Write</Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          alt="profileImg"
          src="https://live.staticflickr.com/65535/52399136398_35c64ec6ba_h.jpg"
        />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>{" "}
      </div>
    </div>
  );
};

export default TopBar;
