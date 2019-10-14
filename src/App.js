import React from 'react';
import logo from './logo.svg';
import './App.css';
import Raihan from './components/raihan';
import Wellcome from './components/Wellcome';
function App() {
  return (
    <div className="App">
       
        <Raihan name="Oronno" age="26"/>
        <Wellcome cname="something"/>
    </div>
  );
}

export default App;
