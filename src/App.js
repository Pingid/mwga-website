import React, { Component } from 'react';

import Header from './Header.js';
import About from './About.js';

import './App.css';
import './transport-font/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pt3">
          <a className="caps text-decoration-none center p2 get-notified nowrap" style={{ width: '100%', background: 'white' }} href="http://eepurl.com/cVc6cj">Get notified</a>
          <h4 className="caps mt3">when the game is released</h4>
        </div>
        <About />
        <div className="mb3">

        </div>
      </div>
    );
  }
}

export default App;
