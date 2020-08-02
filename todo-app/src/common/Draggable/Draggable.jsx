import React, { Component } from 'react'
import './Draggable.css'
import PropTypes from 'prop-types'

export default class Draggable extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props)

        this.drag = this.drag.bind(this)
        this.noAllowDrop = this.noAllowDrop.bind(this)
    }

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id)
    }

    noAllowDrop = (e) => {
        e.stopPropagation()
    }

    render() {
        let { id } = this.props
        return (
            <div id={id} draggable={true} onDragStart={this.drag} onDragOver={this.noAllowDrop}>
                {this.props.children}
            </div>
        )
    }
}
