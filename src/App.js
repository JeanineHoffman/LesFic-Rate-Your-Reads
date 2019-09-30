import React, { Component } from 'react';
import LandingPage from './landingpage/landingpage';
import SearchPage from './searchpage/searchpage';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import NewEntryBtn from './newEntry/newbook';

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


  addBook = (e,history) => {
    e.preventDefault();
    const id = this.state.books.length + 1;
    const {author,title,genre} = e.target;
    const book = {
      id,
      author: author.value,
      title: title.value,
      genre: genre.value
    }
    // fetch post request
    // .then()
    this.setState({books: [...this.state.books, book]},()=>{
      history.push('/');
    });
  }

  render() {
    return (
      <div className="App">
        <header role="banner">LesFic: Rate Your Reads</header>
        <main className="container-fluid">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/search' render={(rprops)=><SearchPage {...rprops} books={this.state.books} />} />
            <Route exact path='/newbook' render={(rprops)=><NewEntryBtn {...rprops} addBook={this.addBook} />}/>
          </Switch>
        </main>
      </div>
    );
  }
}
