import React, { Component } from 'react';



export default class SearchGenre extends Component {
  state = {
    searchGenre: ""
  }

  buttonClicked = event => {
    this.props.updateSearch("", this.state.searchGenre)
  };

  handleListGenre = event => {
    this.setState({
      searchGenre:event.target.value
    });
  };
  render() {
    const genres = [];
    this.props.store.forEach(book => {
      if (!genres.includes(book.genre)) {
        genres.push(book.genre);
      }
    });

    return (
      <div className="searchComponent">
        <section arial-label="search by genre" className="searchGenre">
          <label htmlFor="genresearch">Choose a genre </label>

          <select id="genresearch" className="searchText" name="genreSearch" onChange={this.handleListGenre} value={this.state.genreSearch}>>

          <option value="">--Choose a genre--</option>
            {genres.map(genre =>
              <option value={genre} key={genre}>{genre}</option>
            )}
          </select>
        </section>
        <section>
          <button className="button handleListGenre" onClick={this.buttonClicked}>Start Search</button>
        </section>
      </div>
    );
  }
}

