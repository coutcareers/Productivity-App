import React, { Component } from 'react'
import './RootComponent.css'
import PropTypes from 'prop-types'
import Header from './../HeaderComponent'
import Body from '../BodyComponent';

export default class RootComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        )
    }
}
