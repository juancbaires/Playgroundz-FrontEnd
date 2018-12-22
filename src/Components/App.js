import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Header/Header";
import CreateEvent from "./CreateEvent/CreateEvent";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import LandingPage from "./LandingPage/LandingPage"
import { Switch, Route } from "react-router-dom";
import axios from "axios"
import Logout from "./Logout/Logout"
import decode from "jwt-decode"

// const env = "https://playgroundz-heroku.herokuapp.com"
const env = "http://localhost:4004"
class App extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
    signUpError: "",
    loginError: "",
    userID: null,
  }
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
        userID: decode(localStorage.token)
      })
    } else {
      this.setState({
        isLoggedIn: false,
        userID: null
      })
    }
  }
  // loggin out function
  handleLogOut = () => {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false,
      userID: null
    })
    localStorage.clear()
  }
  // handle input for form
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // handle signup

  handleSignUp = () => {
    axios.post(`${env}/users/signup`, {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true,
          userID: decode(localStorage.token)
        })
      })
      .catch(err =>
        this.setState({
          signUpError: err.response.data.message
        })
      );
  };

  // handle log in

  handleLogIn = () => {
    axios.post(`${env}/users/login`, {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true
        });
        this.props.history.push('/')
      })

      .catch(err => this.setState({
        loginError: err.response.data.message
      }))
  }
  //   then(response => {
  //     localStorage.token = response.data.token
  //     this.setState({ isLoggedIn: true, loginError: '' });
  //     this.props.history.push('/');
  //   })

  //   .catch(err => this.setState({
  //     loginError: 'Wrong username/password'
  //   }))
  // }

  render() {
    return (
      <div className="appBackground">
        <Header isLoggedIn={this.state.isLoggedIn} handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut} handleSignUp={this.handleSignUp} />
        <main>
          <Switch>
            <Route
              path="/landingpage"
              render={() => (
                <LandingPage
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogOut={this.state.handleLogOut}
                />
              )}
            />
            <Route
              path="/create-event"
              render={() => <CreateEvent event={this.state} />}
            />
            {/* Sign-up Page */}
            <Route path="/signup" render={(props) => <Signup {...props} isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} signUpError={this.state.signUpError} />} />
            {/* Login Page */}
            <Route path="/logout" render={() => <Logout isLoggedIn={this.state.isLoggedIn} handleLogOut={this.state.handleLogOut} />} />
            <Route path="/login" render={(props) => <Login {...props} isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} loginError={this.state.loginError} />} />
            {/* Home Page / main landingpage */}
            <Route path="/" render={() => <Home userID={this.state.userID} isLoggedIn={this.state.isLoggedIn} />} />
          </Switch>
        </main>
      </div>
    );
  }
};
// try this f

export default App;
