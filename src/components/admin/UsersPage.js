import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button } from "react-bootstrap"

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
            })
            .catch(function (error) {
                console.log(error)
            });
            getUsers(token)
        window.location.href = '/admin/users'
    }
    
    
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
                                        color: "#D3CCE3"
                                    }}>
                                        ID
                                    </th>
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "#D3CCE3"
                                    }}>
                                        Name
                                    </th>
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "#D3CCE3"
                                    }}>
                                        Email
                                    </th>
                                    <th style={{
                                        backgroundColor: "#603",
                                        color: "#D3CCE3"
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
                                                <Button variant="danger" onClick={() => deleteUser(item._id)}>
                                                    <i className="trash alternate outline icon"></i>
                                                </Button>
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
