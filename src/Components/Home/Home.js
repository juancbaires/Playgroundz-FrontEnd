import React, { Component } from 'react';

class Home extends Component {
    state = {
        event: []
    }
    componentDidMount() {
        fetch('https://playgroundz-heroku.herokuapp.com/')
            .then(res => res.json())
            .then(event => this.setState({ event }))
    }


    render() {
        return (
            <div>
                <h1>Events</h1>
                {this.state.event.map(evt => {
                    return (
                        <ul>
                            <li key={evt.id}>{evt.sport}{" "}{evt.locationName}</li>
                            <li key={evt.id}>{" "}{evt.address.street}{evt.address.city}{evt.address.state}{evt.address.zip}</li>
                            <li key={evt.id}>{" "}{evt.eventDate}</li>
                            <img src={evt.locationImg} alt=""></img>
                            <li key={evt.id}>{evt.age}</li>
                            <li key={evt.id}>{evt.rsvps.find(element => {
                                return (
                                    <span>{element}</span>
                                )
                            })}</li>

                        </ul>
                    )
                })}

            </div>
        );
    }
}
export default Home;