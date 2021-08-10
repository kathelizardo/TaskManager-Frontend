import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Card, ListGroup } from "react-bootstrap"


export default function Count() {
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

    const countByStatus = (status) => {
        return {
            total: tasks.filter(task => task.status === status).length,
        };
    }
    return (
        <>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="text-center">Tasks Total: {tasks.length}</Card.Header>
                            <ListGroup variant="flush" key={tasks._id}>
                                <ListGroup.Item> 
                                    <p className="status"> Pending: "{countByStatus('Pending').total}"</p>
                                </ListGroup.Item>
                                <ListGroup.Item>In Progress: "{countByStatus('In Progress').total}"</ListGroup.Item>
                                <ListGroup.Item>Complete: "{countByStatus('Complete').total}" </ListGroup.Item>
                            </ListGroup>
                </Card>
            </Container>
        </>
    )
}
