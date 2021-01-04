import React from 'react';
import './App.css';
import json from './data/gemini_BTCUSD_1hr.json';

export function App() {
  return (
    <div className="App">
      {json.slice(0,10).map(c=><div>{c.High}</div>)}
    </div>
  );
}

