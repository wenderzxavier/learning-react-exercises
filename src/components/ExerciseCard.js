import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
    card: {
        maxWidth: 375,
        heigth: 250,
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none'
    }
}

const ExerciseCard = ({ classes, exercise }) => {
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

ExerciseCard.propTypes = {
    exercise: PropTypes.object.isRequired,
    classes: PropTypes.object
}


export default withStyles(styles)(ExerciseCard)