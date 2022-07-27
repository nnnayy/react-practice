import React from "react";
import { useState } from "react";
import './App.css';
import { KmToMiles } from "./KmToMiles";
import { MinutesTohours } from "./MinutesTohours";

function App() {
const [index, setIndex] = useState("0");
const onSelect =(event)=> {
  setIndex(event.target.value);
};

  return (
    <div>
      <h1>Unit Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & M</option>
      </select>
      {index === "0" ? <MinutesTohours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;