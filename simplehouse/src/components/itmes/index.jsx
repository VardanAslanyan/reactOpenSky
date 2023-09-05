import "./style.scss";
import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="items">
        <img className="image" src={this.props.picture} alt=""/>
        <h4>{this.props.h4Data}</h4>
        <p>{this.props.pItem}</p>
        <p className="price">{this.props.price}</p>
      </div>
    );
  }
}

export default Item;
