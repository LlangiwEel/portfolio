import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="burgerHolder">
        <div id="burger">
          <div className="burgerStripe"/>
          <div className="burgerStripe"/>
          <div className="burgerStripe"/>
        </div>
      </div>
      <header>
        <p className="name">Lee Wignall</p>
        <p className="jobTitle">Front End Web Developer</p>
      </header>
      <div className="navBar">
        {/*<p className="navButton">Who</p>
        <p className="navButton">What</p>
        <p className="navButton">Where</p>*/}
      </div>
      </div>
    );
  }
}

export default App;
