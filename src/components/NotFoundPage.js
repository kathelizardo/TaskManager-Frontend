import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import routes from "../helpers/routes"
import {Link} from "react-router-dom"


export default function NotFoundPage() {
    return (
        <Container>
        <Row className="mt-5">
            <Col md={{ span: 6, offset: 3 }} className="text-center">
            <img 
                src="/img/404-not-found.svg"
                alt="img error-404"
                style={{width:"100%"}}/>

            <h2 style={{color:" #20002c"}}>Hey ... are you lost?</h2>
            <p style={{color:" #20002c"}}>go back to <Link to= {routes.home}>home</Link></p>
            </Col>
        </Row>
    </Container>
    )
}
