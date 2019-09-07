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
    searchGenre: event.target.value
  });
};
  render() {

    return (
      <div>
        <section arial-label="search by genre" className="searchGenre">
          <label htmlFor="genresearch">Choose a genre to search</label>

          <select id="genresearch" className="searchText" name="genreSearch" onChange={this.handleListGenre} value={this.state.genreSearch}>>
            <option value="">--Please Choose a genre --</option>
            <option value="scifi">Science Fiction</option>
            <option value="romance">Romance</option>
            <option value="paranormal">Paranormal</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </section>
        <section>
        <button className="startSearchbtn btn" onClick={this.buttonClicked}>Start Search</button>        
        </section>

      </div>
    );
  }
}

