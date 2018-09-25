import React, { Component } from 'react'

class Chapter7 extends Component {
    state = {
        data: [],
        loaded: false,
        loading: false,
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        fetch('https://randomuser.me/api/?results=10')
            .then((res) => res.json())
            .then((obj) => obj.results)
            .then((data) => this.setState({
                loaded: true,
                loading: false,
                data
            }))
    }

    render(){
        const {data, loading} = this.state
        return (loading) ? 
            <div>Loading...</div> : 
            <ol className="people-list">
                {data.map((person, i) => {
                    const {first, last} = person.name
                    return <li key={i}>{first} {last}</li>
                })}
            </ol>
    }
}

export default Chapter7