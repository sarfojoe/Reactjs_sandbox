import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        {<Route path="/about" component={About} />}
        <Route path="/blog" component={Blog} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
