import React from 'react';

import IconMask from './assets/face-mask.png';
import IconSocialDistancing from './assets/social-distancing.png';
import IconGuest from './assets/parents.png';
import IconDoctor from './assets/doctor.png';
import IconClock from './assets/clock.png';
import IconQRcode from './assets/qr.png';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Protocol Guide Covid-19</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
              The continuity of this event refers to the health guidelines of the Ministry of Health:
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <div className="col-md-12">
            <SectionBox icon={IconMask} text="Must use a mask and check the temperature." />
            <SectionBox icon={IconSocialDistancing} text="Distance restrictions and restrictions on the number of guests." />
            <SectionBox icon={IconGuest} text="One invitation is only for 2 guests." />
            <SectionBox
              icon={IconDoctor}
              text="Monitored by a team of doctors and hand sanitizers provided at various points. "
            />
            <SectionBox icon={IconQRcode} text="Must bring QRCode to minimize physical contact through the pen. " />
            <SectionBox icon={IconClock} text="Must attend according to the time indicated on the invitation." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
