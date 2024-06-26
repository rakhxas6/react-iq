import React, { useState } from "react";
import "./Ratings.css"

const Ratings = () => {
  const [text, setText] = useState("");
  const [selectedStarCount, setSelectedStarCount] = useState(0);
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0);

  const consoleLog = () => {
    setSelectedStarCount("");
    setText("");
  };

  return (
    <div className="App">
      Star Rating
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          return (
            <span
              key={index}
              className={`${index + 1 <= selectedStarCount ? "selected" : ""} ${
                index + 1 <= selectedHoverStarCount ? "selected" : ""
              }`}
              onMouseOver={() => {
                setSelectedHoverStarCount(index + 1);
              }}
              onMouseOut={() => {
                setSelectedHoverStarCount(0);
              }}
              onClick={() => {
                setSelectedStarCount(index + 1);
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p>Rating Count: {selectedStarCount}</p>
      <p>Hover Rating Count: {selectedHoverStarCount}</p>
      <textarea
        style={{
          marginTop: "20px",
        }}
        rows={7}
        cols={42}
        placeholder="write about the product..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={consoleLog}>
        Submit
      </button>
    </div>
  );
};

export default Ratings;
