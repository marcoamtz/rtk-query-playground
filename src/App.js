import { useState } from "react";
import PokemonList from "./components/PokemonList";

import "./App.css";

function App() {
  const [type, setType] = useState("ghost");

  const handleChange = (e) => setType(e.target.value);

  return (
    <div className="App">
      <select className="select-css" onChange={handleChange}>
        <option value={"ghost"}>Ghost</option>
        <option value={"fire"}>Fire</option>
        <option value={"water"}>Water</option>
      </select>
      <PokemonList type={type} />
    </div>
  );
}

export default App;
