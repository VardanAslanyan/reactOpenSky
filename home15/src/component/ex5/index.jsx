import { useState } from "react";
import "./style.scss";

function Ex5() {
  const [objtOfNames, setNames] = useState({});
  const [name, setName] = useState("");

  const hadleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name in objtOfNames) {
      objtOfNames[name] = true;
    } else {
      objtOfNames[name] = false;
    }
    setNames({ ...objtOfNames });
  };

  return (
    <div className="ex-5">
      <input onChange={hadleChange} type="text" />
      <button onClick={handleClick}>Submit</button>
      <div className="names">
        <ul>
          {Object.keys(objtOfNames).map((item, i) => {
            return <li key={i} className={objtOfNames[item]? 'red': ''}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Ex5;
