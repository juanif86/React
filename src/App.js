import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/navbar"
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/itemDetailContainer'


function App() {

  const mensaje = "Bienvenido!"

  return (

    <div className='App'>
      <Navbar /> 
      <ItemListContainer greeting={mensaje} />
      <ItemDetailContainer />
    </div>
    
  );
}

export default App;
