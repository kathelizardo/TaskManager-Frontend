import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container, Modal, Button } from "react-bootstrap"


toast.configure()
export default function AllTasks() {
    const [tasks, setTasks] = useState([])
    const [token, setToken] = useState('')

    const getTasks = async (token) => {
        const res = await axios.get('api/tasks', {
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
        try {
            if (token) {
                await axios.delete(`api/tasks/${id}`, {
                    headers: { Authorization: token }
                })
                getTasks(token)
                handleClose()
                notify()
            }
        } catch (error) {
        }
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const notify = () => toast("Task Deleted", { position: toast.POSITION.TOP_CENTER })

    return (
        <>
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
                                                        to={"tasks/" + task._id}>
                                                        <i className="edit icon"></i>
                                                    </Link>
                                                    <Button variant="danger" onClick={() => handleShow()}>
                                                        <i className="trash alternate outline icon"></i>
                                                    </Button>
                                                    <Modal show={show} onHide={() => handleClose()}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title className="descrip">
                                                                <i className="exclamation triangle icon"></i>
                                                                Deleting Task
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="welcome2">
                                                            Are you sure to delete this task?
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={() => handleClose()}>
                                                                Cancel
                                                            </Button>
                                                            <Button variant="danger" onClick={() => deleteTask(task._id)}>
                                                                Yes, delete it!
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <ToastContainer />
            </Container>
        </>
    )
}
