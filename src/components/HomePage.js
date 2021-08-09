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
                <Row className="justify-content-md-center boton">
                    <Col md="auto">
                        <Button className="ui violet basic button">
                            <Link to={routes.loginP}
                                className="botonTask"
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
