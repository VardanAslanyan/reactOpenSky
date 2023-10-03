import "./style.scss";
import Question from "../question";
import { useState } from "react";

function Questions() {
  const [quest, setQuestions] = useState([]);
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  const handleAddNewQuestion = () => {
    let test = count;
    if (count <= 10) {
      setQuestions((arr) => [...arr, count]);
    }
    if (count === 10) {
      setToggle(true);
    }
    setCount((test += 1));
  };

  const handleRadio = (id) => {
    console.log(id);
  };

  return (
    <div className="questions">
      <button onClick={handleAddNewQuestion} className="add" disabled={toggle}>
        Add new question
      </button>
      <div className="questions-div">
        {quest.map((item, index) => {
          return (
            <Question
              key={index}
              index={item}
              handleRadio={handleRadio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
