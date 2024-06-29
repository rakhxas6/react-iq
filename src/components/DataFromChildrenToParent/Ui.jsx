import React, { useState } from "react";
import "./Styles.css";
import CallBack from "./CallBack";

const Ui = () => {
  const [uiColor, setUiColor] = useState(null);

  //Callback function
  const getColor = (color) => {
    setUiColor(color);
  };
  return (
    <div className="App">
      <h2 className="title">Color Changer App - type to Change Color</h2>
      <div
        className="App_color_container"
        style={{ background: `${uiColor}` }}
      ></div>
      <CallBack getColor={getColor} />
    </div>
  );
};

export default Ui;
