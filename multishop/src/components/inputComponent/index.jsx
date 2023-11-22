import './style.scss'


function InputComponent({label, type, placeholder, className, value, handleChange, name, errorMessage}) {

    function setChange(e, fieldName) {
        handleChange(e.target.value, fieldName)
    }

    return(
        <label className={className? className: ''}>
            {label? <p>{label}</p>: null}
            <input onChange={(e)=>{setChange(e, name)}} className='input-component-field' type={type? type: 'text'} placeholder={placeholder} value={value}/>
            {errorMessage? <p className='G-error'>{errorMessage}</p>: null }
        </label>
    )
}


export default InputComponent