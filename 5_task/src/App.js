import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;
    do {
      nextActive = getRndInteger (1, 4);
    } while (nextActive === this.state.current)
    this.setState ({
      current: nextActive,
    });
    this.timer = setTimeout (this.next, this.pace);
    console.log('This is active circle',this.state.current);
    
  };
  clickHandler = (circleID) => {
    console.log('I was Clicked', circleID);
    this.setState({
      score: this.state.score + 1,
    });
  };
  startHandler = () =>{
    this.next();
  }
  endHandler = () =>{
    clearTimeout(this.timer);
  }
  render(){
    return (
    <div>
      <h1>Speedtest</h1>
    <p>Your Score: {this.state.score}</p>
      <main>
        <Circle active={this.state.current === 1} buttonColor='yellow' click={this.clickHandler.bind(this, 1)} />
        <Circle active={this.state.current === 2} buttonColor='green' click={this.clickHandler.bind(this, 1)} />
        <Circle active={this.state.current === 3} buttonColor='red' click={this.clickHandler.bind(this, 1)} />
        <Circle active={this.state.current === 4} buttonColor='blue' click={this.clickHandler.bind(this, 1)} />
      </main>
      <div>
      <button onClick={this.startHandler}>Start Test</button>
      <button onClick={this.endHandler}>End Test</button>
      </div>
    </div>
    );
  }
}


export default App;
