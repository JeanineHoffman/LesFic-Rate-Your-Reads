import React, { Component } from "react";
// import Component from "react-router-dom";

import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import LandingPage from './landingpage/landingpage';
import ResultsPage from './resultspage/resultspage';
import SearchPage from './searchpage/searchpage';


export default class Routes extends Component {


  render() {
    return (
    
      <Router>
        {/* <Navbar /> */}
        <main className="container-fluid">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/results' component={ResultsPage} />
          </Switch>
        </main>
      </Router>
    );
  }
};
