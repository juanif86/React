import logo from './logo.svg';
import './App.css';
import React from "react";
import CartWidget from './Components/Cartwidget/CartWidget';
import Header from "./Components/Navbar/Header.css"
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer';
import MiComponente from './Components/MiComponente/MiComponente';

function App() {

  const mensaje = "Bienvenido!"

  return (

    <div className='App'>
      <Navbar /> 
      <ItemListContainer greeting={mensaje} />
      <MiComponente />
    </div>
    
  );
}

export default App;
