import React, { Component } from "react";
import "./LandingPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <Carousel
                        autoPlay
                        interval={3000}
                        infiniteLoop
                        stopOnHover
                        transitionTime={1000}
                        showIndicators={false}
                        showStatus={false}
                    >

                        <div className="transitioncarousel">
                            <img
                                className="SportImage one1"
                                src="https://images.unsplash.com/photo-1530020212948-b057fc5c908c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49e4719b1208fdfabd79cae325a1927a&auto=format&fit=crop&w=1301&q=80"
                                alt="basketball"
                            />
                            <p className="slideTitle"> Fun </p>
                        </div>

                        <div className="transitioncarousel">
                            <img
                                className="SportImage two2"
                                src="https://images.unsplash.com/photo-1520399636535-24741e71b160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc7bd642fc003b23291ac93e6e6700b2&auto=format&fit=crop&w=2550&q=80"
                                alt="team for basketball"
                            />
                            <p className="slideTitle"> Fitness </p>
                        </div>

                        <div className="transitioncarousel">
                            <img
                                className="SportImage three3"
                                src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e22328b14dd34f5604bbe83040010797&auto=format&fit=crop&w=2550&q=80"
                                alt="running in the mountains"
                            />
                            <p className="slideTitle"> Community </p>
                        </div>

                        <div className="transitioncarousel">
                            <img
                                className="SportImage four4"
                                src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1002f970f615e046c7c5376c46e13bef&auto=format&fit=crop&w=3306&q=80"
                                alt="running marathon"
                            />
                            <p className="slideTitle"> Honesty </p>
                        </div>

                        <div className="transitioncarousel">
                            <img
                                className="SportImage five5"
                                src="https://images.unsplash.com/photo-1530544381044-e668c0810395?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f2fe0bdb8391244e5a919dbc4d4e479&auto=format&fit=crop&w=3300&q=80"
                                alt="motor bike race"
                            />
                            <p className="slideTitle"> Integrity </p>
                        </div>

                        <div className="transitioncarousel">
                            <img
                                className="SportImage six6"
                                src="https://images.unsplash.com/photo-1513353278921-beaed9feda60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99cd37db40a70904f4aaaf4fc24c5aef&auto=format&fit=crop&w=3300&q=80"
                                alt="little 5 bike race"
                            />
                            <p className="slideTitle"> Humility </p>
                        </div>
                        {/* additional value indication words are passion, respect */}
                    </Carousel>
                </ul>
            </div>
        );
    }
}

export default LandingPage;