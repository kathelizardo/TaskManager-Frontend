import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from "../helpers/routes"

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#603", padding:"20px"}}>
        <Navbar.Brand as={NavLink} to={routes.home}>CK Programming </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to={routes.about}>
                   About Us
                </Nav.Link>
               {/* Admin debe quedar oculto si no se ha iniciado sesión */}
                <NavDropdown title="Admin">
                    <NavDropdown.Item as={NavLink} to={routes.admin.users}> All Users</NavDropdown.Item>
                </NavDropdown>      
            </Nav>
            <Nav>
                <Nav.Link as={NavLink} to={routes.loginP}>Task Manager</Nav.Link>
            </Nav> 
        </Navbar.Collapse>
    </Navbar>
    )
}
