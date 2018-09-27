import React from 'react'
import CardGrid from '../views/CardGrid'
import '../styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Solution from '../views/Solution';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => (
        <CardGrid />
      )} />
      <Route exact path="/chapter/:id" render={({ match }) => (
        <Solution exerciseId={match.params.id} />
      )}
      />
    </Switch>
  </div>
)

export default App
