import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import visual from './components/visual';
class App extends Component {
  
  render() {
    return (
      <div >
        <Clock />
        <visual/>
      </div>
    );
  }
}

export default App;
