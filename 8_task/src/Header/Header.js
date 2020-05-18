import React from "react";
/* import "./Header.css"; */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    /*  <div class="heading">
      <h1>Joseph Boadi</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div> */

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Joseph Boadi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="d-inline p-2 text-white" to="/">
            Home
          </Link>
          <Link className="d-inline p-2 text-white" to="/about">
            About Me
          </Link>
          <Link className="d-inline p-2 text-white" to="/blog">
            Blog
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
