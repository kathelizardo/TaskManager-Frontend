import React from "react"
import { Navbar, Nav} from 'react-bootstrap'
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
            <Navbar.Brand as={NavLink} to={routes.home} style={{ color: "#993d5c", fontSize: "20px", fontFamily:"Georama, sans-serif"}}>
                CK Programming 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto navlink">
                    <Nav.Link as={NavLink} to={routes.about} style={{ color: "#993d5c" }}>
                        About Us
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.admin.users} style={{ color: "#E9E4F0", paddingRight:"60px" }}>
                        <i className="users icon"></i> Users
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
