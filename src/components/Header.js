import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="header-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lab1">Lab 1</Link>
        </li>
        <li>
          <Link to="/lab2">Lab 2</Link>
        </li>
        <li>
          <Link to="/lab3">Lab 3</Link>
        </li>
        <li>
          <Link to="/lab4">Lab 4</Link>
        </li>
        <li>
          <Link to="/lab5">Lab 5</Link>
        </li>
        <li>
          <Link to="/lab6">Lab 6</Link>
        </li>
        <li>
          <Link to="/lab7">Lab 7</Link>
        </li>
        <li>
          <Link to="/lab8">Lab 8</Link>
        </li>
        <li>
          <Link to="/lab9">Lab 9</Link>
        </li>
        <li>
          <Link to="/lab10">Lab 10</Link>
        </li>
        <li>
          <Link to="/lab11">Lab 11</Link>
        </li>
        <li>
          <Link to="/lab12_13">Lab 12-13</Link>
        </li>
        <li>
          <Link to="/lab14">Lab 14</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
