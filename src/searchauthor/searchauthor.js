// authorsearch component-take input from data request and fetch from the API/STORE

import React, { Component} from 'react';


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
      
      const authors = [];

      this.props.store.forEach(book=>{
        if(!authors.includes(book.author)){
          authors.push(book.author);
        }
      });



    return (
      <div className="searchComponent">
        <section aria-label="search author" className="searchAuthor">
          <label htmlFor="authorsearch">Choose an author </label>
          <select id="authorsearch" className="searchText" name="authorSearch" onChange={this.handleChangeAuthor} value={this.state.authorSearch}>
            <option value="">--Choose an author--</option>
            {authors.map(author=>
            <option value={author} key={author}>{author}</option>
            )}
          </select>
        </section>
        <section>
          <button className="startSearchbtn button" onClick={this.buttonClicked}>Start Search</button>
        </section>
      
      </div>
    );
  }
}

