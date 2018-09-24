import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import Grid from '@material-ui/core/Grid'
//import Prism from 'prismjs'
import '../styles/prism.css'

const styles = {
    root: {
        flexGrid: 1,
    },
}

const Star = ({ selected = false, onClick = f => f }) => {
    <div className={(selected) ? "star selected" : "star"} onClick={onClick}>
    </div>
}

class Chapter6 extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit = e => {
        const { _title, _color } = this.refs
        e.preventDefault()
        console.log(`New color: ${_title.value}, ${_color.value}`)
        _title.value = ""
        _color.value = "#000000"
        _title.focus()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type="text"
                    ref="_title"
                    placeholder="Color title..."
                    required
                />
                <input
                    type="color"
                    ref="_color"
                    required
                />
                <button>ADD</button>
            </form>
        )
    }
}

Chapter6.propTypes = {
    classes: PropTypes.object,
}

export default Chapter6