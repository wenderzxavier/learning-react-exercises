import React, { Component } from 'react'
import Header from '../components/Header'
import descriptions from '../utils/descriptions'
import PropTypes from 'prop-types'

class Solution extends Component {
    render() {
        const { exerciseId } = this.props
        let solutionId = descriptions.filter(exercise => exercise.chapter === exerciseId)
        return (
            <div>
                <Header subheading={solutionId[0].title} />
                {solutionId[0].code}
            </div>
        )
    }
}

Solution.propTypes = {
    exerciseId: PropTypes.string.isRequired,
}

export default Solution