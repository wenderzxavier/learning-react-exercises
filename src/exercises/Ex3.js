import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Prism from 'prismjs'
import '../styles/prism.css'

class Ex3 extends Component {
    state = {
        data: [],
        loaded: false,
        loading: false,
    }

    componentWillMount() {
        Prism.highlightAll()
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

    render() {
        const { data, loading } = this.state
        return (loading) ?
            <div>Loading...</div> :
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <ol className="people-list">
                        {data.map((person, i) => {
                            const { first, last } = person.name
                            return <li key={i}>{first} {last}</li>
                        })}
                    </ol>
                </Grid>
                <Grid item xs={6}>
                    <pre>
                        <code className="language-javascript">
                            {`
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
                
render() {
    const {data, loading } = this.state
        return (loading) ?
        <div>Loading...</div> :
            <ol className="people-list">
                {data.map((person, i) => {
                    const { first, last } = person.name
                    return <li key={i}>{first} {last}</li>
                })}
            </ol>
}`}
                        </code>
                    </pre>
                </Grid>
            </Grid>
    }
}

export default Ex3