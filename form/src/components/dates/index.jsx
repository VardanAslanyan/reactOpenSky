import React from "react";
import "./style.scss";



class Date extends React.Component {
  render() {
    return (
      <div className="date" style={{ marginLeft: this.props.margin }}>
        <label>{this.props.label}</label>
        <input type="text" placeholder={this.props.placeholder} /><i className={`${this.props.icon} my-icons`} />
      </div>
    );
  }
}

class DateInput extends React.Component {
  state = {
    userData: [
      {
        label: "Date",
        placeholder: "   mm/dd/yy",
        margin: "0px",
        icon: "icon-calendar"
      },
      {
        label: "Time",
        placeholder: "   --:-- --",
        margin: "20px",
        icon: "icon-schedule"
      },
    ],
  };

  render() {
    return (
      <div className={"data-list"}>
        {this.state.userData.map((item, index) => {
          return (
            <Date
              key={index}
              label={item.label}
              placeholder={item.placeholder}
              margin={item.margin}
              icon={item.icon}
            />
          );
        })}
      </div>
    );
  }
}

export default DateInput;
