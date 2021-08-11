import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './tasks-pages/Header'
import NewTask from './tasks-pages/NewTask'
import EditTask from './tasks-pages/EditTask'
import AllTasks from './tasks-pages/AllTasks'

export default function TasksPage({setIsLogin}) {
    return (
        <Router>
            <Header setIsLogin={setIsLogin} />
                <Route exact path="/" component={AllTasks}  />
                <Route exact path="/tasks" component={AllTasks}  />
                <Route exact path="/newtask" component={NewTask}  />
                <Route exact path="/tasks/:id" component={EditTask} />
        </Router>
    )
}