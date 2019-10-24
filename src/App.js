import React, { Component } from 'react';
import LandingPage from './landingpage/landingpage';
import SearchPage from './searchpage/searchpage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NewEntryBtn from './newEntry/newbook';
import Sidebar from './sidebar/sidebar';

export default class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {

    fetch(`https://lesficreads.herokuapp.com/books`)

      .then((booksResponse) => {
        return booksResponse.json()
      })
      .then(books => {
        console.log({ books });
        this.setState({ books })
      })
  };


  addBook = (e, history) => {
    e.preventDefault();
    // const id = this.state.books.length + 1;
    const { author, title, genre } = e.target;
    const book = {
      author: author.value,
      title: title.value,
      genre: genre.value
    }
    

    fetch(`https://lesficreads.herokuapp.com/books`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(book),
    })
      .then(response => {
        if (!response.ok)
          return response.json().then(e =>
            Promise.reject(e))
        return response.json()
      })
      .then()
    this.setState({ books: [...this.state.books, book] }, () => {
      history.push('/');
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <div className="App">
        <header role="banner">LesFic Repository</header>
        <section className="container-fluid">
          <Sidebar />
          <main role='main'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/search' render={(rprops) => <SearchPage {...rprops} books={this.state.books} />} />
            <Route exact path='/newbook' render={(rprops) => <NewEntryBtn {...rprops} addBook={this.addBook} />} />
          </Switch>
        </main>
        </section>
      </div>
    );
  }
}
