import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Nav, Navbar,NavbarBrand,NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

function TopNav(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand><Link to="/home" style={{color:"#fff"}}>Todoist App</Link></NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink><Link style={{color:"#fff"}} to="/home">Home</Link></NavLink>
                        <NavLink to="/add"><Link to="/add" style={{color:"#fff"}}>Add Todo</Link></NavLink>
                    </Nav>
                    <Nav>
                        <NavLink href="#">More Details</NavLink>
                    </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default TopNav