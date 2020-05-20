import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css"
 
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
       <img id="brand-image" alt="Website logo" src="joelogo.jpg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
          <Link className="d-inline p-2 text-white" to="/">
            Home
          </Link>
          <Link className="d-inline p-2 text-white" to="/about">
            About Me
          </Link>
          <Link className="d-inline p-2 text-white" to="/Blog">
            Blog
          </Link>
          <Link className="d-inline p-2 text-white" to="/NewPost">
            Suggestion
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            mr-sm-2
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
