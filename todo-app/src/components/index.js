import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from "react-router-dom";

import {TodoAppProvider} from '../context/context'
import LoginPage from './LoginComponent'
import DashboardPage from './RootComponent'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <TodoAppProvider>
            <Router>
                {/*Route to login*/}
                <Route exact path="/">
                    <LoginPage />
                </Route>
                {/*Route to dashboard*/}
                <Route path="/dashboard">
                    <DashboardPage />
                </Route>
            </Router>
            </TodoAppProvider>
        )
    }
}
