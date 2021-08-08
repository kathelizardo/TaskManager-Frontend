import React, { useState } from 'react'
import axios from 'axios'
import { Container, Col, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'


export default function LoginPage({ setIsLogin }) {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const [err, setErr] = useState('')

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        setErr('')
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/api/users/login', {
                email: user.email,
                password: user.password
            })
            setUser({ name: '', email: '', password: '' })
            localStorage.setItem('tokenStore', res.data.token)
            setIsLogin(true)
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }


    return (
        <>
            <Container className="mt-5 ">
                <h1 className="welcome2">First ... login or register:</h1>
            </Container>
            <Container className="mt-5">
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <form onSubmit={loginSubmit} >
                                <div className="ui form">
                                    <div className="field">
                                        <label>Email</label>
                                        <div className="ui left icon input">
                                            <input type="email"
                                                name="email" id="login-email"
                                                placeholder="example@email.com"
                                                required value={user.email}
                                                onChange={onChangeInput} />
                                            <i className="at icon"></i>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <div className="ui left icon input">
                                            <input type="password" name="password" id="login-password"
                                                placeholder="Password" required value={user.password}
                                                autoComplete="true"
                                                onChange={onChangeInput} />
                                            <i className="lock icon"></i>
                                        </div>
                                    </div>
                                    <button type="submit" className="ui submit button" style={{ backgroundColor: "#603", color: "whitesmoke" }}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="middle aligned column">
                            <div className="ui big button" style={{ backgroundColor: "#603" }}>
                                <Link to={routes.register} style={{ color: "whitesmoke", textDecoration: "none" }} rol="button">
                                    <i className="signup icon"></i>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        <i className="angle left icon geral"></i>
                        <i className="angle right icon geral"></i>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <p className="welcome2">{err}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-md-end">
                    <Col md="auto">
                        <img
                            src="/img/CKflor.png"
                            alt="img logo"
                            style={{ width: "50%", paddingTop: "15px" }} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
