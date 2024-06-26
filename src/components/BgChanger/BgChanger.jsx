import React, { useState } from "react";
import "./BgChanger.css";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("pink");
  return (
    <div className="wrapper" style={{ backgroundColor: bgColor }}>
      <h1 className={`app ${bgColor === "white" ? "black-text" : ""}`}>
        Background Color Changer
      </h1>
      <h2 className={`${bgColor === "white" ? "black-text" : ""}`}>
        {" "}
        Color is changed to {bgColor}
      </h2>
      <div className="footer">
        <div className="buttons">
          <button
            onClick={() => setBgColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("olive")}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setBgColor("black")}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setBgColor("white")}
            style={{ backgroundColor: "white", color: "black" }}
          >
            White
          </button>
          <button
            onClick={() => setBgColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
