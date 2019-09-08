// receive data from api fetch and render the results for users. 
import React, { Component } from "react"

export default class ResultsPage extends Component {
  render() {
    let results = this.props.list;
    let listResults = results && results.map((result) =>
      <li>result</li>
    );
    return (
      <div className="resultsPage">
        <section>
          <ul>
            {listResults}
          </ul>
        </section>
      </div>
    );
  }
}
