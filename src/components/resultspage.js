// receive data from api fetch and render the results for users. 
import React from "react"
import {Link} from 'react-router-dom';

export default class ResultsPage extends React.Component {
    render() {
      console.log(this.props.list);
      return (
        <div className="resultsPage">
          {/* Results page */}
        <section>
          {this.props.list}
        </section>
          
        </div>
      );
    }
  }
  