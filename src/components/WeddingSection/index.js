import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import IconIg from './assets/fb.png';
import { styWrapper, styButtonWrapper } from './styles';

function WeddingSection({ isAnonymGuest }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-2">
          <WeddingInfoBox title="Reception" time="06:30 PM - 09:00 PM" date="Sunday, 23 August 2020" description="Groom House" />
		  <WeddingInfoBox title="Wedding" time="06:00 AM - 07:30 AM" date="Monday, 24 August 2020" description="Groom House" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text__live">We are going live in facebook</p>
            <a href="https://www.facebook.com/karthi.sikp" target="_blank" rel="noreferrer">
              <div css={styButtonWrapper}>
                <div className="img__wrapper">
                  <img src={IconIg} alt="Live FB" />
                  <span>@karthi</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Wedding Ceremony</h2>
            </div>
          </div>
          <div className="row">
            {isAnonymGuest && renderGuestInfo()}
            {!isAnonymGuest && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Reception"
                  time="06:30 - 08:00 PM"
                  date="Sunday, 23 August 2020"
                  description="Groom House"
                  mobileDescription="Groom House"
                />
                <WeddingInfoBox
                  title="Wedding Ceremony"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isAnonymGuest: bool.isRequired,
};

export default React.memo(WeddingSection);
