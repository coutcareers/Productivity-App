import React, { Component } from 'react'
import './BodyComponent.css'
import PropTypes from 'prop-types'

import LeftSideNav from './../LeftsideNavComponent'
import AddTodo from './../AddTodoComponent'

export default class BodyComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='todo-body'>
               <LeftSideNav />
               <AddTodo /> 
            </div>
        )
    }
}
