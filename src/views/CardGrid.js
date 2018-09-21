import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import descriptions from '../utils/descriptions'
import ExerciseCard from '../components/ExerciseCard'
import { withStyles } from '@material-ui/core/styles'
import Header from '../components/Header'

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 15,
    },
}

class CardGrid extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <Header subheading={""} />
                <Grid container className={classes.root} spacing={24}>
                    <Grid item xs={10}>
                        <Grid container justify="center" spacing={24}>
                            {descriptions.map((exercise, key) => (
                                <Grid key={key} item>
                                    <ExerciseCard exercise={exercise} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(CardGrid)