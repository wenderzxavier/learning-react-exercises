import React from 'react'
import Color from './Color'
import PropTypes from 'prop-types'
import '../../styles/chapter6.css'

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => 
    <div className="color-list">
    {console.log(`Colors => ${colors}`)}
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color
                    key={color.id}
                    {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)}
                />
            )
        }
    </div>


ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
}

export default ColorList