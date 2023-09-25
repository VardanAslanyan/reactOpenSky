import { useState } from 'react';
import './style.scss';

function Ex2() {

    const  [inputValue, setValue] = useState(Number)
    const [listOfDigits, pushValues] = useState([])

    const hadleChange = (e) => {setValue(parseInt(e.target.value))}

    const handleClick = () => {
        pushValues((arr) => [...arr, inputValue])
    }

  return (
    <div className="ex-2">
        <input onChange={hadleChange} type="text" />
        <button onClick={handleClick}>Submit</button>
        <div className="digits">
        <ul>    
        {listOfDigits.map((item, index)=> {
            let even = false
            if(item % 2 === 0) {even = true}
           return <li className={even? 'even': ''}>{item}</li>
        })}
        </ul>
        </div>
    </div>
  );
}

export default Ex2;
