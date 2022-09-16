import './App.css';
import React from "react";
import Navbar from "./Components/Navbar"
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
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
