import React, { useState, useContext } from 'react'
import './LoginComponent.css'
import PropTypes from 'prop-types'

import { Redirect, useHistory } from 'react-router-dom'

import { TodoAppContext } from '../../context/context'
import LoginForm from '../../common/FormComponent'
import LoginInput from '../../common/InputTextComponent'


const LoginComponent = props => {
    
    const [ userName, setUserName ] = useState('')
    const { state, dispatch } = useContext(TodoAppContext);
    let history = useHistory()

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'loggedin', payload: userName})
        history.push('/dashboard')
    }

    const handleValueChange = (e) => {
        setUserName(e.target.value)
    }

    return (
            <div className="todo-login-form">
                <h2>Welcome to Productivity App</h2>
                <LoginForm submitButtonName="Login" onSubmit={handleLoginSubmit}>
                    <LoginInput 
                    className="login-username"
                    type="text"
                    label="Username"
                    placeholder="Name of user"
                    name="userName"
                    value={userName}
                    onChange={handleValueChange}/>
                </LoginForm>
            </div>
        )
    }

export default LoginComponent
