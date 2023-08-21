import "./App.scss";
import React from "react";
import Register from "./component/input";
import './assets/icons/style.css'

class App extends React.Component {
  render() {
    return <div className="form">
    <Register />
    </div>
  }
}

export default App;
