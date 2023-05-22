import React from "react";
import "./App.css";
import DisplayContinents from "./components/DisplayContinents";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Continents</h1>
      </header>
      <DisplayContinents />
    </div>
  );
}

export default App;
