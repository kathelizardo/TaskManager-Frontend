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
            <Container className="headertop">
                <Row>
                    <Col>
                    <h3 className="welcome">Work Space</h3>
                         <img
                            src="/img/header.svg"
                            alt="img logo"
                            style={{ width: "25%", paddingTop: "15px" }}
                        />
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2">
                    <div className="ui middle aligned animated list" style={{paddingTop:"40px"}}>
                            <div className="item">
                                <Link to={routes.tasks}
                                    style={{ color: "#603", textDecoration: "none" }}>
                                    <i className="plus icon"></i> New Task
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/tasks"
                                    style={{ color: "#603", textDecoration: "none" }}>
                                    <i className="sticky note outline icon"></i> All Tasks
                                </Link>
                            </div>
                            <div className="item">
                                <Link to={routes.login}
                                    onClick={logoutSubmit}
                                    style={{ color: "#603", textDecoration: "none"}} data-tooltip="Hello! Click here to log out" data-position="bottom center">
                                    <i className="sign out alternate icon"></i> Logout
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header