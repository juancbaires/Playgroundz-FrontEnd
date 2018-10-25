import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import './Home.css';
import Event from '../Event/Event';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class Home extends Component {

    state = {
        event: []
    }

    componentDidMount() {
        fetch('https://playgroundz-heroku.herokuapp.com')
            .then(res => (res.json()))
            .then(event => this.setState({ event }))
    }

    // const events = props.event;
    // const listEvents = events.map(evt => {

    render() {
        return (
            <div>
                <h1 className="upcoming-games-header">Upcoming Pickup Games</h1>
                <Switch>
                    <Route exact path="/" render={() => <EventList listOfEvents={this.state.event}/>}/>
                    <Route exact path="/event/:id" render={() => <Event event={this.state.event}/>}/>
                </Switch> 
            </div>
        )
    }
}

export default Home;