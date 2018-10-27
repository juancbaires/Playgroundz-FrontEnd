import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Event.css";

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
        console.log(res);
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
      <div>
        <div class="event-single-card">
          <h1 class="eventTitle">
            {this.props.event.sport} at {this.props.event.locationName}
          </h1>

          <img
            className="card-image"
            src={this.props.event.locationImg}
            alt=""
          />
          <div class="text-wrapper">
            <p class="dateStyle">{this.props.event.eventDate}</p>
            <div class="eventTitle">
              <h3 className="card-h3">
                <span class="eventSport">{this.props.event.sport}</span>
                <span class="theConnector"> @ </span>
                <span class="eventSport">{this.props.event.locationName}</span>
              </h3>
              <div class="addressStyle">
                <p>{this.props.event.street}</p>
                <p>
                  {this.props.event.city} {this.props.event.state}{" "}
                  {this.props.event.zip}
                </p>
              </div>
              <div>
                <p>Going: {this.props.event.rsvps.length}</p>
                <div className="buttonContainer">
                  <Link to="/">
                    <button
                      class="red"
                      type="submit"
                      onClick={this.deleteEvent}
                    >
                      Delete
                    </button>
                  </Link>
                  <Link to="/">
                    <button class="blue" type="submit" onClick={this.saveSpot}>
                      RSVP
                    </button>
                  </Link>
                </div>
              </div>
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

export default Event;
