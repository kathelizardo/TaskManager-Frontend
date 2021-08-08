import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import { Container, Row, Form, Group, Label } from "react-bootstrap"


export default function NewTask() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: '',
        date: ''
    })
    const history = useHistory()

    const onChangeInput = e => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value })
    }




    const createTask = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if (token) {
                const { title, description, status, date } = task;
                const newTask = {
                    title,
                    description,
                    status,
                    date
                }

                await axios.post('/api/tasks', newTask, {
                    headers: { Authorization: token }
                })

                return history.push('/')
            }
        } catch (err) {
            window.location.href = "/";
        }
    }

    return (
        <div className="col-md-6 offset-md-3" style={{ paddingTop: "30px" }}>
            <div className="card card-body cardN">
                <div className="Title">
                    <h4><i className="tasks icon"></i> New Task</h4>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">
                            <i className="pencil alternate icon"></i>   Title</label>
                        <input type="text"
                            name="title"
                            className="form-control"
                            placeholder="Title Here"
                            onChange={onChangeInput}
                            autoFocus
                            required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            <i className="info icon"></i>   Description</label>
                        <textarea name="description"
                            className="form-control"
                            placeholder="Description Here"
                            onChange={onChangeInput}
                            style={{ padding: "5px" }} rows="3"
                            required>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            <i className="calendar alternate outline icon"></i>   Date
                        </label>
                            <div>
                            <input type="date" id="date"
                            name="date"
                            onChange={onChangeInput} />
                            </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select name="status"
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            onChange={onChangeInput}>
                            <option defaultValue>Open this select menu</option>
                            <option name="status" value="Pending">Pending</option>
                            <option name="status" value="In Progress">In Progres</option>
                            <option name="status" value="Complete">Complete</option>
                        </select>
                    </div>

                    <form onSubmit={createTask}>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="ui button" style={{ color: "#603", marginTop: "30px" }}>
                                <i className="save icon"></i> Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}