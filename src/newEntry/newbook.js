import React from 'react';
import { Link } from 'react-router-dom';

export default function NewEntryForm(props) {

  return (
    <section className="newEntryForm">
      <p className="instructions">Please enter the correct spelling of the author, book, and genre that you would like to add to our list. You are on the honor system, so please ensure the book is a story featuring lesbians.</p>
      <form label="inputData" onSubmit={e => props.addBook(e, props.history)}>
        <ul>
          <li><label htmlFor="author">Author Name as listed on Amazon or Bella Books</label></li>
          <li><input required type="text" name="author" pattern=".{3,}" label="Author Name" /> </li>
          <li><label htmlFor="bookTitle">Book Title as listed on Amazon or Bella Books</label></li>
          <li><input required type="text" pattern=".{3,}" name="title" label="Book Name" /></li>
          <li><label htmlFor="genre">Genre</label></li>
          <li ><select className="dropdown" id="genre" aria-label="menuitem">
            <option value="Romance">Romance</option>
            <option value="Action/Adventure">Action/Adventure</option>
            <option value="Mystery/Suspense/Intrigue">Mystery/Suspense/Intrigue</option>
            <option value="Historical">Historical</option>
            <option value="Fantasy/Speculative">Fantasy/Speculative</option>
            <option value="Young Adult/New Adult">Young Adult/New Adult</option>
            <option value="General Fiction">General Fiction</option>
            <option value="SciFi">SciFi</option>
            <option value="Short Story Anthologies">Short Story Anthologies</option>
            <option value="Erotica">Erotica</option>
            <option value="Poetry">Poetry</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select>
          </li>
          <li className="nav"><input type="submit" className="newBookBtn button" aria-label="Add Book" value="Add Book" /><Link to='/search' className="goSearchBtn return">Search</Link></li>
        </ul>
      </form>
    </section>
  )
}

