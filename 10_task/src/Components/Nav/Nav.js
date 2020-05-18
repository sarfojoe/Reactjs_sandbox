import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Joseph Boadi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="d-inline p-2 bg-dark text-white" to="/">
            Home
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/about">
            About Me
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/Blog">
            Blog
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/NewPost">
            New Post
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
