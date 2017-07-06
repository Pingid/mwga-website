import React from 'react';

const Header = () => (
  <div style={{ background: '#3CB76F', fontFamily: 'Transport' }}>
    <div className="p3 flex flex-wrap items-center justify-center">
      <div className="my3">
        <p className="caps m0" style={{ fontSize: '50px', color: 'white'}}>Make <br/>the <br/>world <br/>great <br/>again</p>
        <p className="caps m0 mt1" style={{ width: '100%', color: 'white', fontSize: '11.8px' }}>The card game</p>
      </div>
    </div>
  </div>
);

export default Header;
