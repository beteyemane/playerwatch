import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class NavbarComponent extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Browse Movies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavbarComponent
