import React, { Component } from "react";
import { Link } from "react-router-dom"
class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSignUp()
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <main class="SignIn-layout-130">
          <div class="MuiPaper-root-20 MuiPaper-elevation2-24 MuiPaper-rounded-21 SignIn-paper-131">
            <div class="MuiAvatar-root-135 MuiAvatar-colorDefault-136 SignIn-avatar-132">
              <svg
                class="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <g fill="none">
                  <path d="M0 0h24v24H0V0z" />
                  <path d="M0 0h24v24H0V0z" opacity=".87" />
                </g>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </div>
            <h1 class="MuiTypography-root-69 MuiTypography-h5-85">Register</h1>
            <label className="signUpError">{this.props.signUpError}</label>
            <form class="SignIn-form-133">
              <div class="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div class="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  {/* Email */}
                  <input
                    onChange={this.props.handleInput}
                    aria-invalid="false"
                    autoComplete="email"
                    className="MuiInputBase-input-114 MuiInput-input-164"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <div class="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                {/* Password */}
                <div class="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  <input
                    onChange={this.props.handleInput}
                    aria-invalid="false"
                    autocomplete="current-password"
                    class="MuiInputBase-input-114 MuiInput-input-164 MuiInputBase-inputType-117 MuiInput-inputType-167"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    type="password"
                  />
                </div>
              </div>

              {/* submit registeration */}
              <Link to="/"><button
                onClick={this.handleSubmit}
                class="MuiButtonBase-root-57 MuiButton-root-183 MuiButton-contained-194 MuiButton-containedPrimary-195 MuiButton-raised-197 MuiButton-raisedPrimary-198 MuiButton-fullWidth-208 SignIn-submit-134"
                tabIndex="0"
                type="register"
              >
                <span class="MuiButton-label-184">Register</span>
                <span class="MuiTouchRipple-root-209" />
              </button></Link>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Signup;
