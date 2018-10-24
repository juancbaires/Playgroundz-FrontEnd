import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="MuiToolbar-root-47 MuiToolbar-regular-49 MuiToolbar-gutters-48 MuiButton-contained-ezy MuiAppBar-colorPrimary-18">
          <button
            class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52 PrimarySearchAppBar-menuButton-3"
            tabindex="0"
            type="button"
            aria-label="Open drawer"
          >
            <span class="MuiIconButton-label-56">
              <svg
                class="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </span>
            <span class="MuiTouchRipple-root-130" />
          </button>
          <h6 class="MuiTypography-root-69 MuiTypography-h6-86 MuiTypography-colorInherit-98 MuiTypography-noWrap-95 PrimarySearchAppBar-title-4">
            Playgroundz
          </h6>
          <div class="PrimarySearchAppBar-search-5">
            <div class="PrimarySearchAppBar-searchIcon-6">
              <svg
                class="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
            </div>
            <div class="MuiInputBase-root-104 PrimarySearchAppBar-inputRoot-7">
              <input
                class="MuiInputBase-input-114 PrimarySearchAppBar-inputInput-8"
                placeholder="Search…"
                type="text"
                value=""
              />
            </div>
          </div>
          <div class="PrimarySearchAppBar-grow-2" />
          <div class="PrimarySearchAppBar-sectionMobile-10">
            <button
              class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              tabindex="0"
              type="button"
              aria-haspopup="true"
            >
              <span class="MuiIconButton-label-56">
                <svg
                  class="MuiSvgIcon-root-60"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
              <span class="MuiTouchRipple-root-130" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
