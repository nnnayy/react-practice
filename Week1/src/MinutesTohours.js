import React from 'react'
import { useState } from "react";
import './App.css';

export function MinutesTohours() {
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
        <label htmlFor='minutes'>Minutes </label>
        <input 
          value={flipped ? amount * 60 : amount} 
          id="minutes" 
          type="number" 
          onChange={onChange}
          disabled={flipped}>
        </input>
        <label htmlFor="hours">Hours </label>
        <input 
          value={flipped ? amount : amount / 60}
          id="hours"
          type="number"
          disabled={!flipped}
          onChange={onChange}>
        </input>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>Flip</button>
      </div>
    );
}