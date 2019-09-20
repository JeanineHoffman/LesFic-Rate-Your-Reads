import React from 'react';
// button to lead user to a form for new subbmission
// need even listener/handle event script
export default function NewEntryBtn(props){

  


  
    return (
      <section className="newEntryForm">
        <h1>Please enter the correct spelling of the author, book, and genre that you would like to add to our list</h1>
        <form label="inputData" onSubmit={e=>props.addBook(e,props.history)}>
          <label>Author Name as listed on Amazon or Bella Books</label>
          <input type="text" name="author" label="Author Name"/>
          <label>Book Title as listed on Amazon or Bella Books</label>
          <input type="text" name="title" label="Book Name"/>
          <label>Genre as listed on Amazon or Bella Books</label>
          <input type="text" name="genre" label="Genre Name"/>
          <input type="submit" aria-label="Add Book" value="Add Book"/>
        </form>

      </section>
    )
  
}

