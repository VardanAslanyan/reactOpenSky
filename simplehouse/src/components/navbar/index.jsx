import React from "react";
import "./style.scss";
import NavImage from "../../assets/img/simple-house.jpg";
import MainIcon from "../../assets/img/simple-house-logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar"
        style={{
          backgroundImage: `url(${NavImage})`,
        }}
      >
        <div className="navbar-bottom">
          <div className="navbar-left">
            <i
              className="main-icon"
              style={{ backgroundImage: `url(${MainIcon})` }}
            />

            <div className="navbar-left-title">
              <h1>Simple House</h1>
              <p>new restaurant template</p>
            </div>
            <div className="navbar-right">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
