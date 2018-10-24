import React, { Component } from 'react';

class Home extends Component {

    state = {
        event: []
      }
    
      componentDidMount() {
        fetch('https://playgroundz-heroku.herokuapp.com/')
            .then(res => console.log(res.json()))
            .then(event => this.setState({ event }))
      }


    
    // const events = props.event;
    // const listEvents = events.map(evt => {

        render() {
        return(
            <div>
                <h1>Home</h1>
                {/* <ul>
                <li key={evt.id}>{evt.sport}{" "}{evt.locationName}</li>
                    <li key={evt.id}>{" "}{evt.address.street}{evt.address.city}{evt.address.state}{evt.address.zip}</li>
                    <li key={evt.id}>{" "}{evt.eventDate}</li>
                    <img src={evt.locationImg} alt=""></img>
                    <li key={evt.id}>{evt.age}</li>
                    {/* <li key={evt.id}>{evt.sport}{" "}{evt.locationName}</li>
                    <li key={evt.id}>{" "}{evt.address.street}{evt.address.city}{evt.address.state}{evt.address.zip}</li>
                    <li key={evt.id}>{" "}{evt.eventDate}</li>
                    <img src={evt.locationImg} alt=""></img>
                    <li key={evt.id}>{evt.age}</li> */}
                {/* </ul> */}
            </div>
        )
    }
}

export default Home;