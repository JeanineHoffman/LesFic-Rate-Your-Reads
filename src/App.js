import React, { Component } from 'react';
import './App.css';
import searchpage from './components/searchpage';
import buttonComponent from './components/searchbutton';
import {Routes} from './routes';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;