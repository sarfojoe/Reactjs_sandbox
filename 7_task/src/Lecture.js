/* import React, { Component } from "react";

class lecture extends Component {
  state = { counter: 0 };
  addHandler = () => this.setState({ counter: this.state.counter + 1 });
  removeHandler = () => this.setState({ counter: this.state.counter - 1 });
  resetHandler = () => this.setState({ counter: 0 });
  render() {
    return (
      <div>
        <h1>This is my vote: {this.state.counter}</h1>
        <button>Add one</button>
        <button>Remove one</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default lecture; */

/* import React, { useState } from "react";

const Button = ({ click, text, children }) => {
  return (
    <>
      <button onClick={click}>
        {text} {children}
      </button>
    </>
  );
};

const Lecture = () => {
  const [counter, setCounter] = useState(0);

  const addHandler = () => setCounter(counter + 1);
  const removeHandler = () => setCounter(counter - 1);
  const resetHandler = () => setCounter(0);

  return (
    <div>
      <h1>This is my vote: {counter}</h1>
      <Button click={addHandler} text="Add one" />
      <Button click={removeHandler} text="Remove one" />
      <Button click={resetHandler} text="Reset" />
    </div>
  );
};

export default Lecture;
 */
