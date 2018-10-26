import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import './Home.css';
import Event from '../Event/Event';
import { Route } from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage"

class Home extends Component {

    state = {
        event: []
    }

    componentDidMount() {
        fetch('http://localhost:4004/')
            .then(res => (res.json()))
            .then(event => this.setState({ event }))
    }

    // const events = props.event;
    // const listEvents = events.map(evt => {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return (
            <div>
                {isLoggedIn ? (
                    <div>
                        <h1 className="upcoming-games-header">Upcoming Pickup Games</h1>
                        <Route exact path="/" render={() => <EventList listOfEvents={this.state.event} />} />
                        <Route exact path="/event/:id" render={() => <Event event={this.state.event} />} />
                    </div>
                ) : (
                        <div>
                            <LandingPage />
                            <h1 className="upcoming-games-header">Upcoming Pickup Games</h1>
                            <Route exact path="/" render={() => <EventList listOfEvents={this.state.event} />} />
                            <Route exact path="/event/:id" render={() => <Event event={this.state.event} />} />
                        </div>
                    )}
            </div>

        )
    }
}

export default Home;