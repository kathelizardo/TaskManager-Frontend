import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function HomePage() {
    return (
        <>
            <Container className="mt-5 text-center">
                <h1 className="welcome">Hello!</h1>
                <img
                    src="/img/homepage.svg"
                    alt="img homepage"
                    style={{ width: "30%" }}
                />
            </Container>
            <Container>
                <Row className="justify-content-md-center taskI">
                    <Col md="auto">
                        <div className="hometitle">Manage your time, improve your proactivity!</div>
                        <span ></span>
                    </Col>
                </Row>
                <Row className="justify-content-md-center taskI">
                    <Col md="auto">
                        <Button variant="outline-dark">
                            <Link to={routes.loginP}
                                style={{ color: "#271124", textDecoration: "none" }}
                                rol="button">
                                Start Task Manager
                            </Link>
                        </Button>
                        
                    </Col>

                    
                </Row>
            </Container>
        </>
    )
}
