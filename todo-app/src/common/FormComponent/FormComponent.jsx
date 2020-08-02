import React, { Component } from 'react'
import './FormComponent.css'
import PropTypes from 'prop-types'

import FormImage from '../../assets/Undraw_form.svg'
import InputButton from './../InputTextComponent'

export default class FormComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { onSubmit } = this.props
        return (
            <form onSubmit={onSubmit}>
                <img src={FormImage} alt="Form"/>
                {this.props.children}
                <InputButton 
                        className="todo-add-button"
                        type="submit"
                        value="Add Todo"
                />
            </form>
                
        )
    }
}
