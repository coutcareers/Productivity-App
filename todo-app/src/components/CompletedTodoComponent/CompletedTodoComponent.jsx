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
        let { TodoList } = this.props
        e.preventDefault()
        const data = e.dataTransfer.getData('transfer')
        const doc = document.getElementById(data)
        const para = doc.children[0]
        const paraId = para.getAttribute('id')
        TodoList.map(task => {if(task.id === paraId) task.status = "COMPLETED"})
        this.props.updateTodoList(TodoList);
        // para.classList.toggle('todo-completed-tasklist')
        // const icon = para.children[0]
        // icon.innerHTML = "&#10060";
        // e.target.appendChild(doc)
    }

    allowDrop = (e) => {
        e.preventDefault()
    }

    handleTodoDelete = (id) => {
        let { TodoList } = this.props
        TodoList.map(task => {if(task.id === id) task.status = "DELETED"})
        this.props.updateTodoList(TodoList);
    }

    render() {
        let { TodoList, id } = this.props
        return (
            <div className="todo-completed" id={id} onDrop={this.drop} onDragOver={this.allowDrop}>
                {TodoList.length>0 && TodoList.map((listItem, index) => listItem.status==="COMPLETED" && <p className="todo-completed-tasklist">
                    {listItem.taskName}
                    <span onClick={() => this.handleTodoDelete(listItem.id)} className="todo-deleted-button">&#10060;</span>
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
