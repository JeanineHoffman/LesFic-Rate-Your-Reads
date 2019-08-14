import React from 'react';
import buttonComponent from './searchbutton';


export default class SearchPage extends React.Component {
  render() {

    return (
      <div>
        <section  aria-label="search by author name" className="searchAuthor">
          <label for="authorsearch">Choose an author</label>

          <select id="authorsearch">
            <option value="">--Please Choose an author--</option>
            <option value="Fletcher DeLancey">Fletcher DeLancey</option>
            <option value="Jae">Jae</option>
            <option value="Caren J. Werlinger">Caren J. Werlinger</option>
            <option value="Jeanine Hoffman">Jeanine Hoffman</option>
          </select>
        </section>
        <section>
          <button type="submit" class="goSearchBtn"> Search</button>
        </section>


        <section arial-label="search by genre"className="searchGenre">
          <label for="genresearch">Choose an searchGenre</label>

          <select id="authorsearch">
            <option value="">--Please Choose a genre --</option>
            <option value="historical fiction">Historical Fiction</option>
            <option value="romance">Romance</option>
            <option value="paranormal">Paranormal</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </section>
        <section>
          <button type="submit" class="goSearchBtn"> Search</button>
        </section>

      </div>
    );
  }
}

