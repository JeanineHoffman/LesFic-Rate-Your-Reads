import React from 'react';



export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="Landingpage">
        <h1>LesFic: Rate Your Reads</h1>
        <section>
        <h4>The best way to search for new books in a variety of sub-genres and maybe find new authors to follow </h4>
        <p>Start a search for a new book or a new author to follow</p>
        </section>
        <section>
          <button type="submit" class="goSearchBtn"> Search</button>
          </section>
      </div>
    );
  }
}

