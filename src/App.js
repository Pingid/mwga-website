import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import About from './About.js';
import './App.css';
import './transport-font/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: '#3CB76F'}}>
        <Header />
        <div className="p3">
          <a className="caps text-decoration-none center p2" style={{ width: '100%', background: 'white' }} href="http://eepurl.com/cVc6cj">Get notified</a>
          <p className="caps" style={{ color: 'white', fontSize: '11.8px' }}>when the game is released</p>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
