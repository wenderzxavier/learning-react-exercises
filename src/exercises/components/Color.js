import React from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import '../../styles/chapter6.css'

const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) => 
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

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
}

export default Color