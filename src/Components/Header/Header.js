import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  onLogin = () => {
    // login switch for login / logout
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="authContainer">
          <div className="usernameStyle">
            <label> Username: </label> <input type="text" />
          </div>
          <div className="passwordStyle">
            <label> Password: </label> <input type="password" />
          </div>
          <div> 
            <input className="loginButton" type="Submit" value="Submit"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
