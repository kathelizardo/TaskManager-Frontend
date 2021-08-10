import React, { useState } from 'react'
import axios from 'axios'
import { Container, Col, Row } from "react-bootstrap"
import routes from '../helpers/routes'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const [err, setErr] = useState('')

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        setErr('')
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/api/users', {
                name: user.name,
                email: user.email,
                password: user.password,
            })
            setUser({ name: '', email: '', password: '' })
            setErr(res.data.msg)
         
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
        
    }
   
    return (
        <>
            <Container>
                <Container>
                    <Row className="mt-5 justify-content-md-center">
                        <Col md="auto">
                            <p className="msj">{err}</p>
                        </Col>
                    </Row>
                </Container>
                
                <div className="row">
                    <div className="col-md-4 offset-md-4" style={{ paddingTop: "30px" }}>
                        <Container>
                            <Row className="justify-content-md-end">
                                <Col md="auto">
                                    <Link to={routes.login} 
                                        style={{ color: "#603", textDecoration: "none" }} 
                                        rol="button"
                                        >
                                        <i className="signup icon"></i>
                                        Login
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                        <div className="card cardN">
                            <h4 className="Title">
                                <i className="user plus icon"></i> 
                                Sign Up - New Register
                            </h4>

                            <div >
                                <div className="card-body">
                                    <form onSubmit={registerSubmit}>
                                        <div className="mb-3">
                                            <div className="form-label">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="register-name"
                                                    placeholder="Name" value={user.name}
                                                    onChange={onChangeInput}
                                                    required
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-label">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="register-email"
                                                placeholder="example@correo.com"
                                                required value={user.email}
                                                onChange={onChangeInput}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="field">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="register-password"
                                                placeholder="Password"
                                                required value={user.password}
                                                autoComplete="true"
                                                onChange={onChangeInput}
                                                className="form-control" 
                                            />
                                        </div>

                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button 
                                                type="submit" 
                                                className="ui button"
                                                style={{ color: "#603", marginTop: "30px" }}
                                                >
                                                <i className="save icon"></i> Save User
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
