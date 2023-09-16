import "./style.scss";
import React from "react";

class ReadMore extends React.Component {
  render() {
    return (
      <div className="read-more">
        <i className={this.props.icon}/>
        <p>{this.props.pData}</p>
        <input type="submit" style={{backgroundColor: this.props.backgroundColor}} value="Read More"/>
      </div>
    );
  }
}

export default ReadMore;
