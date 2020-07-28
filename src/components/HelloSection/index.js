import React, { Fragment } from 'react';
import { string } from 'prop-types';

import Bride from '@assets/images/Priya.jpg';
import Groom from '@assets/images/Karthi.jpg';

import { styWrapper } from './styles';

function HelloSection({ guestName }) {
  const finalSubtitle = guestName ? '23 August 2020, Bhel Anna  nagar, Ranipet' : 'August 23rd, 2020 Ranipet';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Hello!</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                We invited you to celebrate our wedding
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Priyadarshini</h3>
                <p className="parent-name parent-name__top">
                  Our Beautiful Bride
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Karthikeyan</h3>
                <p className="parent-name">
                  Our Humble Groom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
	 </Fragment>
      
  );
}

HelloSection.propTypes = {
  guestName: string.isRequired,
};

export default HelloSection;
