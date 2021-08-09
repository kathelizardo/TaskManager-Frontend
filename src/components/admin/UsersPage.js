import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Modal, Button } from "react-bootstrap"

export default function UsersPage() {
    const [user, setUser] = useState([])
    const [token, setToken] = useState('')
    const [err, setErr] = useState('')

    const getUsers = async (token) => {
        try{
            const res = await axios.get('http://localhost:4000/api/users', {
            headers: { Authorization: token }
        })
        setUser(res.data)
        }catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenStore')
        setToken(token)
        if (token) {
            getUsers(token)
        }
    }, [])

    const deleteUser = (_id) => {
        axios.delete(`http://localhost:4000/api/users/${_id}`)
            .then(function () {
                console.log('User:', _id)
                console.log('Deleted!')
                handleClose()
            })
            .catch(function (error) {
                console.log(error)
            });
        window.location.href = '/admin/users'
    }
    console.log(token)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Container className="mt-5 ">
                <Container>
                    <h1 className="welcome2" style={{ paddingBottom: "10px" }}>All Users:</h1>
                    <p>{err}</p>
                </Container>
                <Container style={{ padding: "20px" }}>
                    <div className="Tabla">
                        <table className="ui selectable celled table">
                            <thead>
                                <tr className="center aligned">
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "rgb(235, 171, 203)"
                                    }}>
                                        ID
                                    </th>
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "rgb(235, 171, 203)"
                                    }}>
                                        Name
                                    </th>
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "rgb(235, 171, 203)"
                                    }}>
                                        Email
                                    </th>
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "rgb(235, 171, 203)"
                                    }}>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((item) => {
                                    return (
                                        <tr key={item._id} className="center aligned">
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                {/* <button type="submit" onClick={() =>
                                            deleteUser(item._id)} className="ui icon red button">
                                            <i className="trash alternate outline icon"></i>
                                        </button> */}
                                                <Button variant="danger" onClick={() => handleShow()}>
                                                    <i className="trash alternate outline icon"></i>
                                                </Button>
                                                <Modal show={show} onHide={() => handleClose()}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title className="descrip">
                                                            <i className="exclamation triangle icon"></i>
                                                            Deleting User
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="welcome2">
                                                        Are you sure to delete {item.name}?
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => handleClose()}>
                                                            Cancel
                                                        </Button>
                                                        <Button variant="danger" onClick={() => deleteUser(item._id)}>
                                                            Yes, delete it!
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Container>
        </>
    )
}
