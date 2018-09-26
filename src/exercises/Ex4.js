import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class Ex4 extends Component {
    render() {
        return (
        <div>
            <h1>Chapter 8: Redux</h1>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <p>Code</p>
                </Grid>
                <Grid item xs={6}>
                    <div onClick={() => (console.log("Cliquei"))}>
                        <span>Celebrate!!!</span>
                        <span>(Click to start over)</span>
                    </div>
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default Ex4