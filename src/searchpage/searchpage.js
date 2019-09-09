import React, { Component } from 'react';
import SearchAuthor from '../searchauthor/searchauthor';
import SearchGenre from '../searchgenre/searchgenre';
import store from "../store";
import ResultsPage from '../resultspage/resultspage';


export default class SearchPage extends Component {
  state = {
    searchAuthor: "",
    searchGenre: ""
}

updateSearchPage = (author, genre) => {
  this.setState({
   searchAuthor: author,
   searchGenre: genre
 })
 
 
}
render() {
 
  const filteredBookTitles = this.state.searchAuthor ? store['names'].find(obj => { return obj.name === this.state.searchAuthor; }).titles : ''
   
  const filteredGenreTitles = this.state.searchGenre ? store['genre'].find(obj => { return obj.genre === this.state.searchGenre; }).titles : ''

    return (
      <div>
        <section>
        <SearchAuthor store={store} updateSearch={this.updateSearchPage}
        />
        <ResultsPage  list={filteredBookTitles} />

        </section>
        <section>
        <SearchGenre store={store} updateSearch={this.updateSearchPage}/>
        <ResultsPage  list={filteredGenreTitles} />
        </section>
      </div>
    );
  }
}

