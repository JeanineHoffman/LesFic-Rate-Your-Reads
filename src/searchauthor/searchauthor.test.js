import React from 'react';
import ReactDOM from 'react-dom';
import SearchAuthor from './searchauthor';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  let books = [{genre:'scifi', title:'The Caphenon (Chronicles of Alsea Volume 1)', author:'Fletcher DeLancey'},
  {genre:'scifi', title:'Without A Front: The Producers Challenge (Chronicles of Alsea Book 2)',author:'Fletcher DeLancey'}]
  ReactDOM.render(
    <BrowserRouter> <SearchAuthor store={books} updateSearch={jest.fn()

    }/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
