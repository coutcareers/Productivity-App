import React, { Component } from 'react'
import './PendingTodoComponent.css'
import PropTypes from 'prop-types'

import Draggable from '../../common/Draggable'
export default class PendingTodoComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { TodoList, handlePendingTodoClick } = this.props
        return (
            <div className="todo-pending">
                {TodoList.length>0 && TodoList.map((listItem, index) => listItem.status==="PENDING" && 
                    <Draggable id={index + 'drag'}>
                    <p id ={listItem.id} className="todo-pending-tasklist">
                    {listItem.taskName}
                    <span className="todo-completed-button" onClick={() => handlePendingTodoClick(listItem.id)}>&#9989;</span>
                    </p>
                    </Draggable>)
                }
                {
                    !(TodoList.length>0) && <p>Add a task to get started.</p>
                }
            </div>
        )
    }
}
