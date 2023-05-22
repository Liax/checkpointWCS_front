import React from "react";
import "./App.css";
import DisplayContinents from "./components/DisplayContinents";
import { Routes, Route } from "react-router-dom";
import Continent from "./components/Continent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayContinents />}></Route>
        <Route path="/:continentCode" element={<Continent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
