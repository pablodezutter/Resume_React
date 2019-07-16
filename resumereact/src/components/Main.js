import React from "react";
import "../css/style.css";
import fotoPablo from "../Pictures/fotoPablo.jpg";

function Main() {
  return (
    <div className="mainContent">
      <h1>Hello!</h1>

      <div className="leftSide">
        This is a React app.
        <img src={fotoPablo} alt="fotoofjuniordeveloper" />
      </div>
      <div className="rightSide">
        {" "}
        <p>Skills:</p>
        <ol>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Css</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ol>
        <p>Points of interest: nature, photography,wooddesign, gardens </p>
      </div>
    </div>
  );
}

export default Main;
