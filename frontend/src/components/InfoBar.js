import React from "react";

import "./style/InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src="/icons/onlineIcon.png"
        alt="online icon"
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src="icons/closeIcon.png" alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;