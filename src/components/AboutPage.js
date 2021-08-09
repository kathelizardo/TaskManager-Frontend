import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function AboutPage() {
    return (
        <>
            <Container className="mt-5 text-center">
                <h1 className="welcome2">Hi there! do you want to know a little about us?</h1>
            </Container>
            <Container className="mt-5 text-center">
                <img
                    src="/img/CKlogo.png"
                    alt="img logo"
                    className="logo"
                    />
            </Container>
            <Container className="mt-5 text-center about">
                <Row className="justify-content-md-center">
                    <Col xs={8} md="auto" className="column" style={{width:"25%"}}>
                        <img
                            className="ui medium circular image"
                            src="/img/consuelo.png"
                            alt="img consuelo"
                            style={{ width: "100%", padding: "20px" }}
                        />
                        <p className="text-center nome">Consuelo Ascanio</p>
                        <div id="six">
                            <div class="row redes">
                                <div class="redes-container">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/consueloascanio/" class="linkedin" target="_blank" rel="noopener"><i class="linkedin icon"></i></a></li>
                                        <li><a href="https://github.com/cascanio" class="github" target="_blank" rel="noopener"><i class="github icon"></i></a></li>
                                        <li><a href="https://www.instagram.com/consuelo.ascanio/" class="instagram" target="_blank" rel="noopener"><i class="instagram icon"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md="auto" className="column" style={{width:"25%"}}>
                        <img
                            className="ui medium circular image"
                            src="/img/kathe.png"
                            alt="img kathe"
                            style={{ width: "100%", padding: "20px" }}
                        />
                        <p className="text-center nome">Katherine Lizardo</p>
                        <div id="six">
                            <div class="text-center row redes">
                                <div class="redes-container">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/katherine-lizardo/" class="linkedin" target="_blank" rel="noopener"><i class="linkedin icon"></i></a></li>
                                        <li><a href="https://github.com/kathelizardo" class="github" target="_blank" rel="noopener"><i class="github icon"></i></a></li>
                                        <li><a href="https://www.instagram.com/kathelizardo/" class="instagram" target="_blank" rel="noopener"><i class="instagram icon"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
            </Container>
        </>
    )
}
