import React from 'react';
import './EventList.css';

const EventList = ({ listOfEvents }) => {
    const list = listOfEvents.map(event => {
        console.log(event)
        return (
            <li className="list-item-container">
                <img className="card-image" src={event.locationImg} alt=""/>
                <h4>{event.eventDate}</h4>
                <h3>{event.sport}</h3>
                <h4>Location: </h4>
                <p>{event.locationName}</p>
                <p>{event.address.city}, {event.address.state} {event.address.zip}</p>
                <button className="event-list-button">RSVP</button>
            </li>
        )
    })
    return (
      <div>
        <ul className="list-container">
            {list}
        </ul>
      </div>
    )
}

export default EventList;
