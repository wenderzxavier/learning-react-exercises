import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Prism from 'prismjs'
import AddColor from './components/AddColor'
import ColorList from './components/ColorList'
import '../styles/prism.css'

const styles = {
    root: {
        flexGrid: 1,
    },
}

class Ex4 extends Component {
    componentWillMount = () => {
        Prism.highlightAll()
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <h1>Chapter 8</h1>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <p>Add Color Component</p>
                        <pre style={{ margin: 15 }}>
                            <code className="language-javascript">

                                {`const AddColor = ({newColor = f => f}) => {
    let _title, _color

    const submit = e => {
        e.preventDefault()
        newColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color title..." required />
            <input ref={input => _color = input}
                type="color" required />
            <button>ADD</button>
        </form>
    )
}
export default AddColor`}
                            </code>
                        </pre>
                        <p>Color List Component</p>
                        <pre>
                            <code className="language-javascript">
                                {
`const ColorList = (props) =>
<div className="color-list">
    {(props.colors[0].length === 0) ?
        <p>No Colors Listed. (Add a Color)</p> :
        props.colors[0].map(color =>
            <Color
                key={color.id}
                {...color}
            />
    )}
</div>
                                
const mapStateToProps = (state) => ({                                 
    colors: [state.reducer]
})
                                
export default connect(mapStateToProps)(ColorList)`}
                            </code>
                        </pre>
                        <p>Star Component</p>
                        <pre>
                            <code className="language-javascript">
                                {
                                    `const Star = ({selected=false, onClick=f=>f}) => 
<div className={selected ? "star selected" : "star"} onClick={onClick}></div>

export default Star`}
                            </code>
                        </pre>
                        <p>StarRating Component</p>
                        <pre>
                            <code className="language-javascript">
                                {
                                    `const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) =>
<div className="star-rating">
    {[...Array(totalStars)].map((n, i) =>
        <Star key={i}
            selected={i < starsSelected}
            onClick={() => onRate(i + 1)} />
    )}
    <p>{starsSelected} of {totalStars} stars</p>
</div>

export default StarRating`}
                            </code>
                        </pre>
                        <p>Color Component</p>
                        <pre>
                            <code className="language-javascript">
                                {
                                    `const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) => 
<section className="color">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="color"
        style={{background: color}}>
    </div>
    <div>
        <StarRating starsSelected={rating} onRate={onRate} />
    </div>
</section>

export default Color`}
                            </code>
                        </pre>
                        <p>App Component</p>
                        <pre>
                            <code className="language-javascript">
                                {
                                    `
class App extends Component{
    addColor = (title, color) => {
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title: title,
                    color: color,
                    rating: 0,
                }
            ]
        }))
    }

    rateColor = (id, rating) => {
        this.setState((prevState) => ({
            colors: prevState.colors.map(color => (
                color.id !== id ? color : {
                    ...color,
                    rating,
                }
            ))
        }))
    }

    removeColor = (id) => {
        this.setState(prevState => ({
            colors: prevState.colors.filter(color => color.id !== id)
        }))
    }

    render(){
        return(
            <AddColor newColor={this.addColor} />
            <ColorList colors={this.state.colors} onRate={this.rateColor} onRemove={this.removeColor} />        
        )
    }
}`}
                            </code>
                        </pre>
                    </Grid>
                    <Grid item xs={6}>
                        <AddColor />
                        <ColorList />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Ex4.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Ex4)