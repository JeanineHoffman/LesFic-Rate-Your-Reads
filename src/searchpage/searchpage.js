import React, { Component } from 'react';
import SearchAuthor from '../searchauthor/searchauthor';
import SearchGenre from '../searchgenre/searchgenre';
// import store from "../store";
import ResultsPage from '../resultspage/resultspage';


export default class SearchPage extends Component {
  state = {
    searchAuthor: null,
    searchGenre: null
  }

  updateSearchPage = (author, genre) => {
      this.setState({
      searchAuthor: author,
      searchGenre: genre
    })
  }
 



render() {
 
  const {books} = this.props;
  
    const filteredBookTitles = [];
    if(this.state.searchAuthor){
      books.forEach(obj => {
          if(obj.author === this.state.searchAuthor){
            filteredBookTitles.push(obj.title) 
          }
        });
      }
   
    const filteredGenreTitles = [];
    if(this.state.searchGenre){
      books.forEach(obj => {
          if(obj.genre === this.state.searchGenre){
            filteredGenreTitles.push(obj.title) 
          }
        });
      }
   

    return (
      <div>
        <section>
        <SearchAuthor store={books} updateSearch={this.updateSearchPage}
        />
        <ResultsPage  list={filteredBookTitles} />

        </section>
        <section>
        <SearchGenre store={books} updateSearch={this.updateSearchPage}/>
        <ResultsPage  list={filteredGenreTitles} />

        </section>
      </div>
    );
  }
}