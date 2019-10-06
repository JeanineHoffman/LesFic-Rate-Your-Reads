// receive data from api fetch and render the results for users. 
import React, {Component} from "react"

export default class ResultsPage extends Component {
    render() {

      return (
        <div className="resultsPage">
        <ul>
          {this.props.list.map(item=>
          <li key={item.id}>{item}</li>
          )}
        </ul>
        </div>
      );
    }
  }
  