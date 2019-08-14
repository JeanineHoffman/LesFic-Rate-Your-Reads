import React, { Component } from 'react';
import './App.css';
import searchpage from './components/searchpage';
import buttonComponent from './components/searchbutton';
import { Routes } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

var LandingPage = require('./components/landingpage');
var ResultsPage = require('./components/resultspage');
var SearchPage = require('./components/searchpage');

class App extends Component {
  render() {

    return (
      // <div className="App">
      <Router>
        {/* <Navbar /> */}
        <main className="container-fluid">
          <Switch>
            <Route exact path='/home' component={LandingPage} />
          </Switch>
          {/* <Route exact path='/search' component={SearchPage} /> */}
          {/* <Route exact path='/results' component={ResultsPage} /> */}
        </main>
      </Router>
      // </div>
    );
  }
}

export default App;