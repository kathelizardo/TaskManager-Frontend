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
                            src="/img/header.svg"
                            alt="img logo"
                            style={{ width: "20%", paddingTop: "15px" }}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-end tasklink" xs="auto">
                    <Col>
                        <Link to={routes.tasks}
                            style={{ color: "#603", textDecoration: "none" }}>
                            <i className="plus icon"></i> New Task
                        </Link>
                    </Col>
                    <Col >
                        <Link to="/all-tasks"
                            style={{ color: "#603", textDecoration: "none" }}>
                            <i className="clipboard list icon"></i> List All Tasks
                        </Link>
                    </Col>
                    <Col>
                        <p onClick={logoutSubmit}>
                            <Link to="/"
                                style={{ color: "#603", textDecoration: "none" }}>
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