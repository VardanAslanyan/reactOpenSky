import React from "react";
import logo from "../../assets/img/logo.svg";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    );
  }
}

class Header extends React.Component {
  state = {
    list: [
      { name: "HOME", url: "https://google.com" },
      { name: "ABOUT US", url: 'https://google.com'},
      { name: "SREVICES", url: 'https://google.com'},
      { name: "GALLERY", url: 'https://google.com'},
      { name: "CONTACT", url: 'https://google.com'},
    ],
  };
  render() {
    return (
      <header>
        <logo>
          <img className="logo-img" src={logo} alt="logo" />
        </logo>
        <ul>
          {this.state.list.map((item, index) => {
            return <Nav key={index} title={item.name} url={item.url} />;
          })}
        </ul>
      </header>
    );
  }
}

export default Header;
