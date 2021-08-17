import React, { useState } from 'react'
import axios from 'axios'
import { Container, Col, Row } from "react-bootstrap"



export default function LoginPage({ setIsLogin }) {
    const [user, setUser] = useState({email: '', password: '' })
    const [err, setErr] = useState('')

    const onChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        setErr('')
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/api/users/login',{
                email: user.email,
                password: user.password
            })
            setUser({email: '', password: ''})
            localStorage.setItem('tokenStore', res.data.token)
            setIsLogin(true)
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }



    return (
        <>
            <Container className="mt-5">
                <h1 className="titulosL">First ... log in:</h1>
            </Container>
            <Container className="mt-5">
                <Container className="ui compact segment" style={{width:"350px"}}>
                    <div className="ui">
                        <div className="column loginC">
                            <form onSubmit={loginSubmit} >
                                <div className="ui form">
                                    <div className="field">
                                        <label style={{color:"#603"}}>Email</label>
                                        <div className="ui left icon input">
                                            <input 
                                                type="email"
                                                name="email" id="login-email"
                                                placeholder="example@email.com"
                                                required value={user.email}
                                                onChange={onChange} 
                                            />
                                                <i className="at icon"></i>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label style={{color:"#603"}}>Password</label>
                                        <div className="ui left icon input">
                                            <input 
                                                type="password" 
                                                name="password" 
                                                id="login-password"
                                                placeholder="Password" 
                                                required 
                                                value={user.password}
                                                autoComplete="true"
                                                onChange={onChange} 
                                            />
                                                <i className="lock icon"></i>
                                        </div>
                                    </div>
                                    <Container className="text-center">
                                    <button 
                                        type="submit" 
                                        className="ui submit button"
                                        style={{ backgroundColor: "#603", color: "whitesmoke" }}
                                        >
                                        <i className="sign-in icon"></i>
                                        Login
                                    </button>
                                    </Container>
                                </div>
                            </form>
                        </div>
                        {/* <div className="middle aligned column">
                            <div className="ui small button" style={{ backgroundColor: "#603" }}>
                                <Link to={routes.register} 
                                    style={{ color: "whitesmoke", textDecoration: "none" }}>
                                    <i className="user plus icon"></i>
                                       Register
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="ui vertical divider">
                        <i className="angle left icon geral"></i>
                        <i className="angle right icon geral"></i>
                    </div> */}
                </Container>
            </Container>

            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h3 className="msj">{err}</h3>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-end">
                    <Col sm={4}>
                        <img
                            src="/img/loginpage.svg"
                            alt="img logo"
                            style={{ width: "80%", paddingTop: "15px" }}
                        />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
