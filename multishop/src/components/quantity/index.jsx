import { useState } from "react";
import "./style.scss";
import { useEffect } from "react";

function Quantity({ getValue }) {
  const [count, setCount] = useState(0);

  const handleClick = (toggle) => {
    let productCount = count;
    if (productCount > 0) {
      setCount(toggle ? (productCount += 1) : (productCount -= 1));
    } else {
      setCount(toggle ? (productCount += 1) : 0)
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="quantity">
      <span
        onClick={() => {
          handleClick(false);
        }}
        className="symbol"
      >
        -
      </span>
      <span className="count-to">{count}</span>
      <span
        onClick={() => {
          handleClick(true);
        }}
        className="symbol"
      >
        +
      </span>
    </div>
  );
}

export default Quantity;
