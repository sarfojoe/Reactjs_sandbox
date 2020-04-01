import React, {Component} from 'react';
import './App.css';
import Form from "./Form/Form";
import view from "./view/view";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <Form />
      </div>
     
    );
  }
}

export default App;
