import React, { Component } from 'react'
import Header from '../components/Header'
import descriptions from '../utils/descriptions'

class Solution extends Component {
    render() {
        const { exerciseId } = this.props
        let solutionId = descriptions.filter(exercise => exercise.chapter === exerciseId)
        console.log(solutionId[0])
        return (
            <div>
                <Header subheading={solutionId[0].title} />
                {solutionId[0].code}
            </div>
        )
    }
}

export default Solution