import React from "react";
import "./style.css";

class Slider extends React.Component {
  render() {
    return (
      <div className="slide">
        <img className="main-image"
          src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    );
  }
}

export default Slider;
