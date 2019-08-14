import React from "react";
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

var LandingPage = require('./components/landingpage');
var ResultsPage = require('./components/resultspage');
var SearchPage = require('./components/searchpage');



export class Routes extends React.Component {


  render() {
    return (

      <Router>
        {/* <Navbar /> */}
        <main className="container-fluid">
          <Switch>
            <Route exact path='/home' component={LandingPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route exact path='/results' component={ResultsPage} />
          </Switch>
        </main>
      </Router>
    );
  }
};
