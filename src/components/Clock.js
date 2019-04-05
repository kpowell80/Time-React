import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: ""
    }
  }
  
  componentDidMount = () => {
    this.updateTime();
    this.interval = setInterval(() => {this.updateTime()}, 1000);
  }
  
  stop = () => {
    clearInterval(this.interval);
  }
  
  updateTime = () => {
    let t = new Date().toLocaleTimeString();
    this.setState({time: t});
  }
  
  render() {
    return (
      <div>
        <br></br>
        <h2>The current time is: {this.state.time}</h2><br/>
        <p className="text-center"><button className="btn btn-danger" onClick={this.componentDidMount}>Start</button></p>
        <p className="text-center"><button className="btn btn-dark" onClick={this.stop}>Stop</button></p>
     
      </div>
    );
  }
}

export default Clock;