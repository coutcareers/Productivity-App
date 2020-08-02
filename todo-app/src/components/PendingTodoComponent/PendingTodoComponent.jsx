import React, { Component } from 'react'
import './PendingTodoComponent.css'
import PropTypes from 'prop-types'

import Draggable from '../../common/Draggable'
export default class PendingTodoComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { TodoList } = this.props
        return (
            <div className="todo-pending">
                {TodoList.length>0 && TodoList.map((listItem, index) => listItem.status==="PENDING" && <Draggable id={index + 'drag'}><p className="todo-pending-tasklist">
                    {listItem.taskName}</p>
                    </Draggable>)
                }
                {
                    !(TodoList.length>0) && <p>Add a task to get started.</p>
                }
            </div>
        )
    }
}
