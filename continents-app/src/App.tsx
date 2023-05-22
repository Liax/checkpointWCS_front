import React from "react";
import "./App.css";
import DisplayContinents from "./components/DisplayContinents";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Continents</h1>
      </header>
      <div className="grid">
        <DisplayContinents />
      </div>
    </div>
  );
}

export default App;
