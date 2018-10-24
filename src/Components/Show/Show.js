import React, { Component } from "react";

class Show extends Component {
  render() {
    return (
      <div>
        <div class="MuiPaper-root-8 MuiPaper-elevation1-11 MuiPaper-rounded-9 MuiCard-root-7 RecipeReviewCard-card-1">
          <div class="MuiCardHeader-root-35">
            <div class="MuiCardHeader-avatar-36">
              <div
                class="MuiAvatar-root-41 MuiAvatar-colorDefault-42 RecipeReviewCard-avatar-6"
                aria-label="Recipe"
              >
                R
              </div>
            </div>
            <div class="MuiCardHeader-content-38">
              <span class="MuiTypography-root-44 MuiTypography-body2-52 MuiCardHeader-title-39">
                Shrimp and Chorizo Paella
              </span>
              <span class="MuiTypography-root-44 MuiTypography-body2-52 MuiTypography-colorTextSecondary-77 MuiCardHeader-subheader-40">
                September 14, 2016
              </span>
            </div>
            <div class="MuiCardHeader-action-37">
              <button
                class="MuiButtonBase-root-85 MuiIconButton-root-79"
                tabindex="0"
                type="button"
              >
                <span class="MuiIconButton-label-84">
                  <svg
                    class="MuiSvgIcon-root-88"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </span>
                <span class="MuiTouchRipple-root-106" />
              </button>
            </div>
          </div>
          <div
            class="MuiCardMedia-root-97 RecipeReviewCard-media-2"
            title="Contemplative Reptile"
          />
          <div class="MuiCardContent-root-99">
            <p class="MuiTypography-root-44 MuiTypography-body1-53">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </p>
          </div>
          <div class="MuiCardActions-root-100 RecipeReviewCard-actions-3">
            <button
              class="MuiButtonBase-root-85 MuiIconButton-root-79"
              tabindex="0"
              type="button"
              aria-label="Add to favorites"
            >
              <span class="MuiIconButton-label-84">
                <svg
                  class="MuiSvgIcon-root-88"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
              <span class="MuiTouchRipple-root-106" />
            </button>
            <button
              class="MuiButtonBase-root-85 MuiIconButton-root-79"
              tabindex="0"
              type="button"
              aria-label="Share"
            >
              <span class="MuiIconButton-label-84">
                <svg
                  class="MuiSvgIcon-root-88"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                </svg>
              </span>
              <span class="MuiTouchRipple-root-106" />
            </button>
            <button
              class="MuiButtonBase-root-85 MuiIconButton-root-79 RecipeReviewCard-expand-4"
              tabindex="0"
              type="button"
              aria-expanded="false"
              aria-label="Show more"
            >
              <span class="MuiIconButton-label-84">
                <svg
                  class="MuiSvgIcon-root-88"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </span>
              <span class="MuiTouchRipple-root-106" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
