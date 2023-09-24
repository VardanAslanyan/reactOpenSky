import "./style.scss";
import { useState } from "react";

function WH() {
  const [valueWidth, setWidth] = useState("");
  const [valueHeight, setHeight] = useState("");
  const [toggle, setToogle] = useState(Boolean);

  const handleClick = () => {
    setToogle(true)
  };

  const handleChageWidth = (e) => {
    setToogle(false)
    setWidth(`${e.target.value}px`)
    };

  const handleChageHeight = (e) => {
    setToogle(false)
    setHeight(`${e.target.value}px`)
    };

  return (
    <div className="w-h">
      <label>
        width
        <input onChange={handleChageWidth} type="text" placeholder="width" />
      </label>
      <label>
        height
        <input onChange={handleChageHeight} type="text" placeholder="height" />
      </label>
      <button onClick={handleClick}>Submit</button>
      {toggle ? (
        <div
          className="create-div"
          style={{
            width: valueWidth,
            height: valueHeight,
            backgroundColor: "black",
            display: "block",
          }}
        ></div>
      ) : null}
    </div>
  );
}

export default WH;
