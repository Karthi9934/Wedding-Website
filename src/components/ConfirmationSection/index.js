import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';
import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isAnonymGuest, guestName }) {
  if (isAnonymGuest) return null;

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{`Hi, ${guestName}?`}</h2>
            <p>
              Thanks for coming.
            </p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <Link to="e-ticket">
              <button className="btn btn-default btn-block">Lihat e-Ticket</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  isAnonymGuest: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
