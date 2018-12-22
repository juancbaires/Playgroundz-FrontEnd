import React, { Component } from "react";
import EventList from "../EventList/EventList";
import "./Home.css";
import Event from "../Event/Event";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
const env = 'http://localhost:4004/'
// const env = "https://playgroundz-heroku.herokuapp.com"

class Home extends Component {
  state = {
    event: []
  };

  componentDidMount() {
    fetch(`${env}`)
      .then(res => res.json())
      .then(event => this.setState({ event }));
  }

  // !!TODO!! add a metod to search by sport
  handleChange = (e) => {
    if (e.target.value === '') {
      fetch(`${env}`)
        .then(res => res.json())
        .then(event => this.setState({ event }));
    } else {
      this.setState({
        event: this.state.event.filter(event => {
          if (event.sport.indexOf(e.target.value) !== -1)
            return event
        })
      })
    }
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <h1 className="upcoming-games-header">Upcoming Pickup Games</h1>
            <div className="mainSearch">
              <div className="PrimarySearchAppBar-searchIcon">
                <svg
                  className="MuiSvgIcon-root-60"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </div>
              {/* // Search Bar */}
              <div>
                <input
                  onChange={this.handleChange} className="MuiInputBase-input-114 PrimarySearchAppBar-inputInput-8"
                  placeholder="Search by Sport…"
                  type="text"
                />
              </div>
            </div>
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
