import React, { Component } from 'react'
import logo from '../logo.svg'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Learning React - Exercises Solutions</h1>
                    <p>{this.props.subheading}</p>
                </header>
            </div>
        )
    }
}

export default Header