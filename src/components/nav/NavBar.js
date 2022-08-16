import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GoToResult from "./GoToResult";
import Table from "./Table";
import Home from "./Home";
import Colombia from "./Colombia";
import EstadosUnidos from "./EstadosUnidos";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Home />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <GoToResult />
            <Table />
            <Colombia />
            <EstadosUnidos />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
