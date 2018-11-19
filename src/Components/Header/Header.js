import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="MuiToolbar-root-47 MuiToolbar-regular-49 MuiToolbar-gutters-48 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 MikeLink1">
          <Link to="/" style={{ textDecoration: 'none' }}><h4 className="MuiTypography-root-69 PickupGames-header MuiTypography-h6-86 MuiTypography-colorInherit-98 MuiTypography-noWrap-95 PrimarySearchAppBar-title-4">
            Pickup Games
          </h4></Link>
          <div className="PrimarySearchAppBar-grow-2" />
          <div className="PrimarySearchAppBar-sectionMobile-10">
            <button
              className="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              type="button"
              aria-haspopup="true"
            >
              <span className="MuiIconButton-label-56">
                <svg
                  className="MuiSvgIcon-root-60"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
              <span className="MuiTouchRipple-root-130" />
            </button>
          </div>

          {this.props.isLoggedIn ? (
            <div>
              <Link to="/create-event" >
                <button
                  className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                  tabIndex="0"
                  type="button"
                  aria-haspopup="true"
                >
                  <span className="MuiIconButton-label-154" />
                  <span className="MuiTouchRipple-root-246" />
                  + Event
            </button>
              </Link>
              <Link to="/" >
                <button
                  onClick={this.props.handleLogOut}
                  className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                  tabIndex="0"
                  type="button"
                  aria-haspopup="true"
                >
                  <span className="MuiIconButton-label-154" />
                  <span className="MuiTouchRipple-root-246" />
                  Logout
              </button>
              </Link>
            </div>
          ) : (
              <div>
                <Link to="/signup">
                  <button
                    className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                    tabIndex="0"
                    type="button"
                    aria-haspopup="true"
                  >
                    <span className="MuiIconButton-label-154" />
                    <span className="MuiTouchRipple-root-246" />
                    SignUp
                </button>
                </Link>
                <Link to="/login">
                  <button
                    className="MuiButtonBase-root-155 MuiIconButton-root-149 MuiIconButton-colorInherit-150 MuiButton-contained-ezy MuiAppBar-colorPrimary-18 juan-noborder"
                    tabIndex="0"
                    type="button"
                    aria-haspopup="true"
                  >
                    <span className="MuiIconButton-label-154" />
                    <span className="MuiTouchRipple-root-246" />
                    Login
                </button>
                </Link>
              </div>
            )}
        </div>
      </div>
    )

  }
}

export default Header;
