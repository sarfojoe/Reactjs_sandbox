import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Landingpage from "./Landingpage/Landingpage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};
export default App;
