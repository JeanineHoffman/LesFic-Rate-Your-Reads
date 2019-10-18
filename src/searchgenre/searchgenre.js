import React, { Component } from 'react';



export default class SearchGenre extends Component {
  state = {
    searchGenre: ""
  }

  buttonClicked = event => {
    console.log(this.state.searchGenre);
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
      <div>
        <section arial-label="search by genre" className="searchGenre">
          <label htmlFor="genresearch">Choose a genre to search</label>

          <select id="genresearch" className="searchText" name="genreSearch" onChange={this.handleListGenre} value={this.state.genreSearch}>>

          <option value="">--Please Choose a genre--</option>
            {genres.map(genre =>
              <option value={genre} key={genre}>{genre}</option>
            )}
          </select>
        </section>
        <section>
          <button className="startSearchbtn handleListGenre" onClick={this.buttonClicked}>Start Search</button>
        </section>
      </div>
    );
  }
}

