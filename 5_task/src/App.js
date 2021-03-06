import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle/Circle";
import Gameover from "./Gameover/Gameover";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log("This is active circle", this.state.current);
  };
  clickHandler = (circleID) => {
    //let audio = new Audio("/cat.mp3");
    console.log("I was Clicked", circleID);
    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }
    //audio.play();

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };
  startHandler = () => {
    this.next();
  };
  endHandler = () => {
    clearTimeout(this.timer);

    this.setState({
      showGameOver: true,
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>SpeedGame</h1>
          <p>Your Score: {this.state.score}</p>
        </header>
        <main>
          <Circle
            active={this.state.current === 1}
            buttonColor="yellow"
            click={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            buttonColor="lightgreen"
            click={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            buttonColor="orange"
            click={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            buttonColor="lightblue"
            click={this.clickHandler.bind(this, 4)}
          />
        </main>
        <div>
          <button onClick={this.startHandler}>Start Test</button>
          <button onClick={this.endHandler}>End Test</button>
        </div>
        {this.state.showGameOver && <Gameover score={this.state.score} />}
      </div>
    );
  }
}

export default App;
