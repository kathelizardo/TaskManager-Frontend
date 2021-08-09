import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function HomePage() {
    return (
        <>
            <Container className="mt-5 text-center">
                <h1 className="welcome">Welcome to the Tasks Manager</h1>

                {/* EL NUEVO LOGO DE LA APP VA AQUI */}
                <img
                    src="/img/CKlogo.png"
                    alt="img logo"
                    style={{ width: "50%" }}
                />
            </Container>
            
            <Container>
                <Row className="justify-content-md-center taskI">
                    <Col  md="auto">
                    <div className="hometitle">Manage your time, improve your proactivity!</div>
                    <span ></span>
                    </Col>
                </Row>
            </Container>          
        </>
    )
}
