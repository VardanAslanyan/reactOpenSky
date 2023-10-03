import "./style.scss";

function Question({index, handleRadio}) {

    const handleClick = (e) => {
        if(e.target.value){
            handleRadio(e.target.id)
        }
    }

  return (
    <div className="question">
      <label>
        Question {index}
        <textarea className="variant" />
      </label>
      <div className="variants">
          <label htmlFor="">
            Variant 1
            <input onClick={handleClick} type="radio" id={`${index} - 1`} name={`answer${index}`} />
            <textarea className="variant" />
          </label>
          <label htmlFor="">
            Variant 2
            <input onClick={handleClick} type="radio" id={`${index} - 2`} name={`answer${index}`}/>
            <textarea className="variant" />
          </label>
          <label htmlFor="">
            Variant 3
            <input onClick={handleClick} type="radio" id={`${index} - 3`} name={`answer${index}`}/>
            <textarea className="variant" />
          </label>
          <label htmlFor="">
            Variant 4
            <input onClick={handleClick} type="radio" id={`${index} - 4`} name={`answer${index}`}/>
            <textarea className="variant" />
          </label>
      </div>
    </div>
  );
}

export default Question;
