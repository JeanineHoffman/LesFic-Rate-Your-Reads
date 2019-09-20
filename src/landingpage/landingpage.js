import React, { Component }from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  handleClickSearchPage
  render() {
    return (
      <div className="Landingpage">
        <section>
        Start by clicking the button below and use one of our drop down menus to pick a search option and click on the button below it to get your results. You may restart your search from the same page. Happy reading!
        </section>
        <section>
          <Link  to='/search' className="goSearchBtn">Search</Link>
          <Link  to='/newbook' className="goSearchBtn">New Book</Link>
          </section>
      </div>
    );
  }
}

