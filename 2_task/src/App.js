import React from 'react';

import './App.css';
import Person from './Person/Person'

const App = () => {
  return (
    <div>
      <h1>Hello, World</h1>
      <p>Hello world</p>
      <Person name="Joe" age="39" />
      <Person name="Sarfo" age="28" />
      <Person name="Myra" age="40" />
      <Person name="Frema" age="43" />
      <Person name="Nana" age="15" />

    </div>
  );
};

export default App;
