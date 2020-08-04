import React, { Component } from 'react'
import './AddTodoComponent.css'
import PropTypes from 'prop-types'

import PendingTodo from '../PendingTodoComponent'
import CompletedTodo from '../CompletedTodoComponent'
import DeletedTodo from '../DeletedTodoComponent'
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
        this.handleTodoCompleted = this.handleTodoCompleted.bind(this)
        this.updateTodoList = this.updateTodoList.bind(this)
    }

    handleTodoAdd(e) {
        e.preventDefault();
        let { TodoList, TodoTask } = this.state
        TodoTask['id'] = 'uniq' + TodoList.length
        TodoList.push(TodoTask)
        this.setState({TodoTask : Object.assign({}, initialStateOfTask), TodoList: TodoList})
    }

    handleValueChange(e){
        let { TodoTask } = this.state
        TodoTask[e.target.name] = e.target.value
        this.setState({TodoTask : TodoTask})
    }

    handleTodoCompleted(id){
        let { TodoList } = this.state
        TodoList.map((task) => {if(task.id === id) task.status = "COMPLETED"})

        this.setState({TodoList})
    }

    updateTodoList(TodoList){
        this.setState({TodoList})
    }

    render() {
        let { TodoTask, TodoList} = this.state
        let { showDeleted } = this.props
        let { taskName, description, assignedTo, dueDate } = TodoTask
        return (
            <div className="todo-add-pending">
                <AddTodoForm submitButtonName="Add Todo Task" onSubmit={this.handleTodoAdd}>
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

                {!showDeleted && <><PendingTodo id="pending" TodoList={TodoList} handlePendingTodoClick={this.handleTodoCompleted}/>
                <CompletedTodo id="completed" TodoList={TodoList} updateTodoList={this.updateTodoList}/>
                </>}
                {showDeleted && <DeletedTodo id="deleted" TodoList={TodoList} />}
            </div>
        )
    }
}
