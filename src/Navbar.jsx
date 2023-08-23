import Container from 'react-bootstrap/Container';
import React,{useState,useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Form, FormControl, Button } from 'react-bootstrap';
function BasicExample() {
 
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
        <Navbar.Brand href="/home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

        <Navbar.Collapse id="nabarScroll">
          <Nav
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: '100px' }}
            navbarScroll></Nav>

          <Form className="d-flex"  autoComplete="off">
            <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
             ></FormControl>
            <Button variant="secondary" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;