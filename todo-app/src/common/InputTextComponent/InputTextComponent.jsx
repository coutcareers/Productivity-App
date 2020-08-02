import React, { Component } from 'react'
import './InputTextComponent.css'
import PropTypes from 'prop-types'

export default class InputTextComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { type, label, placeholder, id, name, value, onChange, className } = this.props
        let classNames = "todo-common-input" 
        if(className!==null && typeof className!=='undefined')
        {
            classNames += ' '
            classNames += className
        }
        return (
            <>
            <label for={id}>
                {label}
            </label>
            <input className={classNames}
                   type={type}
                   placeholder={placeholder}
                   id={id}
                   name={name}
                   value={value}
                   onChange={onChange}
            >
            </input>
            </>
        )
    }
}
