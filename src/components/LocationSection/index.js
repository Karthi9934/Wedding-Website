import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Event Location</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click to see the map on Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Groom House</strong>
                </a>{' '}
                <br />
                7/128 Bhel Annanagar, Seekarajapuram post, Thiruvalam, <br />
                Ranipet 632515
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d788.4135738758104!2d79.2786132263639!3d12.979911945069432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad498dd284704f%3A0x726e15a83282a015!2sBhel%20Anna%20Nagar%2C%20Tamil%20Nadu%20632406!5e1!3m2!1sen!2sin!4v1595781104668!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Priya & Karthi Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
