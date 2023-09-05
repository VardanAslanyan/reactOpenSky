import React from "react";
import "./style.scss";

class UnderNavbar extends React.Component {
  render() {
    return (
      <div className="under-div">
        <div className="under-nav">
          <h3>{this.props.h3Data}</h3>
          <p>
            {this.props.pData}
          </p>
        </div>
      </div>
    );
  }
}

export default UnderNavbar;
