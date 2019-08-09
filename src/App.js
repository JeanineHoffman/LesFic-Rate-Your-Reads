import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>LesFic: Rate Your Reads</h1>
        <section>
        <h4>The best way to search for new books in a variety of sub-genres and maybe find new authors to follow </h4>
        <p>Start a search for a new book or a new author to follow</p>
        </section>
        <section>
        <button type="button" class="goSearchBtn">Go Search</button>
        </section>
      </div>
    );
  }
}

export default App;