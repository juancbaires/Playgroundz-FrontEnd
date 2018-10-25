import React from 'react';
import './EventList.css';

const EventList = ({ listOfEvents }) => {
    const list = listOfEvents.map((event, i) => {
        console.log(event)
        return (
            <li className="event-card" key={i}>
                <img className="card-image" src={event.locationImg} alt=""/>
                <p>{event.eventDate}</p>
                <h2 className="card-h2">{event.sport} @ {event.locationName}</h2>
                <p>{event.address.city}, {event.address.state} {event.address.zip}</p>
                <div className="event-button-wrapper">
                    <button className="event-list-button blue">info</button>
                    <button className="event-list-button red">RSVP</button>
                </div>
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
