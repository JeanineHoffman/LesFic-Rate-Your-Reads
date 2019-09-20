// receive data from api fetch and render the results for users. 
import React from "react"

export default class ResultsPage extends React.Component {
    render() {

      return (
        <div className="resultsPage">
        <ul>
          {this.props.list.map(item=><li>{item}</li>)}
        </ul>
        
        </div>
      );
    }
  }
  