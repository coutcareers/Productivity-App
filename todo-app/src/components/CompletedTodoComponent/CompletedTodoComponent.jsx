import React, { Component } from 'react'
import './CompletedTodoComponent.css'
import PropTypes from 'prop-types'

export default class CompletedTodoComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props)
    {
        super(props)
        this.drop = this.drop.bind(this)
        this.allowDrop= this.allowDrop.bind(this)
    }

    drop = (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('transfer')
        const doc = document.getElementById(data)
        const para = doc.children[0]
        para.classList.toggle('todo-completed-tasklist')
        e.target.appendChild(doc)
    }

    allowDrop = (e) => {
        e.preventDefault()
    }

    render() {
        let { TodoList, id } = this.props
        return (
            <div className="todo-completed" id={id} onDrop={this.drop} onDragOver={this.allowDrop}>
                {TodoList.length>0 && TodoList.map((listItem, index) => listItem.status==="COMPLETED" && <p className="todo-completed-tasklist">
                    {listItem.taskName}</p>)
                }
                {
                    !(TodoList.length>0) && <p>Add a task to get started.</p>
                }
                {this.props.children}
            </div>
        )
    }
}
