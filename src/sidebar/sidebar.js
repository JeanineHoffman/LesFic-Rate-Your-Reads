import React, { Component } from 'react';
import sidebar from '../img/sidebar.png'
export default class sideBar extends Component {
  
  render() {
    return (
      <div arial-label="sidebar">
        <img className="sidebar"src={sidebar} alt="stack of books for side of page decoration" />
      </div>
    );
  }
}