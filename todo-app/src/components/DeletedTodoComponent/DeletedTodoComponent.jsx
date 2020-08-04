import React, { Component } from 'react'
import './DeletedTodoComponent.css'
import PropTypes from 'prop-types'

export default class CompletedTodoComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { TodoList, id } = this.props
        return (
            <div className="todo-deleted" id={id}>
                {TodoList.length>0 && TodoList.map((listItem, index) => listItem.status==="DELETED" && <p className="todo-deleted-tasklist">
                    {listItem.taskName}
                </p>)
                }
                {
                    !(TodoList.length>0) && <p>Add a task to get started.</p>
                }
                {this.props.children}
            </div>
        )
    }
}
