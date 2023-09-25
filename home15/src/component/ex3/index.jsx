import { useState } from "react";
import "./style.scss";
import randomColor from "randomcolor";

function Ex3() {
  const [boxWidth, setBoxWidth] = useState(50);
  const [boxH, setBoxH] = useState(50);
  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
    if ((boxWidth && boxH <= 150) && toggle) {
        setBoxWidth(boxWidth + 25);
        setBoxH(boxH + 25);
    } else {
        setToggle(false)
        setBoxWidth(boxWidth - 25);
        setBoxH(boxH - 25);
        if(boxWidth && boxH <= 50) {
            setToggle(true)
        }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="ex-3"
      style={{ width: boxWidth, height: boxH, backgroundColor: randomColor() }}
    ></div>
  );
}

export default Ex3;
