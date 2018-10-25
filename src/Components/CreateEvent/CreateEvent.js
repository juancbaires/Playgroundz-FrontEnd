import React, { Component } from "react";
import "./CreateEvent.css";
import SignUp from "./CreateEvent.png";
import Axios from "axios";
// const env = 'https://playgroundz-heroku.herokuapp.com';
const env = "http://localhost:4004"

class CreateEvent extends Component {
  state = {
    sport: '',
    locationName: null,
    address: {
      street: null,
      city: null,
      state: null,
      zip: null
    },
    eventDate: null,
    locationImg: null,
    age: null,
    rsvps: []
  }

  handleSubmit = (e) => {
    Axios.post('http://localhost:4004/new', {
      ...this.state
    })
    e.preventDefault()
    console.log("SUBMISSION SUCCESS")
  }

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <main className="SignIn-layout-130">
          <div className="MuiPaper-root-20 MuiPaper-elevation2-24 MuiPaper-rounded-21 SignIn-paper-131">
            <div className="MuiAvatar-root-135 MuiAvatar-colorDefault-136 SignIn-avatar-132">
              <img
                className="SignUpPng1"
                Signup
                src={SignUp}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
                alt="signup"
              />
              <g fill="none">
                <path d="M0 0h24v24H0V0z" />
                <path d="M0 0h24v24H0V0z" opacity=".87" />
              </g>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </div>
            <h1 className="MuiTypography-root-69 MuiTypography-h5-85">
              Create Local Event
          </h1>
            <label className="loginError" />
            <form onSubmit={this.handleSubmit} className="SignIn-form-133">
              <div className="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div className="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  {/* Event Date */}
                  <input
                    onChange={this.handleInput}
                    aria-invalid="true"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="eventDate"
                    name="date"
                    placeholder="Date"
                    required=""
                    type="date"
                  />
                </div>
              </div>
              <div className="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div className="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  {/* Event Location Image */}
                  <input
                    onChange={this.handleInput}
                    aria-invalid="false"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="locationImg"
                    name="locationImg"
                    placeholder="Location Image URL"
                    required=""
                    type="url"
                  />
                </div>
              </div>
              <div className="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div className="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  {/* Event Location Name */}
                  <input
                    onChange={this.handleInput}
                    aria-invalid="false"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="locationName"
                    name="locationName"
                    placeholder="Location Name"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Event Location Type */}
              <div className="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div className="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  <select
                    onChange={this.handleInput}
                    id="sport"
                    name="sport"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                  >
                    <option >select sport...</option>
                    <option value="Soccer">Soccer</option>
                    <option >Basketball</option>
                    <option value="Football">Football</option>
                    <option value="Running">Running</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Golf">Golf</option>
                  </select>
                  <input
                    onChange={this.handleInput}
                    aria-invalid="false"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="age"
                    name="age"
                    placeholder="Age Group"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* Event Address */}
              <div className="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div className="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  <input
                    onChange={this.handleInput}
                    aria-invalid="false"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="street"
                    name="street"
                    placeholder="Street"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <div className="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div className="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  <input
                    onChange={this.handleInput}
                    aria-invalid="false"
                    autocomplete="city"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="city"
                    name="city"
                    placeholder="City"
                    required=""
                    type="text"
                  />
                  <input
                    onChange={this.handleInput}
                    type="text"
                    aria-invalid="false"
                    autocomplete="state"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="state"
                    name="state"
                    placeholder="State"
                    required=""
                  />
                  <input
                    onChange={this.handleInput}
                    type=""
                    aria-invalid="false"
                    autocomplete="zip"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="zip"
                    name="zip"
                    pattern="[0-9]{5}"
                    placeholder="Zipcode"
                    required=""
                  />
                </div>
              </div>

              {/* Submit Button Big Blue */}
              <button
                className="MuiButtonBase-root-57 MuiButton-root-183 MuiButton-contained-194 MuiButton-containedPrimary-195 MuiButton-raised-197 MuiButton-raisedPrimary-198 MuiButton-fullWidth-208 SignIn-submit-134"
                tabindex="0"
                type="submit"
              >
                <span className="MuiButton-label-184">Create Event</span>
                <span className="MuiTouchRipple-root-209" />
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  };
}

export default CreateEvent;
