import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Event from "./Event/Event";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Switch, Route } from "react-router-dom";

class App extends Component {

 

  render() {
    console.log(this.state)
    return (
      <div className="appBackground">
        <Header />
        <main>
          <Switch>
            <Route path="/event" render={() => <Event event={this.state.event} />}/>
            {/* Sign-up Page */}
            <Route path="/signup" render={() => <Signup data={this.state} />}/>
            {/* Login Page */}
            <Route path="/login" render={() => <Login data={this.state} />}/>
            {/* Home Page / main landingpage */}
            <Route path="/" render={() => <Home event={this.state.event} />}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
