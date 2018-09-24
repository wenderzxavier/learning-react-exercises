import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg'

const Header = ({ subheading }) => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Learning React - Exercises Solutions</h1>
                <p>{subheading}</p>
            </header>
        </div>
    )
}

Header.propTypes = {
    subheading: PropTypes.string.isRequired,
}

export default Header