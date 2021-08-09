import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from "react-bootstrap"


export default function UsersPage() {
    const [user, setUser] = useState([])

    useEffect(() => {
        getUserInfo()
    }, [user.length])

    const getUserInfo = () => {
        axios.get('http://localhost:4000/api/users')
            .then(function (response) {
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const deleteUser = (_id) => {
        axios.delete(`http://localhost:4000/api/users/${_id}`)
            .then(function () {
                console.log('User:', _id)
                console.log('Deleted!')
                
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.href = '/admin/users'
    }

    return (
        <>
        <Container>
            <img
                src="/img/CKalluser.png"
                alt="img logo"
                style={{ width: "15%", paddingTop: "15px" }} />
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
                                        <button type="submit" onClick={() =>
                                            deleteUser(item._id)} className="ui icon red button">
                                            <i className="trash alternate outline icon"></i>
                                        </button>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </Container>
    </>
    )
}
