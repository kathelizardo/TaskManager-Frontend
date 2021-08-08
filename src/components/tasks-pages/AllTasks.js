import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from "react-bootstrap"

toast.configure()
function AllTasks() {
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
                notify()

            }
        } catch (error) {
            window.location.href = "/";
        }
    }

    const [isDeleting, setIsDeleting] = useState(false)

    function toggleisDeleting () {
        setIsDeleting(!isDeleting)
    }

    const notify = () => toast.info("Task Deleted", { position: toast.POSITION.TOP_CENTER })
    return (
        <>
        <Container>
            <div className="TopTasks">
                <h4 className="ui horizontal divider header" style={{ color: "#603" }}>
                    <p className="welcome2">Work hard! You can do it! </p>
                </h4>
            </div>
            <div className="ui cards">
                {
                    tasks.map(task => (
                        <div className="col-md-3 p-4" key={task._id}>
                            <div className="card cardT" >
                                <div className="content">
                                    <div className="ui top left attached label"
                                        style={{ backgroundColor: "#603", color: "whitesmoke" }}>
                                        {task.name}
                                    </div>
                                    <div className="ui top right attached label"
                                        style={{ backgroundColor: "#603", color: "whitesmoke" }}>
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
                                        <p className="descrip">{format(task.date)}</p>
                                        <div className="extra content">
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <Link className="ui icon button" style={{ color: "#603" }} to={"tasks/" + task._id}>
                                                    <i className="edit icon"></i>
                                                </Link>
                                                <button className="ui icon red button" onClick={() => deleteTask(task._id)}>
                                                    <i className="trash alternate outline icon"></i>
                                                </button>

                                                {/* <!-- Button trigger modal --> */}
                                                <button type="button" onClick={toggleisDeleting} className="ui icon red button">
                                                    <i className="trash alternate outline icon"></i>
                                                </button>

                                                {/* <!-- Modal --> */}
                                                { isDeleting && 
                                                    <div style={{position:"fixed",
                                                                top: "0",
                                                                left:"0",
                                                                right:"0",
                                                                bottom:"0",
                                                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center"
                                                                }}>
                                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="staticBackdropLabel">Deleting task...</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    Are you sure to delete this task?
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="ui icon red button" onClick={() => deleteTask(task._id)}>
                                                                        <i className="trash alternate outline icon"></i> Yes, delete it!
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                                }

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

export default AllTasks