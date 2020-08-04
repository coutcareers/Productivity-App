import React, { Component } from 'react'
import './LeftSideNavComponent.css'
import PropTypes from 'prop-types'

import Button from '../../common/ButtonComponent'

export default class LeftSideNavComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <nav className="todo-left-side-nav">
                <span className="todo-button-wrapper"><Button name="Pending"></Button></span>
                <span className="todo-button-wrapper"><Button name="Completed"></Button></span>
                <span className="todo-button-wrapper"><Button name="Deleted" onClick={this.props.handleShowDeleted}></Button>
                </span>
            </nav>
        )
    }
}
