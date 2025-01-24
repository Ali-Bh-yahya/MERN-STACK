import React, { useState } from 'react';

const Test = () => {
  const [boxColor, setBoxColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const HandelTheColor = (e) => {
    setBoxColor(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { color: boxColor }]);
    setBoxColor("");
  };

  return (
    <>
      <form onSubmit={Submit}>
        <label>Include the color:</label>
        <input
          type="text"
          value={boxColor} 
          onChange={HandelTheColor}
        />
        <button type="submit">Add Box</button>
      </form>
      <div>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: "40vw",
              height: "40vh",
              margin: "10px",
            }}
          >
            {box.color}
          </div>
        ))}
      </div>
    </>
  );
};

export default Test;
