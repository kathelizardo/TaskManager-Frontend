import React from "react"
import {Switch, Route} from "react-router-dom"
import AboutPage from "../components/AboutPage"
import UsersPage from "../components/admin/UsersPage"
import HomePage from "../components/HomePage"
import LoginPage from "../components/LoginPage"
import NotFoundPage from "../components/NotFoundPage"
import TasksPage from "../components/TasksPage"
import routes from "../helpers/routes"
import AppLogin from "../components/AppLogin"
import RegisterPage from "../components/RegisterPage"



export default function AppRouter() {
    return (
        <Switch>
            <Route exact path={routes.home} component = {HomePage} />
            <Route exact path={routes.about} component={AboutPage}/>
            <Route exact path={routes.loginP} component={AppLogin}/>
            <Route exact path={routes.login} component={LoginPage}/>
            <Route exact path={routes.register} component={RegisterPage}/>
            <Route exact path={routes.taskspage} component={TasksPage}/>
            <Route exact path={routes.admin.users} component={UsersPage}/>
            <Route exact path={routes.login} component={LoginPage}/>
            <Route path="*" component={NotFoundPage}/>
    </Switch>
    )
}
