import React, { Component } from 'react'
import './HeaderComponent.css'
import PropTypes from 'prop-types'

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
               <span id="todo-logo">Hello, Jyotiman</span>
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
                <SignOutButton onClick={this.handleSignOut}
                               name="Sign Out"
                />
                </span>
            </div>
        )
    }
}
