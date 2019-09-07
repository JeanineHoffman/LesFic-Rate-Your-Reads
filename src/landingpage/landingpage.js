import React, { Component }from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  handleClickSearchPage
  render() {
    return (
      <div className="Landingpage">
        <section>
        <h4>The best way to search for new books in a variety of sub-genres and maybe find new authors to follow </h4>
        <p>Start a search for a new book or a new author to follow</p>
        </section>
        <section>
          <Link  to='/search' className="goSearchBtn">Search</Link>
          </section>
      </div>
    );
  }
}

