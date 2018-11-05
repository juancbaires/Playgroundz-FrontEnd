import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { withRouter } from 'react-router-dom'
import './Event.css'
class Event extends Component {
  state = {
    _id: "",
    rsvps: []
  };
  deleteEvent = e => {
    Axios.delete(
      "https://playgroundz-heroku.herokuapp.com/delete/" + this.props.event._id
    )
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err);
      });
  };
  saveSpot = () => {
    Axios.post(
      "https://playgroundz-heroku.herokuapp.com/event/" +
      this.props.event._id +
      "/" +
      this.props.userID.id
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);

    return (
      <div className="show-view">
        <div className="event-show-card">
          <h1>
            {this.props.event.sport} at {this.props.event.locationName}
          </h1>

          <img
            className="card-show-image"
            src={this.props.event.locationImg}
            alt=""
          />
          <div className="text-wrapper">
            <p className="dateStyle">{this.props.event.eventDate}</p>
            <div className="eventTitle">
              <h3 className="card-h3">
                <span className="eventSport">{this.props.event.sport}</span>
                <span className="theConnector"> @ </span>
                <span className="eventSport">{this.props.event.locationName}</span>
              </h3>
              <div className="addressStyle">
                <p>{this.props.event.street}</p>
                <p>
                  {this.props.event.city} {this.props.event.state}{" "}
                  {this.props.event.zip}
                </p>
                <p>Going: {this.props.event.rsvps.length}</p>
              </div>
              <Link to="/">
                <button className="red" type="submit" onClick={this.deleteEvent}>
                  Delete
                </button>
              </Link>
              <Link to="/">
                <button className="blue" type="submit" onClick={this.saveSpot}>
                  RSVP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Event.defaultProps = {
  event: {
    address: { street: "", city: "", state: "", zip: "" },
    age: 0,
    eventDate: "",
    locationImg: "",
    locationName: "",
    rsvps: [],
    sport: "",
    _id: ""
  }
};

export default withRouter(Event);
