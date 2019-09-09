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
      })
  };

  render() {
    return (
      <div className="App">
        <header role="banner">LesFic: Rate Your Reads</header>
        <Routes />
      </div>
    );
  }
}

