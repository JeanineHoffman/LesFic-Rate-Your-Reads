import React from "react";
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import LandingPage from './components/landingpage';
import ResultsPage from './components/resultspage';
import SearchPage from './components/searchpage';


export class Routes extends React.Component {


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
