import React from 'react'
import { useState } from "react";
import './App.css';

export function KmToMiles() {
    const [amount, setAmount] = useState();
    const [flipped, setFlipped] = useState(false);
  
    const onChange =(event)=>{
        setAmount(event.target.value);
    };
    const reset =()=> setAmount(0);
    const onFlip =()=> {
        reset();
        setFlipped((current) => !current);
    };
  
    return (
      <div>
        <label htmlFor='km'>Kilometer </label>
        <input 
          value={flipped ? amount * 1000 : amount} 
          id="kilometer" 
          type="number"  
          onChange={onChange}
          disabled={flipped}>
        </input>
        <label htmlFor="meter">Meter </label>
        <input 
          value={flipped ? amount : amount / 1000}
          id="meter"
          type="number"
          disabled={!flipped}
          onChange={onChange}>
        </input>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>Flip</button>
      </div>
    );
}