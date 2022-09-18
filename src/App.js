import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/navbar"
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemCount from './Components/ItemCount/itemcount';
import navbar from "./Components/Navbar/navbar.css"


function App() {

  const mensaje = "Bienvenido!"

  return (

    <div className='App'>
      <Navbar /> 
      <ItemListContainer greeting={mensaje} /> 
    </div>
    
  );
}

export default App;
