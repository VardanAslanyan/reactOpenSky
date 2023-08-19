import React from "react";
import "./style.scss";

class Data extends React.Component {
    render() {
        return (
            <div className="fn">
                <label>{this.props.label}</label>
                <input type="text" placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

class UserData extends React.Component {
    state = {
        userData: [
            {
                label: 'Full Name',
                placeholder: 'Full Name'
            },
            {
                label: 'Phone Number',
                placeholder: 'Enter you phone number'
            },
            {
                label: 'Email Address',
                placeholder: 'Enter your email'
            }
        ],
    };

    render() {
        return (
            <div className={"user-data"}>
                {this.state.userData.map((item, index) => {
                    return (
                        <Data
                            key={index}
                            label={item.label}
                            placeholder={item.placeholder}
                        />
                    );
                })}
            </div>
        );
    }
}

export default UserData;
