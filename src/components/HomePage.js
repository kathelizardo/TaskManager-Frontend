import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function HomePage() {
    return (
        <>
            <Container className="text-center">
                <h1 className="hello">Hello!</h1>
                <h3 className="welcome">Welcome to the Task Manager</h3>
                <img
                    src="/img/homepage.svg"
                    alt="img homepage"
                    className="homeimg"
                />
            </Container>
            <Container>
                <Row className="justify-content-md-center slide">
                    <Col md="auto">
                        <div className="hometitle">Manage your time, improve your proactivity!</div>
                        <span ></span>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="get">
                        <div className="ui animated button" 
                             tabIndex="0" 
                             style={{ color:"#603", backgroundColor: "#D3CCE3"}}>
                            <div className="visible content boton">
                                Get Started
                            </div>
                            <div className="hidden content">
                                <Link to={routes.loginP}
                                    rol="button" 
                                    style={{textDecoration:"none", color:"#603"}}>
                                    <i className="right arrow icon"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
