import React from 'react'
import Header from './tasks-pages/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NewTask from './tasks-pages/NewTask'
import EditTask from './tasks-pages/EditTask'
import AllTasks from './tasks-pages/AllTasks'
import Count from './tasks-pages/Count'

export default function TasksPage({setIsLogin}) {
    return (
        <Router>
            <Header setIsLogin={setIsLogin} />
                <Route path="/" exact component={AllTasks}  />
                <Route path="/tasks" exact component={AllTasks}  />
                <Route path="/newtask" exact component={NewTask}  />
                <Route path="/tasks/:id" exact component={EditTask} />
                <Route path="/tasks/count" component={Count} />
        </Router>
    )
}