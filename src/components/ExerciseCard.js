import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    card: {
        maxWidth: 375,
        flexGrow: 1,
    },
    media: {
        height: 140,
    }
}

class ExerciseCard extends Component {
    render() {
        const { classes, title, image, description, section } = this.props
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        height={classes.media}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography color="textSecondary" variant="caption" component="p">
                            {section}
                        </Typography>
                        <Typography variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default withStyles(styles)(ExerciseCard)