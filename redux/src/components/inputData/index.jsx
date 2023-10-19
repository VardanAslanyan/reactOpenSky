import './style.scss';

function InputData({label, type, handleChange, classNameID}) {
  return (
    <div className="input-data">
        <label>{label}
            <input onChange={(e)=>handleChange(e.target.value, label)} type={type} className={classNameID}/>
        </label>

    </div>
  );
}

export default InputData;