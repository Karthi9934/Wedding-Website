import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import IconIg from './assets/instagram.png';
import { styWrapper, styButtonWrapper } from './styles';

function WeddingSection({ isAnonymGuest }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Wedding" time="06:00 - 07:30 AM" date="Monday, 24 August 2020" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text__live">We are going live in facebook</p>
            <a href="https://www.instagram.com/dindadipoyono/" target="_blank" rel="noreferrer">
              <div css={styButtonWrapper}>
                <div className="img__wrapper">
                  <img src={IconIg} alt="Live FB" />
                  <span>@dindadipoyono</span>
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
//              <span className="bismillah"></span>
              <h2 className="main-font main-font__wedding">Wedding Ceremony</h2>
//              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
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
//                  time="Sesuai jadwal undangan di e-ticket "
//                  date="Sabtu, 03 Oktober 2020"
//                  description="HARRIS Hotel Sentraland, Semarang"
//                  mobileDescription="HARRIS Hotel Sentraland, Semarang"
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
