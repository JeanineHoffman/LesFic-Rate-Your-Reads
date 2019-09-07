import React, { Component }from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  handleClickSearchPage
  render() {
    return (
      <div className="Landingpage">
        <section>
        <h3>The best way to search for new books in a variety of sub-genres and maybe find new authors to follow </h3>
        <p>To look for one of our included authors or to search for books, click the button below. From there, use one of our drop down menus to pick a search option and click on the button below it to get your results. You may resart your search from the same page. Happy reading!</p>
        </section>
        <section>
          <Link  to='/search' className="goSearchBtn">Search</Link>
          </section>
      </div>
    );
  }
}

