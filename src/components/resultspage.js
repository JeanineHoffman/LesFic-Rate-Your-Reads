// receive data from api fetch and render the results for users. 
import React from "react"
import {Link} from 'react-router-dom';

export default class ResultsPage extends React.Component {
    render() {
      
      return (
        <div className="Landingpage">
          Results page
        <p>lorem ipsum results go here.</p>
          <section>
          <Link  to='/search' class="goSearchBtn">Search</Link>
          </section>
        </div>
      );
    }
  }
  