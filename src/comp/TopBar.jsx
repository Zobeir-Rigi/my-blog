import "./TopBar.css";
import React from "react";

const TopBar = () => {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg" alt="profileImg"
          src="https://live.staticflickr.com/65535/52399136398_35c64ec6ba_h.jpg"
        />
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>{" "}
      </div>
    </div>
  );
};

export default TopBar;
