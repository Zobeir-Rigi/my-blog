import "./TopBar.css"
import React from 'react'

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-pinterest"></i>
        <i class="fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">c</div>
      <div className="topRight">r</div>
    </div>
  );
}

export default TopBar