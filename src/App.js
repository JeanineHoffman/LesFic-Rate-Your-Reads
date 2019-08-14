import React, { Component } from 'react';
import './App.css';
import searchpage from './components/searchpage';
import buttonComponent from './components/searchbutton';
import { Routes } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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