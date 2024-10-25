import React from "react";
import "../styles/index.css";

function Lab2() {
  return (
    <div className="container">
      <h1>About Temuulen Khuchit</h1>
      <p>
        I am a software developer, currently focused on <b>Java projects</b>, preparing for
        <b>AWS Cloud certifications</b>, and studying <b>object-oriented design, data structures, and algorithms</b>.
      </p>
      <hr />
      <h2>My Classes This Quarter</h2>
      <ul>
        <li>CS500 - STC Pt 1- ComPro (Science and Technology of Consciousness)</li>
        <li>CS401 - Modern Programming Practices</li>
        <li>CS472 - Web Programming</li>
        <li>CS435 - Algorithms</li>
        <li>CS544 - Enterprise Architecture</li>
      </ul>
      <h2>My Favorite Movies</h2>
      <ol>
        <li>
          The Shawshank Redemption (<a href="https://www.imdb.com/title/tt0111161/">IMDb</a>)
        </li>
        <li>
          Inception (<a href="https://www.imdb.com/title/tt1375666/">IMDb</a>)
        </li>
        <li>
          The Matrix (<a href="https://www.imdb.com/title/tt0133093/">IMDb</a>)
        </li>
      </ol>
    </div>
  );
}

export default Lab2;
