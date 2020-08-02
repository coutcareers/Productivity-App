import React, { Component } from 'react'
import './ButtonComponent.css'
import PropTypes from 'prop-types'

export default class ButtonComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { name, onClick } = this.props
        return (
            <button className="todo-common-button"
                onClick={onClick}
            >
                {name}
            </button>
        )
    }
}
