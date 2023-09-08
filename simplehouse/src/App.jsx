import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import UnderNavbar from "./components/underNuv";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import { routerNames } from "./router/router";

class App extends React.Component {
  state = {
    home: {
      h3Data: "Welcome to Simple House",
      pData:
        "Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.",
    },
    about: {
      h3Data: "About Simple House",
      pData:
        "This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.",
    },
    contact: {
      h3Data: "Contact Page",
      pData:
        "You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.",
    },
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path={routerNames.HOME} >
            <UnderNavbar
              h3Data={this.state.home.h3Data}
              pData={this.state.home.pData}
            />
            <Home />
          </Route>
          <Route exact path={routerNames.ABOUT} >
            <UnderNavbar
              h3Data={this.state.about.h3Data}
              pData={this.state.about.pData}
            />
            <Home />
          </Route>
          <Route exact path={routerNames.CONTACT} >
            <UnderNavbar
              h3Data={this.state.contact.h3Data}
              pData={this.state.contact.pData}
            />
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
