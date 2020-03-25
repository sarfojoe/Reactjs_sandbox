import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: 'Joe', age: 39},
      { name: 'Sarfo', age: 28},
      { name: 'Myra', age: 40},
      { name: 'Frema', age: 43},
      { name: 'Nana', age: 15},
    ]
  };

  render () {
    return (
      <div>
        <h1>Hello, World</h1>
        <p>Hello world</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />

    </div>
    );
  }
}

export default App;
