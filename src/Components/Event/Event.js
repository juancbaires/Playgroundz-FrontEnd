import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"
class Event extends Component {
  state = {
    _id : ""
  }
  deleteEvent = (e) => {
    axios.delete("http://localhost:4004/delete/"+ this.props.event._id)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
}
  render() {
    console.log(this.props)
    
    return (
    <div>
      <h1>{this.props.event.sport} at {this.props.event.locationName}</h1>
      <img className="card-image" src={this.props.event.locationImg} alt=""/>
      <p>{this.props.event.eventDate}</p>
      <h3 className="card-h3">{this.props.event.sport} @ {this.props.event.locationName}</h3>
        <p>{this.props.event.street}</p>
        <p>{this.props.event.city}, {this.props.event.state} {this.props.event.zip}</p>
      <Link to="/"><button type="submit" onClick={this.deleteEvent}></button></Link>
    </div>
    )
  }
}

Event.defaultProps = {
  event: {
    address: {street: "", city: "", state: "", zip: ""},
    age: 0,
    eventDate: "",
    locationImg: "",
    locationName: "",
    rsvps: [],
    sport: "",
    _id: ""  
  }
}

export default Event;
