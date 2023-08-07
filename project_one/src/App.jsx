import React from "react";
import "./App.css";
import Free from "./components/free";
import Content from "./components/content";
import Secondery from "./components/secondary";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div id="doc3" className="yui-t7">
        <Free />
        <div id="bd">
          <Content />
          <Secondery />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
