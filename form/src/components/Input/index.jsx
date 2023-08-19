import React from "react";
import './style.scss'

class Input extends React.Component {
    render() {
        const {type, placeholder, label, icon, className} = this.props
        return <div className={`G-input ${className ? className : ''}`}>
            <label>
                {label ? <p>{label}</p> : null}
                <input placeholder={placeholder} type={type ? type : 'text'}/>
                {icon ? <i className={`${icon} G-icon-input`}/> : null}
            </label>
        </div>
    }
}


export default Input