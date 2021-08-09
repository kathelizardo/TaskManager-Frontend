import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function AboutPage() {
    return (
        <>
            <Container className="mt-5 text-center">

                <h1 className="welcome2">Hi there! do you want to know a little about us?</h1>

            </Container>

            <Container>
                <Row className="justify-content-md-center taskI">
                    <Col xs={6} md={4}>
                        <img
                            className="ui medium circular image" 
                            src="/img/consuelo.png"
                            alt="img consuelo"
                            style={{ width: "60%" }}
                        />
                        <p className="text-center">Consuelo Ascanio</p>
                    </Col>

                    <Col xs={6} md={4}>
                        <img
                            src="/img/kathe.png"
                            alt="img kathe"
                            style={{ width: "60%" }}
                        />
                        <p className="text-center">Katherine Lizardo</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
