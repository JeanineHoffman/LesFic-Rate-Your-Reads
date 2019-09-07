import React, { Component } from 'react';
import Routes from './routes';

import './App.css';

export default class App extends Component {
  state = {
    id: [],
    genre: "",
    title: "",
    author: ""
  };
  componentDidMount() {
    
      fetch(`https://lesfic.herokuapp.com/books`)
    
      .then((booksResponse) => {
        return booksResponse.json()
      })
      .then(books => {
        this.setState({ books })
      }
      // .catch(error => (error))
      )
  };


  render() {

    return (
      <div className="App">
        <h1>LesFic: Rate Your Reads</h1>
        <Routes />
      </div>
    );
  }
}

