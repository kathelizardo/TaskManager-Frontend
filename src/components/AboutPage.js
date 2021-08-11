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
                    <Col xs={8} md="auto" className="abinfo aboutimag" style={{width:"25%"}}>
                        <img
                            className="ui medium circular image"
                            src="/img/consuelo.png"
                            alt="img consuelo"
                            style={{ width: "100%", padding: "20px" }}
                        />
                        <p className="text-center nome">Consuelo Ascanio</p>
                        <div id="six">
                            <div className="row redes">
                                <div className="redes-container">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/consueloascanio/" className="linkedin" target="_blank" rel="noreferrer"><i className="linkedin icon"></i></a></li>
                                        <li><a href="https://github.com/cascanio" className="github" target="_blank" rel="noreferrer"><i className="github icon"></i></a></li>
                                        <li><a href="https://www.instagram.com/consuelo.ascanio/" className="instagram" target="_blank" rel="noreferrer"><i className="instagram icon"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md="auto" className="aboutimag" style={{width:"25%"}}>
                        <img
                            className="ui medium circular image"
                            src="/img/kathe.png"
                            alt="img kathe"
                            style={{ width: "100%", padding: "20px" }}
                        />
                        <p className="text-center nome">Katherine Lizardo</p>
                        <div id="six">
                            <div className="text-center row redes">
                                <div className="redes-container">
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/katherine-lizardo/" className="linkedin" target="_blank" rel="noreferrer"><i className="linkedin icon"></i></a></li>
                                        <li><a href="https://github.com/kathelizardo" className="github" target="_blank" rel="noreferrer"><i className="github icon"></i></a></li>
                                        <li><a href="https://www.instagram.com/kathelizardo/" className="instagram" target="_blank" rel="noreferrer"><i className="instagram icon"></i></a></li>
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
