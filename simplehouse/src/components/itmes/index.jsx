import "./style.scss";
import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className={this.props.classNameID}>
        <img className="image" src={this.props.picture} alt=""/>
        <div className="data">
        <h4>{this.props.h4Data}</h4>
        {this.props.title? <p className="title">{this.props.title}</p>: null}
        <p>{this.props.pItem}</p>
        {this.props.price? <p className="price">{this.props.price}</p>: null}
        </div>
      </div>
    );
  }
}

export default Item;
