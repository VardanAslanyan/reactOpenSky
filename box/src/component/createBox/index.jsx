import "./style.scss";
import Box from "../box";
import randomColor from "randomcolor";
import { useState } from "react";

function CreateBox() {
  const [backgroundColors, setBackgroundColor] = useState([]);

  const handleClick = () => {
    setBackgroundColor((arr) => [...arr, `${randomColor()}`]);
  };

const closeButon = (keyIndex) => {
    setBackgroundColor((current) =>
    current.filter((elem, index) => {
        return index !== keyIndex
    })
    );
  };

  return (
    <div className="main-box">
      <button onClick={handleClick} className="create-box">
        Create Box
      </button>
      <div className="boxes-div">
        {backgroundColors.map((item, index) => {
          return <Box key={index} backgroundColor={item} closeButon={closeButon} index={index} />;
        })}
      </div>
    </div>
  );
}

export default CreateBox;
