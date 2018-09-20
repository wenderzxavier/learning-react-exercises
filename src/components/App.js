import React, { Component } from 'react'
import CardGrid from './CardGrid'
import '../styles/App.css'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <CardGrid />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App
