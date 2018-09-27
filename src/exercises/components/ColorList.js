import React from 'react'
import Color from './Color'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/chapter6.css'


const ColorList = (props) =>
    <div className="color-list">
        {(props.colors[0].length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            props.colors[0].map(color =>
                <Color
                    key={color.id}
                    {...color}
//                onRate={(rating) => onRate(color.id, rating)}
//                onRemove={() => onRemove(color.id)}
                />
            )
        }
    </div>


ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
}

const mapStateToProps = (state) => ({
        colors: [state.reducer]
})

export default connect(mapStateToProps)(ColorList)