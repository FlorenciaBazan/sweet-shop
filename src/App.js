import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainter.js';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola mundo"}/>  
    </div>
  );
}

export default App;
