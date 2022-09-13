import React, {useState} from 'react';

function MiComponente() {
    
    const [contador, setContador] = useState(0);
    const stock = 50;
    const [total, setTotal] = useState(0);
    
    function Add() {
        setContador(contador + 1);
    }

    function Quitar() {
        setContador(contador - 1);
    }

    function Agregar() {
        if (contador<stock) {
            setTotal(contador);
        } else {
            setTotal("stock insuficiente");
        }
    
    }
    
    return(
        <>
        <div>Stock:</div>
        <div>{stock}</div>
        <div>Seleccione cantidad:</div>
        <h1>{contador}</h1>
        <button onClick = {Add}>+</button>
        <button onClick = {Quitar}>-</button>
        <button onClick = {Agregar}>Agregar al carrito</button>
        <div>Total: {total}</div>
        </>
    )
}

export default MiComponente