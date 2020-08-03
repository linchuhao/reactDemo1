import React from 'react';
import CounterGroup from './components/CounterGroup'
import './App.css';

function App(props) {
  return (
    <div className="App">
        <CounterGroup store={props.store}/>
    </div>
  );
}

export default App;