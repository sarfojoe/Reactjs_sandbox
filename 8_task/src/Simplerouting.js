import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
};
const Courses = () => {
  return (
    <div>
      <h1>This is Courses page</h1>
    </div>
  );
};

const Simplerouting = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </Router>
  );
};

export default Simplerouting;
