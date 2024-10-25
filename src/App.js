import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import Lab6 from "./pages/Lab6";
import Lab7 from "./pages/Lab7";
import Lab8 from "./pages/Lab8";
import Lab9 from "./pages/Lab9";
import Lab10 from "./pages/Lab10";
import Lab11 from "./pages/Lab11";
import Lab12_13 from "./pages/Lab12_13";
import Lab14 from "./pages/Lab14";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab5" element={<Lab5 />} />
          <Route path="/lab6" element={<Lab6 />} />
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab8" element={<Lab8 />} />
          <Route path="/lab9" element={<Lab9 />} />
          <Route path="/lab10" element={<Lab10 />} />
          <Route path="/lab11" element={<Lab11 />} />
          <Route path="/lab12_13" element={<Lab12_13 />} />
          <Route path="/lab14" element={<Lab14 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
