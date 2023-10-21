import './style.scss';

function InputData({label, type, handleChange, classNameID, nameID, error}) {
  return (
    <div className="input-data">
        <p className='G-error'>{error}</p>
        <label><div>{label}</div>
            <input onChange={(e)=>handleChange(e.target.value, nameID)} type={type} className={classNameID}/>
        </label>
    </div>
  );
}

export default InputData;