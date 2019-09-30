import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landingpage';
import {BrowserRouter} from 'react-router-dom'

it.only('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});