import React, { Component } from 'react'
import './HeaderComponent.css'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import {TodoAppContext} from '../../context/context'
import SearchInput from '../../common/InputTextComponent'
import SignOutButton from '../../common/ButtonComponent'

export default class HeaderComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props)
    {
        super(props)

        this.state = {
            inputValue : ''
        }

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    }

    handleSearchInputChange(e) {
        let { value } = e.target
        this.setState({
            inputValue : value
        })
    }

    render() {
        let { inputValue } = this.state
        return (
            <div className="todo-header">
               <span id="todo-logo">
                   <TodoAppContext.Consumer>
                       {context => <span>Hello, {context.state.user}</span>}
                   </TodoAppContext.Consumer>
               </span>
               <span id="todo-search">
                   <SearchInput 
                        type="text"
                        name="search"
                        value={inputValue}
                        onChange={this.handleSearchInputChange}
                        placeholder="Search here"
                    />
                </span>
                <span id="todo-logout">
                <Link to='/'><SignOutButton onClick={this.handleSignOut}
                               name="Sign Out"
                />
                </Link>
                </span>
            </div>
        )
    }
}
