import './App.css';
import React from 'react'
import ViewData from './crud/ViewData';
import AddData from './crud/AddData';

function App() {
  
  return (
    <div className="App">
        <AddData />
        <h2>List</h2>
        <ViewData />
    </div>
  );
}

export default App;
