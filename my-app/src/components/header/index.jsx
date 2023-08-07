import React from "react";
import './style.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            <a href="">link 1</a>
          </li>
          <li>
            <a href="">link 2</a>
          </li>
          <li>
            <a href="">link 3</a>
          </li>
          <li>
            <a href="">link 4</a>
          </li>
          <li>
            <a href="">link 5</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
