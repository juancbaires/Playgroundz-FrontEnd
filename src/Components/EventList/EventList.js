import React from 'react';
import './EventList.css';
import { Link } from 'react-router-dom';

const EventList = ({ listOfEvents }) => {
    const list = listOfEvents.map((event, i) => {
        //    let bgImage = {event.locationImg}
        return (
            <li className="event-card" key={i}>
                <img className="card-image" src={event.locationImg} alt=""/>
                {/* <div className="bg-image" style={{ "backgroundImage": 'url(' + event.locationImg + ')' }}></div> */}
                <div className="text-wrapper">
                    <p>{event.eventDate}</p>
                    <h3 className="card-h3">{event.sport} @ {event.locationName}</h3>
                    <p>{event.street}</p>
                    <p>{event.city}, {event.state} {event.zip}</p>
                    <div className="event-button-wrapper">
                        <Link to={"/event/" + event._id}><button className="event-list-button blue">info</button></Link>
                        <button className="event-list-button red">RSVP</button>
                    </div>
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
