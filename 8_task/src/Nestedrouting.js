/* import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Coouses</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return <h1>This is Home Page</h1>;
};
const About = () => {
  return <h1>This is About Page</h1>;
};
const Courses = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1>This is Courses Page</h1>
      <ul>
        <li>
          <Link to={`${url}/html&css`}>HTML and CSS</Link>
        </li>
        <li>
          <Link to={`${url}/UIprototyping`}>UI Prototying</Link>
        </li>
        <li>
          <Link to={`${url}/react_basics`}>React Basics</Link>
        </li>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/about`} component={About} />
        <Route path={`${path}/CourseId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};
const Topic = () => {
  let { CourseId } = useParams();
  return <h1>This is page for {CourseId}</h1>;
};

const Nestedrouting = () => {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
      </main>
    </Router>
  );
};

export default Nestedrouting;
 */
