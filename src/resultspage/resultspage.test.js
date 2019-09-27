import React from 'react';
import ReactDOM from 'react-dom';
import ResultsPage from './resultspage';
import { BrowserRouter } from 'react-router-dom'



it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter> <ResultsPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
