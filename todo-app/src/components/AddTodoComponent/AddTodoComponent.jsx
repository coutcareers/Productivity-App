import React, { Component } from 'react'
import './AddTodoComponent.css'
import PropTypes from 'prop-types'

import PendingTodo from '../PendingTodoComponent'
import CompletedTodo from '../CompletedTodoComponent'
import AddTodoForm from '../../common/FormComponent'
import Input from '../../common/InputTextComponent'

const initialStateOfTask = {taskName: '',
description: '',
assignedTo: '',
dueDate: null,
status: 'PENDING'
}

export default class AddTodoComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props)

        this.state = {
        TodoTask : Object.assign({}, initialStateOfTask),
        TodoList : []
        }

        this.handleTodoAdd = this.handleTodoAdd.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleTodoAdd(e) {
        e.preventDefault();
        let { TodoList, TodoTask } = this.state
        TodoList.push(TodoTask)
        this.setState({TodoTask : Object.assign({}, initialStateOfTask), TodoList: TodoList})
    }

    handleValueChange(e){
        let { TodoTask } = this.state
        TodoTask[e.target.name] = e.target.value
        this.setState({TodoTask : TodoTask})
    }

    render() {
        let { TodoTask, TodoList } = this.state
        let { taskName, description, assignedTo, dueDate } = TodoTask
        return (
            <div className="todo-add-pending">
                <AddTodoForm onSubmit={this.handleTodoAdd}>
                    <Input type="text"
                           label="Task Name"
                           placeholder="Build a portfolio"
                           name="taskName"
                           value={taskName}
                           onChange={this.handleValueChange}/>

                    <Input type="text"
                           label="Description"
                           placeholder="Portfolio site using javascript, html and css"
                           name="description"
                           value={description}
                           onChange={this.handleValueChange}/>

                    <Input type="text"
                           label="Assigned To"
                           placeholder="Assigned To"
                           name="assignedTo"
                           value={assignedTo}
                           onChange={this.handleValueChange}/>  

                    <Input type="date"
                           label="Due Date"
                           name="dueDate"
                           value={dueDate}
                           onChange={this.handleValueChange}/>  
                </AddTodoForm>

                <PendingTodo id="pending" TodoList={TodoList}/>
                <CompletedTodo id="completed" TodoList={TodoList}/>
            </div>
        )
    }
}
