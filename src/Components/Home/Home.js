import React, { Component } from "react";
import EventList from "../EventList/EventList";
import "./Home.css";
import Event from "../Event/Event";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Axios from "axios";

class Home extends Component {
  state = {
    event: []
  };

  componentDidMount() {
    fetch("https://playgroundz-heroku.herokuapp.com/")
      .then(res => res.json())
      .then(event => this.setState({ event }));
  }

  // add a metod to search by sport

  handleChange = (e) => {

  }
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1 className="upcoming-games-header">Upcoming Pickup Games</h1>
            <Route
              exact
              path="/"
              render={() => <EventList listOfEvents={this.state.event} />}
            />
            <Route
              exact
              path="/event/:id"
              render={props => {
                let event = this.state.event.find(event => event._id === props.match.params.id);
                return <Event {...props} userID={this.props.userID} event={event} />;
              }}
            />
          </div>
        ) : (
            <div>
              <LandingPage />
              <h1 className="upcoming-games-header">Upcoming Pickup Games</h1>
              <Route
                exact
                path="/"
                render={() => <EventList listOfEvents={this.state.event} />}
              />
            </div>
          )}
      </div>
    );
  }
}

export default Home;
