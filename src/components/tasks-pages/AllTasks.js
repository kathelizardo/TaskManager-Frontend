import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import { Container, Button, Row, Col } from "react-bootstrap"
import Swal from 'sweetalert2'

export default function AllTasks() {
    const [tasks, setTasks] = useState([])
    const [token, setToken] = useState('')

    const getTasks = async (token) => {
        const res = await axios.get('https://taksmanager.herokuapp.com/api/tasks', {
            headers: { Authorization: token }
        })
        setTasks(res.data)
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenStore')
        setToken(token)
        if (token) {
            getTasks(token)
        }
    }, [])

    const deleteTask = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    if (token) {
                        axios.delete(`https://taksmanager.herokuapp.com/api/tasks/${id}`, {
                            headers: { Authorization: token }
                        })
                        getTasks(token)
                    }
                } catch (error) {
                }
                new Swal("Task Deleted!", {
                    icon: "success",
                });
            } else if (
                result.dismiss === Swal.DismissReason.can
            ) {
                new Swal.fire(
                    'Cancelled',
                    'Your task is safe :)',
                    'error'
                )
            }
        })
    }

    const countByStatus = (status) => {
        return {
            total: tasks.filter(task => task.status === status).length,
        };
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="ui mini horizontal divided list" style={{color:"603"}}>
                            <div className="item">
                                <div className="content">
                                    <p className="header" md="auto" style={{color:"603"}} >Tasks Pending: "{countByStatus('Pending').total}"</p>
                                </div>
                            </div>
                            <div className="item" >
                                <div className="content" style={{color:"603"}}>
                                    <p className="header" > Tasks In Progress: "{countByStatus('In Progress').total}"</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <p className="header"style={{color:"603"}}>Tasks Complete: "{countByStatus('Complete').total}"</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <p className="header">Total: "{tasks.length}"</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
            </Container>
            <Container>
                <div className="TopTasks">
                    <h4 className="ui horizontal divider header" style={{ color: "#603" }}>
                        <p className="welcome3">Work hard! You can do it! </p>
                    </h4>
                </div>
                <div className="ui cards">
                    {
                        tasks.map(task => (
                            <div className="col-md-3 p-4" key={task._id}>
                                <div className="card cardT" >
                                    <div className="content">
                                        <div className="ui top left attached label"
                                            style={{
                                                backgroundColor: "#603",
                                                color: "whitesmoke"
                                            }}>
                                            {task.name}
                                        </div>
                                        <div className="ui top right attached label"
                                            style={{
                                                backgroundColor: "#603",
                                                color: "whitesmoke"
                                            }}>
                                            {task.status}
                                        </div>
                                        <div className="card-body">
                                            <div className="meta">
                                                <label>Title: </label> <p className="descrip">{task.title}</p>
                                            </div>
                                            <div className="ui divider"></div>
                                            <div className="description">
                                                <label>Description:</label> <p className="descrip">{task.description}</p>
                                            </div>
                                            <div className="ui divider"></div>
                                            <label>Limit Date: </label><p className="descrip">{format(task.date)}</p>
                                            <div className="extra content">
                                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                    <Link
                                                        className="ui icon button"
                                                        style={{ color: "#603" }}
                                                        to={"tasks/" + task._id} data-tooltip="Edit Task" data-position="left center">
                                                        <i className="edit icon"></i>
                                                    </Link>
                                                    <Button variant="danger" onClick={() => deleteTask(task._id)} 
                                                            data-tooltip="Delete Task" data-position="top center">
                                                        <i className="trash alternate outline icon"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}
