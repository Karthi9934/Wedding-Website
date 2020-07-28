import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isAnonymGuest }) {
  return (

      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block"><b> Precautions to stop the spread of #COVID-19!!! </b></small>
				<small className="block">
					<li> Wear a mask </li>
					<li> Disinfect your hands upon entry </li>
					<li> Maintain social Distancing </li>
				</small>
              </p>
            </div>
          </div>
        </div>
      </footer>

  );
}

FooterSection.propTypes = {
  isAnonymGuest: bool.isRequired,
};

export default React.memo(FooterSection);
