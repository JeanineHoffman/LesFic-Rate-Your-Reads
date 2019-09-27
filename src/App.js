import React, { Component } from 'react';
import LandingPage from './landingpage/landingpage';
import SearchPage from './searchpage/searchpage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NewEntryBtn from './newEntry/newbook';
import { classBody } from '@babel/types';

export default class App extends Component {
  state = {
    books: []
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


  addBook = (e, history) => {
    e.preventDefault();
    const id = this.state.books.length + 1;
    const { author, title, genre } = e.target;
    const book = {
      id,
      author: author.value,
      title: title.value,
      genre: genre.value
    }
    console.log(book);
    // fetch post request
    // .then()


    // this.setState({books: [...this.state.books, book]},()=>{
    //   history.push('/');
    // });
    fetch(`https://lesfic.herokuapp.com/books`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(book),
    })
    .then(res => res.json())
      .then(function (book) {
        this.setState({ books: [...this.state.books, book] }, () => {
          history.push('/books');
        });
      })
  }
  
  render() {
    return (
      <div className="App">
        <header role="banner">LesFic: Rate Your Reads</header>
        <main className="container-fluid">
          
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/search' render={(rprops) => <SearchPage {...rprops} books={this.state.books} />} />
            <Route exact path='/newbook' render={(rprops) => <NewEntryBtn {...rprops} addBook={this.addBook} />} />
          </Switch>
          
        </main>
      </div>
    );
  }
}

