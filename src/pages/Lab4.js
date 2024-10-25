import React from "react";
import "../styles/index.css";

function Lab4() {
  return (
    <div className="container">
      <h1>Execution Context</h1>
      <p>
        This lab focuses on understanding the concept of execution context in JavaScript, including the call stack and
        lexical environment.
      </p>
      <h2>Topics Covered</h2>
      <ul>
        <li>Global Execution Context</li>
        <li>Function Execution Context</li>
        <li>Lexical Environment</li>
        <li>Hoisting</li>
      </ul>
      <h2>Examples</h2>
      <pre className="code-block">
        {`function example() {
  console.log(a); // undefined due to hoisting
  var a = 10;
  console.log(a); // 10
}
example();`}
      </pre>
    </div>
  );
}

export default Lab4;
