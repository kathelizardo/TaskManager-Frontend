import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from "react-bootstrap"
import routes from '../../helpers/routes'

function Header({ setIsLogin }) {

    const logoutSubmit = () => {
        localStorage.clear()
        setIsLogin(false)
    }
    
    return (
        <>
            <Container >
                <Row className="justify-content-md-end">
                    <Col sm={12}>
                    <img
                    src="/img/tklogo.png"
                    alt="img logo"
                    style={{ width: "12%", paddingTop:"15px"}} />
                    </Col>
                </Row>
                <Row className="justify-content-md-end">
                    <Col sm={1}>
                        <Link to={routes.tasks} style={{ color: "#603", textDecoration: "none" }}>
                            <i className="plus icon"></i> New Task
                        </Link>
                    </Col>
                    <Col sm={2}>
                        <Link to="/" style={{ color: "#603", textDecoration: "none" }}>
                            <i className="clipboard list icon"></i> List All Tasks
                        </Link>
                    </Col>
                    <Col sm={1}>
                        <p onClick={logoutSubmit}>
                            <Link to="/" style={{ color: "#603", textDecoration: "none" }}>
                            <i className="sign out alternate icon"></i> Logout
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Header