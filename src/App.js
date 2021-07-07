import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Router>
          <Switch>
            <Route path="/" render={ () => <Pokedex pokemons={pokemons} /> } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
