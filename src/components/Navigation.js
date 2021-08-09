import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from "../helpers/routes"

export default function Navigation() {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="navbar-custom"
            variant="light"
            style={{ padding: "20px", fontSize: "20px" }}
        >
            <Navbar.Brand as={NavLink} to={routes.home} style={{ color: "#603", fontSize: "20px" }}>CK Programming </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={routes.about} style={{ color: "#603" }}>
                        About Us
                    </Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Admin" style={{ color: "#603" }}>
                        <NavDropdown.Item as={NavLink} to={routes.admin.users} style={{ color: "#603" }}>
                            All Users
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link as={NavLink} to={routes.loginP}>Task Manager</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
