import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import descriptions from '../utils/descriptions'
import ExerciseCard from './ExerciseCard'
import { withStyles } from '@material-ui/core/styles'

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
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={16}>
                        {descriptions.map((exercise, key) => {
                            return (
                                <ExerciseCard key={key} title={exercise.title} section={exercise.section} description={exercise.description} image={exercise.image} />
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CardGrid)