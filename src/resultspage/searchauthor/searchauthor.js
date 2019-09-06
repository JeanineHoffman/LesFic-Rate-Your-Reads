// authorsearch component-take input from data request and fetch from the API/STORE

import React, { Component } from 'react';


export default class SearchByAuthor extends Component {
    state = {
        searchAuthor: ""
    }
    
    buttonClicked = event => {
        this.props.updateSearch(this.state.searchByAuthor, "")
    };
  
    handleChangeAuthor = event => {
      this.setState({
        searchByAuthor: event.target.value
      });
    };
    render() {
    return (
      <div>
        <section aria-label="search author" className="searchAuthor">
          <label htmlFor="authorsearch">Choose an author</label>
          <select id="authorsearch" name="authorSearch" onChange={this.handleChangeAuthor} value={this.state.authorSearch}>
            <option value="">--Please Choose an author--</option>
            <option value="Fletcher DeLancey">Fletcher DeLancey</option>
            <option value="Jae">Jae</option>
            <option value="Caren J. Werlinger">Caren J. Werlinger</option>
            <option value="Jeanine Hoffman">Jeanine Hoffman</option>
          </select>
        </section>
        <section>
          <button className="startSearchbtn btn" onClick={this.buttonClicked}>Start Search</button>
        </section>
      </div>
    );
  }
}
