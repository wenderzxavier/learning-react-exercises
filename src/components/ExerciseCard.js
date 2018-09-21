import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = {
    card: {
        maxWidth: 375,
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none'
    }
}

class ExerciseCard extends Component {
    render() {
        const { classes, exercise } = this.props
        return (
            <Link to={`/chapter/${exercise.chapter}`} className={classes.link}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            height={classes.media}
                            image={exercise.image}
                            title={exercise.title}
                        />
                        <CardContent>
                            <Typography color="textSecondary" variant="caption" component="p">
                                {exercise.section}
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {exercise.title}
                            </Typography>
                            <Typography component="p">
                                {exercise.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        )
    }
}

export default withStyles(styles)(ExerciseCard)