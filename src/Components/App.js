import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="appBackground">
        <header>
          <Header />
        </header>
        <main>
          <Switch>

            
            {/* Home Page to Sign In */}
            <Route
              path="/"
              render={props => {
                return <Home {...props} />;
              }}
            />

            {/* routing */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
