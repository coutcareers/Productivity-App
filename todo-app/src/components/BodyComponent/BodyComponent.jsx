import React, { Component } from 'react'
import './BodyComponent.css'
import PropTypes from 'prop-types'

import LeftSideNav from './../LeftsideNavComponent'
import AddTodo from './../AddTodoComponent'

export default class BodyComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props)
        this.state = {
            showDeleted : false
        }
        this.handleShowDeleted = this.handleShowDeleted.bind(this)
    }

    handleShowDeleted(){
        let { showDeleted } = this.state
        this.setState({showDeleted : !showDeleted})
    }

    render() {
        let { showDeleted } = this.state
        return (
            <div className='todo-body'>
               <LeftSideNav handleShowDeleted={this.handleShowDeleted}/>
               <AddTodo showDeleted={showDeleted}/> 
            </div>
        )
    }
}
